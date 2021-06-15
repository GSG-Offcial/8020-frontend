import React, { Fragment, useState, useEffect } from 'react';
import './FourBox.css';
import { getContract, fromWei } from '../../../../utils/index';
import { abi, address } from '../../../../constants/8020.json';
import { useWeb3React } from '@web3-react/core';

export const FourBox = () => {
  const { library, account } = useWeb3React();

  const [contract, setContract] = useState();
  const [tvl, setTvl] = useState('loading');
  const [totalSupply, setTotalSupply] = useState('loading');
  const [eth, setEth] = useState('loading');
  const [withdrawn, setWithdrawn] = useState('loading');

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library]);

  useEffect(async () => {
    if (contract) {
      let total_ETH = await contract.totalEthereumBalance();
      setTvl(+total_ETH.toString());

      let total_supply = await contract.totalSupply();
      setTotalSupply(fromWei(+total_supply.toString()).toFixed(2));

      let total_dep = await contract.totalDeposited();
      setEth(fromWei(+total_dep.toString()).toFixed(2));

      let total_withdraw = await contract.totalWithdraw();
      setWithdrawn(fromWei(+total_withdraw.toString()).toFixed(2));
    }
  }, [contract]);

  return (
    <Fragment>
      <div className="mainbox">
        <div>
          <p className="boxes" id="box_1">
            Total Value Locked {tvl} ETH
          </p>
          <p className="amount">$1000k</p>
        </div>
        <div>
          <p className="boxes" id="box_2">
            Token Supply {totalSupply} GS50
          </p>
          <p className="amount-2">$1000k</p>
        </div>
        <div className="boxes" id="box_3">
          <p>Total {eth} ETH Deposited since inception 1000k ETH</p>
          <p className="amount">$1000k</p>
        </div>
        <div>
          <p className="boxes" id="box_4">
            {' '}
            Total {withdrawn} ETH Withdrawn since inception
          </p>

          <p className="amount">$1000k</p>
        </div>
      </div>
    </Fragment>
  );
};
