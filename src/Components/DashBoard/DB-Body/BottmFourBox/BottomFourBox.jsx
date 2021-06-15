import React, { useEffect, useState } from 'react';
import './BottomFourBox.css';
import {
  getContract,
  calculatePrice,
  formatValue,
  formatNumber,
} from '../../../../utils/index';
import { abi, address } from '../../../../constants/8020.json';
import { useWeb3React } from '@web3-react/core';

export const BottomFourBox = ({ price, GS50Price }) => {
  const { library, account } = useWeb3React();

  const [contract, setContract] = useState();
  const [userBalance, setUserBalance] = useState('loading');
  const [userDivs, setUserDivs] = useState('loading');
  const [userRef, setUserRef] = useState('loading');
  const [userLoyalty, setUserLoyalty] = useState('loading');

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library]);

  useEffect(async () => {
    if (contract) {
      let tokens = await contract.myTokens();
      setUserBalance(formatValue(tokens));

      let divs = await contract.dividendsOf(account);
      setUserDivs(formatValue(divs));

      let refCom = await contract.referralBalance_(account);
      setUserRef(formatValue(refCom));

      let loyalty = await contract.loyaltyOf();
      setUserLoyalty(formatValue(loyalty));
    }
  }, [contract]);
  console.log(GS50Price, userBalance);
  return (
    <div>
      <div className="bottom-mainbox mainbox">
        <div>
          <p className="boxes" id="box_1">
            Your Balance {formatNumber(userBalance)} GS50
          </p>
          <p className="amount">${calculatePrice(GS50Price, userBalance)}</p>
        </div>
        <div>
          <p className="boxes" id="box_2">
            Dividends Earned {formatNumber(userDivs)} ETH
          </p>
          <p className="amount-2">${calculatePrice(price, userDivs)}</p>
        </div>
        <div className="boxes" id="box_3">
          <p>Ref. Commision {formatNumber(userRef)} ETH</p>
          <p className="bottom-amount amount">
            ${calculatePrice(price, userRef)}
          </p>
        </div>
        <div>
          <p className="boxes" id="box_4">
            Loyalty Bonus Earned {formatNumber(userLoyalty)} ETH
          </p>
          <p className="amount">${calculatePrice(price, userLoyalty)}</p>
        </div>
      </div>
    </div>
  );
};
