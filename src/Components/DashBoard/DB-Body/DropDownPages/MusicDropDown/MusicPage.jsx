import React from 'react'
import style from './MusicPage.module.css'
import {MusicHeader} from './MusicHeader'
import {SideBarDropDown} from './SidebarDropDown'
import group902 from '../../../../Images/GS50-distribution.png'
export const MusicPage = () => {
    return (
        <div>
            <MusicHeader/>
            <SideBarDropDown/>
            <div className={style.MusicPageContetn}>
            <h1>MUSIC</h1>
            <div className={style.maidDivMusic}>
               <div className={style.contentBox}>
                   <h2>Community Staking Token</h2>
                   <div className={style.nestedBox}>
                       <div className={style.content1}>
                      <img src={group902} alt="" />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur tenetur temporibus dolore veniam sequi culpa? Officiis minus molestias odio incidunt, voluptates fugit facilis, officia nostrum provident eaque ut praesentium.</p>
                       </div>
                       <div className={style.content2}>
                       <p>CURRENT SUPPLY : 
                           </p>
              <p>MAX SUPPLY : 
                  </p>
              <p>RARITY : 
                  </p>
              <p>
                Membership Level :{' '}
              </p>
              <p>TYPE : 
                  </p>
              <p>GENRE : 
                  </p>
              <p>
                ACCESS Level : 
              </p>
              <p>
                  </p>
              <p className={style.btnSection}>
                PRICE: 
                <div>
                  <button
                    type="button"
                    className={`btn btn-primary btn-sm mb-4  ${style.btn_nftmusicpage}`}
                    // onClick={buy}
                  >
                    BUY NFT
                  </button>
                  
                </div>
              </p>
              <p>
              But With US GS50: 
                {/* {price / 10 ** 18} {currency}{' '} */}
                <div>
                  <button
                    type="button"
                    className={`btn btn-primary btn-sm mb-4  ${style.btn_nft_muscpage}`}
                    // onClick={buy}
                  >
                    BUY NFT
                  </button>
                  
                </div>
              </p>
              <p>15% Discount using GS50</p>
                       </div>
                   </div>
               </div>
               <div className={style.contentBox}>
                   <h2>Community Staking Token</h2>
                   <div className={style.nestedBox}>
                       <div className={style.content1}>
                      <img src={group902} alt="" />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur tenetur temporibus dolore veniam sequi culpa? Officiis minus molestias odio incidunt, voluptates fugit facilis, officia nostrum provident eaque ut praesentium.</p>
                       </div>
                       <div className={style.content2}>
                       <p>CURRENT SUPPLY : 
                           {/* {supply}  */}
                           </p>
              <p>MAX SUPPLY : 
                  {/* {maxSupply} */}
                  </p>
              <p>RARITY : 
                  {/* {!!attributes ? attributes[1].value : 'loading'} */}
                  </p>
              <p>
                Membership Level :{' '}
                {/* {!!attributes ? attributes[2].value : 'loading'} */}
              </p>
              <p>TYPE : 
                  {/* {!!attributes ? attributes[3].value : 'loading'} */}
                  </p>
              <p>GENRE : 
                  {/* {!!attributes ? attributes[4].value : 'loading'} */}
                  </p>
              <p>
                ACCESS Level : 
                {/* {!!attributes ? attributes[6].value : 'loading'} */}
              </p>
              <p>
                  {/* Power : {!!attributes ? attributes[7].value : 'loading'} */}
                  </p>
              <p className={style.btnSection}>
                PRICE: 
                {/* {price / 10 ** 18} {currency}{' '} */}
                <div>
                  <button
                    type="button"
                    className={`btn btn-primary btn-sm mb-4  ${style.btn_nftmusicpage}`}
                    // onClick={buy}
                  >
                    BUY NFT
                  </button>
                  
                </div>
              </p>
              <p>
              But With US GS50: 
                {/* {price / 10 ** 18} {currency}{' '} */}
                <div>
                  <button
                    type="button"
                    className={`btn btn-primary btn-sm mb-4  ${style.btn_nft_muscpage}`}
                    // onClick={buy}
                  >
                    BUY NFT
                  </button>
                  
                </div>
              </p>
              <p>15% Discount using GS50</p>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        </div>
    )
}
