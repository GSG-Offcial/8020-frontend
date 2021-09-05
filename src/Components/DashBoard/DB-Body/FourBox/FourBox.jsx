import React, { Fragment, useState, useEffect } from 'react';
import './FourBox.css';
import {
  calculatePrice,
  formatValue,
  formatNumber,
} from '../../../../utils/index';
import { useContract } from '../../../../Hooks/index';
import ethereum from '../../../Images/MaskGroup24.svg';
import matic from '../../../Images/matic.svg';
import binance from '../../../Images/binance.svg';
import Group902 from '../../../Images/NewGS50.svg';
import { useWeb3React } from '@web3-react/core';

export const FourBox = ({ price, GS50Price }) => {
  const contract = useContract();
  const { chainId } = useWeb3React();

  const [tvl, setTvl] = useState('loading');
  const [totalSupply, setTotalSupply] = useState('loading');
  const [eth, setEth] = useState('loading');
  const [withdrawn, setWithdrawn] = useState('loading');
  const [logoInCard, setLogoInCard] = useState();
  const [currency, setCurrency] = useState('');

  useEffect(async () => {
    if (contract) {
      let total_ETH = await contract.totalEthereumBalance();
      setTvl(formatValue(total_ETH));

      let total_supply = await contract.totalSupply();
      setTotalSupply(formatValue(total_supply));

      let total_dep = await contract.totalDeposited();
      setEth(formatValue(total_dep));

      let total_withdraw = await contract.totalWithdraw();
      setWithdrawn(formatValue(total_withdraw));
    }
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
  }, [contract, price, GS50Price]);

  return (
    <Fragment>
      <span className="mainbox">
        <div>
          <p className="boxes" id="box_1">
            Total Value Locked {tvl} {currency}
          </p>
          <img src={logoInCard} alt="" className="eth_image" />
          <p className="amount">${calculatePrice(price, tvl)}</p>
        </div>
        <div>
          <p className="boxes" id="box_2">
            Token Supply {formatNumber(totalSupply)} GS50
          </p>
          <img src={Group902} alt="" className="mt-1 golden_image" />
          <p className="amount-2">${calculatePrice(GS50Price, totalSupply)}</p>
        </div>
        <div className="boxes" id="box_3">
          <p>
            Total {eth} {currency} Deposited
          </p>
          <img src={logoInCard} alt="" />
          <p className="amount">${calculatePrice(price, eth)}</p>
        </div>
        <div>
          <p className="boxes" id="box_4">
            {' '}
            Total {withdrawn} {currency} Withdrawn
          </p>
          <img src={logoInCard} alt="" />
          <p className="amount">${calculatePrice(price, withdrawn)}</p>
        </div>
      </span>
    </Fragment>
  );
};
