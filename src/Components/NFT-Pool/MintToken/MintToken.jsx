import React from 'react';
import styles from './MintToken.module.css';
import minToken2 from '../../Images/minToken2.gif';
import { useEffect, useState } from 'react';
import { useContractAccessKey } from '../../../Hooks/nftPool';
import { formatValue } from '../../../utils';

export const MintToken = () => {
  const tokenContract = useContractAccessKey();
  const [price, setPrice] = useState('0');
  const [supply, setSupply] = useState('loading');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attributes, setAttributes] = useState('');
  const [image, setImage] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [reward, setReward] = useState();

  useEffect(async () => {
    if (tokenContract) {
      setPrice((await tokenContract.basePrice()).toString());
      setSupply((await tokenContract.totalSupply()).toString());
      setMaxSupply(Number((await tokenContract.maxSupply()).toString()) + 1);
      let uri = (await tokenContract.tokenURI(1)).toString();
      fetch(uri)
        .then((r) => {
          return r.json();
        })
        .then((r) => {
          setName(r.title);
          setDescription(r.description);
          setAttributes(r.attributes);
          setImage(r.image);
        });
      setReward(
        Number(formatValue((await tokenContract.calculateGS50()).toString()))
      );
    }
  }, [tokenContract]);

  async function buy() {
    let overrides = {
      value: price,
    };
    let tx = await tokenContract.buyNft(overrides);
    if (await tx.wait()) {
      window.location.reload();
    }
  }

  async function claimGS50() {
    let tx = await tokenContract.getGS50Reward();
    if (await tx.wait()) {
      window.location.reload();
    }
  }

  return (
    <div className={` ${styles.MintToken_miandiv}`}>
      <h1 className={``}>Mint Access Key Token </h1>
      <div
        className={`d-flex flex-row align-items-center mt-4   ${styles.nested_div_nft}`}
      >
        <div className={`container-fluid`}>
          <div className="row">
            <div
              className={`col-lg-6 pt-5  order-lg-1 ${styles.mintoken_imageDiv}`}
            >
              <img src={minToken2} alt="" />
              <p className={`text-center pt-2`}>{description}</p>
            </div>
            <div
              className={`col-lg-6 order-lg-2  text-white d-flex flex-column  ${styles.MintToken_Text}`}
            >
              <p>NAME: {name}</p>
              <p>CURRENT SUPPLY : {supply} </p>
              <p>MAX SUPPLY : {maxSupply}</p>
              <p>RARITY : {!!attributes ? attributes[0].value : 'loading'}</p>
              <p>GENRE : {!!attributes ? attributes[2].value : 'loading'}</p>
              <p>
                ACCESS Level : {!!attributes ? attributes[4].value : 'loading'}
              </p>
              <p>Power : {!!attributes ? attributes[5].value : 'loading'}</p>
              <p>
                PRICE: {price / 10 ** 18} ETH{' '}
                <button
                  type="button"
                  className={`btn btn-primary btn-sm mb-4  ${styles.btn_nft}`}
                  onClick={buy}
                >
                  Buy NFT
                </button>
              </p>

              {reward > 0 ? (
                <>
                  <p>
                    Your GS50 Reward: {reward} GS50{' '}
                    <button
                      type="button"
                      className={`btn btn-primary btn-sm mb-4  ${styles.btn_nft}`}
                      onClick={claimGS50}
                    >
                      Claim GS50
                    </button>
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
