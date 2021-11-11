import React, { useEffect, useState } from 'react';
import './BottomFourBox.css';
import {
  calculatePrice,
  formatValue,
  formatNumberInDecimals,
  fail,
} from '../../../../utils/index';
import { useWeb3React } from '@web3-react/core';
import { useContract } from '../../../../Hooks/index';
import { BottomTwoBox } from '../index';
import ethereum from '../../../Images/MaskGroup24.svg';
import matic from '../../../Images/matic.svg';
import binance from '../../../Images/binance.svg';

export const BottomFourBox = ({ price, GS50Price }) => {
  const { account, chainId } = useWeb3React();
  const contract = useContract();
  const [logoInCard, setLogoInCard] = useState();

  const [userBalance, setUserBalance] = useState('loading');
  const [userDivs, setUserDivs] = useState('loading');
  const [userRef, setUserRef] = useState('loading');
  const [userLoyalty, setUserLoyalty] = useState('loading');
  const [currency, setCurrency] = useState('');

  useEffect(async () => {
    if (contract) {
      let tokens = await contract.myTokens();
      setUserBalance(formatValue(tokens));

      let divs = await contract.dividendsOf(account);
      setUserDivs(formatNumberInDecimals(divs));

      let refCom = await contract.referralBalance_(account);
      setUserRef(formatNumberInDecimals(refCom));

      let loyalty = await contract.loyaltyOf();
      setUserLoyalty(formatNumberInDecimals(loyalty));

      if (chainId === 80001 || chainId === 137) {
        setLogoInCard(matic);
        setCurrency('MATIC');
      } else if (chainId === 56 || chainId === 97) {
        setLogoInCard(binance);
        setCurrency('BNB');
      } else {
        setLogoInCard(ethereum);
        setCurrency('ETH');
      }
    }
  }, [contract, price, GS50Price]);

  return (
    <div>
      <div className="bottom-mainbox mainbox">
        <div>
          <p className="boxes" id="box_1">
            Your Balance {userBalance} GS50
          </p>
          <img src={logoInCard} alt="" />
          <p className="amount">${calculatePrice(GS50Price, userBalance)}</p>
        </div>

        <div>
          <p className="boxes" id="box_2">
            Dividends Earned {userDivs} {currency}
          </p>
          <img src={logoInCard} alt="" />
          <p className="amount-2">${calculatePrice(price, userDivs)}</p>
        </div>

        <div className="boxes" id="box_3">
          <p>
            Ref. Commision {userRef} {currency}
          </p>
          <img src={logoInCard} alt="" />
          <p className="bottom-amount amount">
            ${calculatePrice(price, userRef)}
          </p>
        </div>

        <div>
          <p className="boxes" id="box_3">
            Loyalty Bonus Earned {userLoyalty} {currency}
          </p>
          <img src={logoInCard} alt="" />
          <p className="amount">${calculatePrice(price, userLoyalty)}</p>
        </div>
      </div>
      <BottomTwoBox
        price={price}
        withdrawAmount={
          Number(userDivs) + Number(userRef) + Number(userLoyalty)
        }
      />
    </div>
  );
};
