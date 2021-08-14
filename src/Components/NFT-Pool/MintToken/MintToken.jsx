import React from 'react';
import styles from './MintToken.module.css';
import nftToken from '../../Gif/nft_tokentop.gif';
import { useEffect, useState } from 'react';
import { useContractAccessKey } from '../../../Hooks/nftPool';
import { formatValue } from '../../../utils';

export const MintToken = () => {


    const tokenContract = useContractAccessKey();
    const [price, setPrice] = useState('loading');
    const [supply, setSupply] = useState('loading');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(async () => {
        if (tokenContract) {
            setPrice((await tokenContract.basePrice()).toString());
            setSupply((await tokenContract.totalSupply()).toString());
            let uri = (await tokenContract.tokenURI(1)).toString();
            fetch(uri)
                .then((r) => {
                    return r.json();
                })
                .then((r) => {
                    setName(r.title);
                    setDescription(r.description);
                });
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
                            <img src={nftToken} alt="" />
                            <p className={`text-center pt-2`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet eum deleniti eveniet iste, recusandae error excepturi aperiam exercitationem accusantium libero. Voluptatem reiciendis aperiam perspiciatis mollitia? Dolores optio suscipit dolor.</p>

                        </div>
                        {/* justify-content-center align-items-center */}
                        <div
                            className={`col-lg-6 order-lg-2  text-white d-flex flex-column  ${styles.MintToken_Text}`}>
                            <h2 className={`mb-5`}> {name}</h2>
                            <p>CURRENT SUPPLY: {supply} </p>
                            <p>MAX SUPPLY:{description} </p>
                            <p>SUPPLY RARITY: {formatValue}</p>
                            <p>GENRE ACCESS: $50.00</p>
                            <p>LEVEL POWER PRICE: {price}</p>
                            <button
                                type="button"
                                className={`btn btn-primary btn-sm mb-4  ${styles.btn_nft}`}
                                onClick={buy}>
                                Buy NFT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
