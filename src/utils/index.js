import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

const nf = new Intl.NumberFormat();

export function formatNumber(number) {
  return nf.format(Math.floor(number));
}

export function calculatePrice(price, value) {
  return formatNumber(value * price);
}

export function toWei(n) {
  return parseEther(n);
}

export function fromWei(n) {
  return n / BigNumber.from('1000000000000000000');
}

export function formatValue(value) {
  return fromWei(+value.toString()).toFixed(3);
}

export function toBN(n) {
  return BigNumber.from(n);
}

export async function etherBalance(addr, ethers) {
  return await ethers.provider.getBalance(addr);
}

// account is not optional
export function getSigner(library, account) {
  return library.getSigner(account);
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export const getContract = (ABI, address, library, account) => {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
};

export function countAddress(address) {
  let alladdress = address.reduce(
    (x, y) => (x.includes(y) ? x : [...x, y]),
    []
  );

  return alladdress.length;
}

export function getContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0xdBbc1Bc1Dd800DDdC08206681Ae8ad91240C503f';
  } else if (chainId === 4) {
    return '0x28c9f2530e93b1c35ad10c7948724c9b1211d0d2';
  } else if (chainId === 42) {
    return '0xc573ad9377B3544A1968F2cBc2b4b90FC2802dA2';
  } else if (chainId === 56) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 80001) {
    return '0x25abeD2C880b3Ca5EB5aF6ff4A6904A1fD10b649';
  } else if (chainId === 97) {
    return '0xBFFBf23ae1E12D0523908e4D3b442789C4B874bE';
  }
}

export function getLotteryContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x70DA16C95c9a2e1b78774DF3d925fD8B85052c25';
  } else if (chainId === 4) {
    return '0x14778471f99D28bEc37eC9C187BBf83A8175FeD4';
  } else if (chainId === 42) {
    return '0x591144Dc642Ca38E6cCbe44c5AC2fb14a082fC48';
  } else if (chainId === 56) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 80001) {
    return '0x114aFC2F6807756F87eEAB5bcF01D15cac2b3683';
  } else if (chainId === 97) {
    return '0x88e12EBA2Ac6f3C7BAaEDeE8951eB81F82c72617';
  }
}

export function getAccessKeyContractAddress(chainId) {
  if (chainId === 4) {
    return '0x7e0e491F74B1cEe58b0a4b590D3925d1C0d58905';
  }
}

export function getNftRewardPoolAddress(chainId) {
  if (chainId === 4) {
    return '0x43ab6e9cA7af31584d3af1CCE5906daD383995C1';
  }
}

export function formatValueOfPick3(lastNumber) {
  if (lastNumber === undefined) {
    return 0;
  }
  if (lastNumber < 10) {
    return `0 0 ${lastNumber}`;
  }
  if (lastNumber > 10 && lastNumber < 100) {
    return '0 ' + lastNumber.split('').join(' ');
  } else {
    return lastNumber.split('').join(' ');
  }
}

export function formatValueOfPick4(lastNumber) {
  if (lastNumber === undefined) {
    return 0;
  }

  if (lastNumber < 10) {
    return '0 0 0 ' + lastNumber;
  }
  if (lastNumber > 10 && lastNumber < 100) {
    return '0 0 ' + lastNumber.split('').join(' ');
  } else if (lastNumber > 100 && lastNumber < 1000) {
    return '0 ' + lastNumber.split('').join(' ');
  } else {
    return lastNumber.split('').join(' ');
  }
}
