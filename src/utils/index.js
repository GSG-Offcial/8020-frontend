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
  return fromWei(+value.toString()).toFixed(2);
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
