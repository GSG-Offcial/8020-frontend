import React from 'react';
import styles from './MintToken.module.css';
// import minToken2 from '../../Images/minToken2.gif';
import { useEffect, useState } from 'react';
import { useContractAccessKey } from '../../../Hooks/nftPool';
import { useContract } from '../../../Hooks/index';
import { getAccessKeyContractAddress } from '../../../utils';
import { useWeb3React } from '@web3-react/core';

export const MintToken = () => {
  const tokenContract = useContractAccessKey();
  const GS50Contract = useContract();
  const { account, chainId } = useWeb3React();
  const accessKeyAddress = getAccessKeyContractAddress(chainId);

  const [price, setPrice] = useState('0');
  const [supply, setSupply] = useState('loading');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attributes, setAttributes] = useState('');
  const [image, setImage] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [priceInGS50, setPriceInGS50] = useState(
    '00000000000000000000000000000'
  );

  useEffect(async () => {
    if (tokenContract) {
      setPrice((await tokenContract.basePrice()).toString());
      setSupply((await tokenContract.totalSupply()).toString());
      setMaxSupply(Number((await tokenContract.maxSupply()).toString()) + 1);
      setPriceInGS50((await tokenContract.getPriceInGS50()).toString());
      console.log('GS50', priceInGS50);
      let uri = (await tokenContract.tokenURI(1)).toString();
      console.log('Token URI', uri);
      // console.log('GS50 price', price);
      // setPriceInGS50(price);
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
    }
  }, [tokenContract]);

  async function buy() {
    let overrides = {
      value: price,
    };
    console.log(overrides);
    let tx = await tokenContract.buyNft(overrides);
    if (await tx.wait()) {
      window.location.reload();
    }
  }

  async function buyWithGS50() {
    console.log(`address ${accessKeyAddress}`);
    let allowance = (
      await GS50Contract.allowance(account, accessKeyAddress)
    ).toString();

    if (Number(allowance) >= Number(priceInGS50)) {
      try {
        let tx = await tokenContract.buyNftWithGS50(priceInGS50);
        if (await tx.wait()) {
          window.location.reload();
        }
      } catch (e) {
        alert(e.message);
      }
    } else {
      let tx = await GS50Contract.approve(
        accessKeyAddress,
        '2345678909876543456789098765430000000000000000000000'
      );
      if (await tx.wait()) {
        try {
          let tx = await tokenContract.buyNftWithGS50(priceInGS50);
          if (await tx.wait()) {
            window.location.reload();
          }
        } catch (e) {
          alert(e.message);
        }
      }
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
              <img src={image} alt="" />
              <p className={`text-center pt-2`}>{description}</p>
            </div>
            <div
              className={`col-lg-6 order-lg-2  text-white d-flex flex-column  ${styles.MintToken_Text}`}
            >
              <p>NAME: {name}</p>
              <p>CURRENT SUPPLY : {supply} </p>
              <p>MAX SUPPLY : {maxSupply}</p>
              <p>RARITY : {!!attributes ? attributes[1].value : 'loading'}</p>
              <p>
                Membership Level :{' '}
                {!!attributes ? attributes[2].value : 'loading'}
              </p>
              <p>TYPE : {!!attributes ? attributes[3].value : 'loading'}</p>
              <p>GENRE : {!!attributes ? attributes[4].value : 'loading'}</p>
              <p>
                ACCESS Level : {!!attributes ? attributes[6].value : 'loading'}
              </p>
              <p>Power : {!!attributes ? attributes[7].value : 'loading'}</p>
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

              <p>
                Buy With GS50 {(priceInGS50 / 10 ** 18).toFixed(4)}
                <div>15% Discount using GS50 token</div>
                <button
                  type="button"
                  className={`btn btn-primary btn-sm mb-4  ${styles.btn_nft}`}
                  onClick={buyWithGS50}
                >
                  buy NFT
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
