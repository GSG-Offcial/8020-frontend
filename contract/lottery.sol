pragma solidity ^0.7.0;

interface IERC20 {
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

contract Oracle{
    address admin;
    uint private randum;
    address contractAddress;

    constructor() {
        admin = msg.sender;
    }
    
    function addContractAddress(address add) public {
        require(msg.sender == admin,'ERROR:  only admin can change value');
        contractAddress = add;
    }
    
    function rand() public view returns(uint256) {
        require(msg.sender == contractAddress,'only contract can access value');
        return randum;
    }
    
    function feedRandomness(uint256 _rand) public{
        require(msg.sender == admin,'ERROR:  only admin can change value');
        randum = _rand;
    }
}

contract lotteryGsG{
    
    using SafeMath for uint256;
    
    IERC20 token;    
    Oracle oracle;
    
    
    struct pick3UserData{
        uint256 id;
        uint8 lotteryCount;
        uint256[] tickets;
        bool isExist;
    }

    struct pick4UserData{
        uint256 id;
        uint8 lotteryCount;
        uint256[] tickets;
        bool isExist;
    }
    
    uint256 public currentIdForPick3;
    uint256 public currentIdForPick4;
    uint256 public pick3Pot;
    uint256 public pick4Pot;
    uint256 public pick3Price;
    uint256 public pick4Price;
    uint256 public maxNoOfLottery;
    uint256 private nonce;
    uint256 public drawingLimitForPick3;
    uint256 public drawingLimitForPick4;
    address public _tokenAddress;
    address admin;
    address dev1;
    address dev2;
    address dev3;
    address dev4;
    address uniSwapLiqPool;
    address[] pick3Winners;
    address[] pick4Winners;
    
    
    mapping(address => pick3UserData) public pick3User;
    mapping(uint256 => address) public pick3UserList;

    mapping(address => pick4UserData) public pick4User;
    mapping(uint256 => address) public pick4UserList;
    mapping(address => uint256) public winningWallets;
    
    event Pick3LotteryBought(address indexed UserAddress,uint256[] UserPickNumber,uint256 AmountOfGsGToken,uint256 time);
    event Pick4LotteryBought(address indexed UserAddress,uint256[] UserPickNumber,uint256 AmountOfGsGToken,uint256 time);
    event Pick3Winner(address indexed winner,uint256 number,uint256 amount,uint256 time);
    event Pick4Winner(address indexed winner,uint256 number,uint256 amount,uint256 time);
    event manualWinnerPick3(address indexed winner,uint256 amount,uint256 time);
    event manualWinnerPick4(address indexed winner,uint256 amount,uint256 time);
    event DeveloperIncentive(address indexed developer,uint256 amount,uint256 time);
    event UniswapPool(address indexed uniswapAdd,uint256 amount,uint256 time);
    event Random(address indexed Address,uint256 number,uint256 pick,uint256 time);
    event RadeemwinningAmount(address indexed winner,uint256 amount);
    
    constructor() {
        
        //0x9CfA8a0Cb18F725DDdC3Fd86956925FC9127b776;
        //Rinkeby: 0xF8f1de38E298Cf9Ce5eE1855369689E83f6BE467
        
        _tokenAddress = 0xF8f1de38E298Cf9Ce5eE1855369689E83f6BE467;
        token = IERC20(_tokenAddress);

        //Rinkeby 0xD1df9DEa9081276c3220553718Abd2428C9D3cd2
        //0xc36314Cd072B838E2C0D3C19349dae33962d9c73
        oracle = Oracle(0xD1df9DEa9081276c3220553718Abd2428C9D3cd2);

        admin = msg.sender;
        pick3Price = 5*10**18; 
        pick4Price = 15*10**18; 
        dev1 = 0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3;
        dev2 = 0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3;
        dev3 = 0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3;
        uniSwapLiqPool = 0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3;
        dev4 = 0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3;
        maxNoOfLottery = 5;
    }
    
    
    modifier onlyAdmin() {
        require(admin == msg.sender,'ERROR: only admin has rigth');
        _;
    }
    
    function buyLotteryForPick3(uint256[] memory your_pick_number,uint256 amount)public {
        require(msg.sender != address(0), 'ERROR: zero address');
        require(token.balanceOf(msg.sender) >= pick3Price,"ERROR: Not Enough Balance");
        require(amount >= pick3Price*your_pick_number.length,'ERROR: not minimum investment');
        require(your_pick_number.length <= 5,'ERROR: Cannot buy more than 3 lottery tickets at a time');
        require(pick3User[msg.sender].lotteryCount <= 20,'ERROR: your lottery buy limit has exceeded');
        require(token.allowance(msg.sender,address(this)) >= amount,'ERROR: Approve token for this contract');

        if(!pick3User[msg.sender].isExist) {
            pick3UserData memory userStruct;
            
            userStruct = pick3UserData({
                id: currentIdForPick3,
                lotteryCount: pick3User[msg.sender].lotteryCount,
                tickets: pick3User[msg.sender].tickets,
                isExist: true
            });
            
            pick3User[msg.sender] = userStruct;
            pick3UserList[currentIdForPick3] = msg.sender;
            currentIdForPick3++;
        }
       
        token.transferFrom(msg.sender,address(this), amount);   
        developerIncentive(amount.mul(1).div(100),amount.mul(2).div(100));
        amount -= amount.mul(6).div(100);
        pick3Pot += amount;

        for(uint256 i=0; i<your_pick_number.length; i++){
            require(your_pick_number[i] <= 999,'ERROR: minium number for pick 3 should be < 10');
            pick3User[msg.sender].tickets.push(your_pick_number[i]);
            pick3User[msg.sender].lotteryCount++;
        }

        if(currentIdForPick3 > maxNoOfLottery) {
                drawingForPick3(999);
        }
            
        emit Pick3LotteryBought(msg.sender,your_pick_number,amount,block.timestamp);
    }
    
    function buyLotteryForPick4(uint256[] memory your_pick_number,uint256 amount)public {
        require(msg.sender != address(0), 'ERROR: zero address');
        require(token.balanceOf(msg.sender) >= pick4Price,"ERROR: Not Enough Balance");
        require(amount >= your_pick_number.length*pick4Price,'ERROR: not minimum investment');
        require(your_pick_number.length <= 5,'ERROR: cannot buy more 5 ticket at once');
        require(pick4User[msg.sender].lotteryCount <= 20,'ERROR: Cannot buy Lottery moreThan 20 times');
        require(token.allowance(msg.sender,address(this)) >= amount,'ERROR: Approve token for this contract');
        
        if(!pick4User[msg.sender].isExist) {
            pick4UserData memory userStruct;
            
            //add users data
            userStruct = pick4UserData({
                id: currentIdForPick4,
                lotteryCount: pick4User[msg.sender].lotteryCount,
                tickets: pick4User[msg.sender].tickets,
                isExist: true
            });
            
            pick4User[msg.sender] = userStruct;
            pick4UserList[currentIdForPick4] = msg.sender;
            currentIdForPick4++;
        }

       token.transferFrom(msg.sender,address(this), amount);  
       developerIncentive(amount.mul(1).div(100),amount.mul(2).div(100));
       amount -= amount.mul(6).div(100);
       pick4Pot += amount;

        for(uint256 i=0; i<your_pick_number.length; i++){
            require(your_pick_number[i] <= 9999,'ERROR: minium number for pick 5 should be < 9999');
            pick4User[msg.sender].tickets.push(your_pick_number[i]);
            pick4User[msg.sender].lotteryCount++;
        }
        
        if(currentIdForPick4 > maxNoOfLottery) {
            drawingForPick4(9999);
        }
        
        emit Pick4LotteryBought(msg.sender,your_pick_number,amount,block.timestamp);
    }
    
    function radeemYourWiningAmount() public {
        uint256 amount = winningWallets[msg.sender];
        require(amount > 0,'ERROR: not enough balance');
        token.transfer(msg.sender,amount);
        winningWallets[msg.sender] = 0;
        emit RadeemwinningAmount(msg.sender,amount);
    }
    
    /* ADMIN FUNCTIONS */
    
    function changePick3Price(uint256 newPrice) public onlyAdmin {
        pick3Price = newPrice;
    }
    
    function changePick4Price(uint256 newPrice) public onlyAdmin{
        pick4Price = newPrice;
    }
    
    function changeNoOfLottery(uint256 newLimit) external onlyAdmin{
        maxNoOfLottery = newLimit;
    }
    
    function uniSwapLiqPoolAdd(address add) external onlyAdmin{
        uniSwapLiqPool = add;
    }
    
    function addNewToken(address _address) external onlyAdmin{
           _tokenAddress = _address;
            token = IERC20(_tokenAddress);
    }
    
    /*  INTERNAL FUNCTIONS */
    

    function drawingForPick3(uint256 mod) internal returns(bool){
        uint256 amountForEveryUser;
        uint256   randNum = random(mod,3);
    
        if(drawingLimitForPick3 >= 2){
            manualDrawForPick3();
            return false;
        }

        for(uint8 i=0; i< maxNoOfLottery; i++){
                if(includes(getUserLotteryNumber(pick3UserList[i],3), randNum)){
                    pick3Winners.push(pick3UserList[i]);
                }
            delete pick3User[pick3UserList[i]];
            delete pick3UserList[i];
        }          
        
        if(pick3Winners.length >= 1) {
            amountForEveryUser = pick3Pot.div(pick3Winners.length);
            for(uint8 i=0; i<pick3Winners.length; i++){
                winningWallets[pick3Winners[i]] += amountForEveryUser;
                emit Pick3Winner(pick3Winners[i],randNum,amountForEveryUser,block.timestamp);
            }
            drawingLimitForPick3 = 0;
        }
     
        drawingLimitForPick3++;
        pick3UserList[0] = pick3UserList[currentIdForPick3 - 1];
        // pick3User[pick3UserList[]]
        currentIdForPick3 = 1;
        delete pick3Winners;
        return true;
    }   
    
    function drawingForPick4(uint256 mod) internal returns(bool){
        uint256 amountForEveryUser;
        uint256 randNum = random(mod,4);
             
        if(drawingLimitForPick4 >= 2){
            manualDrawForPick4();
            return false;
        }
        
        for(uint i=0; i< maxNoOfLottery; i++){
                if(includes(getUserLotteryNumber(pick4UserList[i],4), randNum)){
                    pick4Winners.push(pick4UserList[i]);
                }
                
            delete pick4User[pick4UserList[i]];
            delete pick4UserList[i];
        }           
        
         if(pick4Winners.length >= 1) {
            amountForEveryUser = pick4Pot.div(pick4Winners.length);
            
            for(uint8 i=0; i<pick4Winners.length; i++){
                winningWallets[pick4Winners[i]] += amountForEveryUser;
                emit Pick4Winner(pick4Winners[i],randNum,amountForEveryUser,block.timestamp);
            }
            drawingLimitForPick4 = 0;
        }
        
     
        drawingLimitForPick4++;
        pick4UserList[0] = pick4UserList[currentIdForPick4 - 1];
        currentIdForPick4 = 1;
        delete pick4Winners;
        return true;
    }   
    
    function manualDrawForPick3() internal {
        address winner1 = pick3UserList[random(maxNoOfLottery,3)];
        address winner2 = pick3UserList[random(maxNoOfLottery,3)];
        address winner3 = pick3UserList[random(maxNoOfLottery,3)];
        address winner4 = pick3UserList[random(maxNoOfLottery,3)];
        address winner5 = pick3UserList[random(maxNoOfLottery,3)];  
        
        developerIncentive(pick3Pot.mul(1).div(100),pick3Pot.mul(10).div(100));
        
        pick3Pot = pick3Pot - pick3Pot.mul(14).div(100);
        uint256 amountForEveryUser = pick3Pot.div(5);        
        deleteAllUsersData(3);
        pick3Pot = 0;
        drawingLimitForPick3 = 0;
        pick3UserList[0] = pick3UserList[currentIdForPick3 - 1];
        currentIdForPick3 = 1;
        
        winningWallets[winner1] += amountForEveryUser;
        emit manualWinnerPick3(winner1,amountForEveryUser,block.timestamp);
        winningWallets[winner2] += amountForEveryUser;
        emit manualWinnerPick3(winner2,amountForEveryUser,block.timestamp);
        winningWallets[winner3] += amountForEveryUser;
        emit manualWinnerPick3(winner3,amountForEveryUser,block.timestamp);
        winningWallets[winner4] += amountForEveryUser;
        emit manualWinnerPick3(winner4,amountForEveryUser,block.timestamp);
        winningWallets[winner5] += amountForEveryUser;
        emit manualWinnerPick3(winner5,amountForEveryUser,block.timestamp);
    }
    
      function manualDrawForPick4() internal {
        address winner1 = pick4UserList[random(maxNoOfLottery,4)];
        address winner2 = pick4UserList[random(maxNoOfLottery,4)];
        address winner3 = pick4UserList[random(maxNoOfLottery,4)];
        address winner4 = pick4UserList[random(maxNoOfLottery,4)];
        address winner5 = pick4UserList[random(maxNoOfLottery,4)];  
        
        developerIncentive(pick4Pot.mul(1).div(100),pick4Pot.mul(10).div(100));
        
        pick4Pot = pick4Pot - pick4Pot.mul(14).div(100);
        uint256 amountForEveryUser = pick4Pot.div(5);
        deleteAllUsersData(4);
        pick4Pot = 0;
        drawingLimitForPick4 = 0;
        pick4UserList[0] = pick4UserList[currentIdForPick4 - 1];
        currentIdForPick4 = 1;

        winningWallets[winner1] += amountForEveryUser;
        emit manualWinnerPick4(winner1,amountForEveryUser,block.timestamp);
        winningWallets[winner2] += amountForEveryUser;
        emit manualWinnerPick4(winner2,amountForEveryUser,block.timestamp);
        winningWallets[winner3] += amountForEveryUser;
        emit manualWinnerPick4(winner3,amountForEveryUser,block.timestamp);
        winningWallets[winner4] += amountForEveryUser;
        emit manualWinnerPick4(winner4,amountForEveryUser,block.timestamp);
        winningWallets[winner5] += amountForEveryUser;
        emit manualWinnerPick4(winner5,amountForEveryUser,block.timestamp);
    }
 
    function getUserLotteryNumber(address userAdddress,uint8 your_pick) public view returns(uint256[] memory tickets){
        if(your_pick == 3) {
            return pick3User[userAdddress].tickets;
        } else if(your_pick == 4) {
            return pick4User[userAdddress].tickets;
        }
    }
    
    function deleteAllUsersData(uint256 pick) internal {
        if(pick == 3){
            for(uint256 i=0; i<=maxNoOfLottery; i++){
                delete pick3User[pick3UserList[i]];
                delete pick3UserList[i]; 

            }    
        }else if(pick == 4){
             for(uint256 i=0; i<=maxNoOfLottery; i++){
                delete pick4User[pick4UserList[i]];
                delete pick4UserList[i]; 
            }  
        }
        
    }
    
    function developerIncentive(uint256 amount,uint256 uniSwapLiqAmount) internal {
        
        token.transfer(uniSwapLiqPool,uniSwapLiqAmount);
        emit UniswapPool(uniSwapLiqPool,uniSwapLiqAmount,block.timestamp);
        
        token.transfer(dev1,amount);
        emit DeveloperIncentive(dev1,amount,block.timestamp);
        
        token.transfer(dev2,amount);
        emit DeveloperIncentive(dev2,amount,block.timestamp);
        
        token.transfer(dev3,amount);
        emit DeveloperIncentive(dev3,amount,block.timestamp);
        
        token.transfer(dev4,amount);
        emit DeveloperIncentive(dev4,amount,block.timestamp);
    }
    
    /* GETTER FUNCTIONS */
    
    function includes(uint256[] memory array,uint256 randomNumber) internal pure returns(bool){
        bool isTrue = false;
        for(uint8 i=0; i<array.length; i++){
            if(array[i] == randomNumber){
                isTrue = true;
            }
        }
        return isTrue;
    }
    
    function random(uint256 mod,uint256 pick) internal  returns (uint256) { 
       uint256 rand = uint256(keccak256(abi.encodePacked(
            oracle.rand(),
            nonce,
            block.timestamp,
            block.difficulty,
            msg.sender
        ))) % mod;
        nonce++;
        emit Random(msg.sender,rand,pick,block.timestamp);
        return rand;        
    }
    
}

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint) {
        uint c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }
    function sub(uint a, uint b) internal pure returns (uint) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }
    function sub(uint a, uint b, string memory errorMessage) internal pure returns (uint) {
        require(b <= a, errorMessage);
        uint c = a - b;

        return c;
    }
    function mul(uint a, uint b) internal pure returns (uint) {
        if (a == 0) {
            return 0;
        }

        uint c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }
    function div(uint a, uint b) internal pure returns (uint) {
        return div(a, b, "SafeMath: division by zero");
    }
    function div(uint a, uint b, string memory errorMessage) internal pure returns (uint) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint c = a / b;

        return c;
    }
}