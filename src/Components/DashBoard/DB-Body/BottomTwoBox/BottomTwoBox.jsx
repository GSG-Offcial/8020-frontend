import React from 'react';
import './BottomTwoBox.css';
import {
  getContract,
  calculatePrice,
  formatValue,
  formatNumber,
} from '../../../../utils/index';
import { abi, address } from '../../../../constants/8020.json';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

export const BottomTwoBox = ({ price }) => {
  const { library, account } = useWeb3React();

  const [contract, setContract] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState('loading');
  const [totalSupply, setTotalSupply] = useState('loading');

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library]);

  useEffect(async () => {
    if (contract) {
      const totalWithdrawn = await contract.totalWithdrawAmount();
      setWithdrawAmount(formatValue(totalWithdrawn));
    }
  });

  return (
    <div className="bottom-box">
      <div>
        <p className="bottom-para bottom-1">Token you can withdraw</p>
        <p>
          {withdrawAmount} Eth{' '}
          <span className="span-color">
            (${calculatePrice(price, withdrawAmount)})
          </span>
        </p>
        <input type="button" value="Withdraw" className="bottom-button" />
      </div>
      <div>
        <p className="bottom-para bottom-2">Token you can with draw</p>
        <p>
          {withdrawAmount} Eth
          <span className="span-color">
            (${calculatePrice(price, withdrawAmount)})
          </span>
        </p>
        <input type="button" value="Cycle" className="bottom-button" />
      </div>
    </div>
  );
};
