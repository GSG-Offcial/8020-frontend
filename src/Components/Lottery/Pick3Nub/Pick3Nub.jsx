import React, { useState } from 'react';
import styles from './Pick3Nub.module.css';
import { useWeb3React } from '@web3-react/core';
import { useContract, useTokenContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { getLotteryContractaddress, toWei } from '../../../utils';
import tip from '../../Images/tip.png';

export const Pick3Nub = () => {
  const { account, chainId } = useWeb3React();
  const contract = useContract();
  const tokenContract = useTokenContract();
  const tokenAdress = getLotteryContractaddress(chainId);

  console.log(tokenContract);

  const [pick3TicketsDiv, setPick3TicketsDiv] = useState([]);
  const [pick4TicketsDiv, setPick4TicketsDiv] = useState([]);
  const [tokenAllowance, setTokenAllowance] = useState(0);

  function getValuesOfPick3() {
    const n1 = document.querySelector('.pick3N1');
    const n2 = document.querySelector('.pick3N2');
    const n3 = document.querySelector('.pick3N3');
    const finalNum = n1.value + n2.value + n3.value;

    if (pick3TicketsDiv.includes(finalNum)) {
      alert('ERROR: you pick same Number');
      return false;
    }

    if (pick3TicketsDiv.length < 5 && finalNum >= 0) {
      setPick3TicketsDiv((prev) => [...prev, finalNum]);
    }

    n1.selectedIndex = 0;
    n2.selectedIndex = 0;
    n3.selectedIndex = 0;
  }

  function getValuesOfPick4() {
    const n1 = document.querySelector('.pick4N1');
    const n2 = document.querySelector('.pick4N2');
    const n3 = document.querySelector('.pick4N3');
    const n4 = document.querySelector('.pick4N4');
    const finalNum = n1.value + n2.value + n3.value + n4.value;

    if (pick4TicketsDiv.includes(finalNum)) {
      alert('ERROR: you pick same Number');
      return false;
    }

    if (pick3TicketsDiv.length < 5 && finalNum >= 0) {
      setPick4TicketsDiv((prev) => [...prev, finalNum]);
    }

    n1.selectedIndex = 0;
    n2.selectedIndex = 0;
    n3.selectedIndex = 0;
    n4.selectedIndex = 0;
  }

  const handleRemoveItem = (idx, pick) => {
    let temp;

    if (pick === 3) {
      temp = [...pick3TicketsDiv];
    } else if (pick === 4) {
      temp = [...pick4TicketsDiv];
    }

    temp.splice(idx, 1);

    if (pick === 3) {
      setPick3TicketsDiv(temp);
    } else if (pick === 4) {
      setPick4TicketsDiv(temp);
    }
  };

  useEffect(async () => {
    if (!!tokenContract) {
      setTokenAllowance(
        String(await tokenContract.allowance(account, tokenAdress))
      );
    }
  }, [tokenContract]);

  async function buyLotteryForPick3() {
    const pick3Price = toWei('5');
    const amount = String(pick3Price * pick3TicketsDiv.length);

    if (tokenAllowance >= Number(amount)) {
      const tx = await contract.buyLotteryForPick3(pick3TicketsDiv, amount);
      if (await tx.wait()) window.location.reload();
    } else {
      let tx = await tokenContract.approve(
        tokenAdress,
        toWei('10000000000000')
      );
      if (await tx.wait()) {
        const tx = await contract.buyLotteryForPick3(pick3TicketsDiv, amount);
        if (await tx.wait()) window.location.reload();
      }
    }
  }

  async function buyLotteryForPick4() {
    const pick4Price = toWei('15');
    const amount = String(pick4Price * pick4TicketsDiv.length);

    if (tokenAllowance >= Number(amount)) {
      const tx = await contract.buyLotteryForPick4(pick4TicketsDiv, amount);
      if (await tx.wait()) window.location.reload();
    } else {
      let tx = await tokenContract.approve(tokenAdress, toWei('1000000000'));
      if (await tx.wait()) {
        const tx = await contract.buyLotteryForPick4(pick4TicketsDiv, amount);
        if (await tx.wait()) window.location.reload();
      }
    }
  }

  return (
    <div className={`${styles.main_Pick3Nub} row`}>
      <div className="col-lg-6 col-md-12">
        <div className={styles.nested_div_pick3nub}>
          <p>Pick 3 Numbers</p>
          <div className={styles.selection_div}>
            <select className="pick3N1" aria-label="Default select example">
              <option selected value="select"></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select className="pick3N2" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select className="pick3N3" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <button
              type="button"
              onClick={getValuesOfPick3}
              className={`btn btn-info ${styles.selector_button}`}
            >
              +
            </button>
          </div>
          <p className="card-subtitle my-3  text-center">
            Numbers on this ticket:
          </p>

          {pick3TicketsDiv.map((e, index) => {
            return (
              <>
                <div
                  className={('list-group', styles.your_pick_box)}
                  id="pick4Box"
                  key={index}
                  onClick={() => {
                    handleRemoveItem(index, 3);
                  }}
                >
                  {e}
                </div>
              </>
            );
          })}
          <div class="col-12 text-center">
            <button
              type="button"
              class={('btn btn-lg play-btn', styles.play_btn)}
              onClick={buyLotteryForPick3}
            >
              Play Lottery
            </button>
          </div>

          <div class={`${styles.lottery_statistics_tip_icon}`}>
            <img src={tip} alt="" data-toggle="tooltip" />
            <span className={`${styles.toolTipText}`}>
              Use the dropdown to select 4 numbers between 0-9. You can have up
              to 3 entries per ticket order.
            </span>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className={styles.nested_div_pick3nub}>
          <p>Pick 4 Numbers</p>
          <div className={styles.selection_div}>
            <select className="pick4N1" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select className="pick4N2" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select className="pick4N3" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select className="pick4N4" aria-label="Default select example">
              <option selected value="select"></option>

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <button
              type="button"
              onClick={getValuesOfPick4}
              className={`btn btn-info ${styles.selector_button}`}
            >
              +
            </button>
          </div>
          <p className="card-subtitle my-3  text-center">
            Numbers on this ticket:
          </p>
          {pick4TicketsDiv.map((e, index) => {
            return (
              <>
                <div
                  className={('list-group', styles.your_pick_box)}
                  key={index}
                  onClick={() => {
                    handleRemoveItem(index, 4);
                  }}
                >
                  {e}
                </div>
              </>
            );
          })}
          <div class="col-12 text-center">
            <button
              type="button"
              onClick={buyLotteryForPick4}
              class={('btn btn-lg play-btn', styles.play_btn)}
            >
              Play Lottery
            </button>
          </div>

          <div class={`${styles.lottery_statistics_tip_icon}`}>
            <img src={tip} alt="" data-toggle="tooltip" />
            <span className={`${styles.toolTipText}`}>
              Use the dropdown to select 4 numbers between 0-9. You can have up
              to 3 entries per ticket order.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
