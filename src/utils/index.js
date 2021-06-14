import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';

export function toWei(n, ethers) {
  return ethers.utils.parseEther(n);
}

export function fromWei(n) {
  return n / BigNumber.from('1000000000000000000');
}

export function BnToString(n, ethers) {
  return ethers.utils.formatUnits(n, 'ether');
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
