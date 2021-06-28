import React, { useState } from 'react';
import styles from './Pick3Nub.module.css';
import { useWeb3React } from '@web3-react/core';
import { useContract, useTokenContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { getContract, formatValue } from '../../../utils';

export const Pick3Nub = () => {
  const { account } = useWeb3React();
  const contract = useContract();
  const tokenContract = useTokenContract();

  const [pick3TicketsDiv, setPick3TicketsDiv] = useState([]);
  const [tokenAllowance, setTokenAllowance] = useState(0);

  function getValuesOfPick3() {
    const n1 = document.querySelector('.pick3N1').value;
    const n2 = document.querySelector('.pick3N2').value;
    const n3 = document.querySelector('.pick3N3').value;
    const finalNum = n1 + n2 + n3;

    if (pick3TicketsDiv.includes(finalNum)) {
      alert('ERROR: you pick same Number');
      return false;
    }

    if (pick3TicketsDiv.length < 5 && finalNum >= 0) {
      setPick3TicketsDiv((prev) => [...prev, finalNum]);
    }
  }

  const handleRemoveItem = (idx) => {
    console.log('removing');

    // assigning the list to temp variable
    const temp = [...pick3TicketsDiv];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    setPick3TicketsDiv(temp);
  };

  useEffect(async () => {
    if (!!tokenContract) {
      setTokenAllowance(
        formatValue(
          await tokenContract.allowance(
            account,
            '0x5C5d8E2c3d603C1F7C2E7EcB5251f48F72bdFF97'
          )
        )
      );
    }
  }, [tokenContract]);

  function buyLottery() {
    const pick3Price = 5000000000000000000;
    const amount = pick3Price * pick3TicketsDiv.length;
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
                    handleRemoveItem(index);
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
              onClick={buyLottery}
            >
              Play Lottery
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className={styles.nested_div_pick3nub}>
          <p>Pick 3 Numbers</p>
          <div className={styles.selection_div}>
            <select className="" aria-label="Default select example">
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
            <select className="" aria-label="Default select example">
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
            <select className="" aria-label="Default select example">
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
            <select className="" aria-label="Default select example">
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
              className={`btn btn-info ${styles.selector_button}`}
            >
              +
            </button>
          </div>
          <p className="card-subtitle my-3  text-center">
            Numbers on this ticket:
          </p>
          <div className={('list-group', styles.your_pick_box)} id="pick4Box">
            1234
          </div>
          <div class="col-12 text-center">
            <button
              type="button"
              class={('btn btn-lg play-btn', styles.play_btn)}
            >
              Play Lottery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
