import React from "react";
import styles from "./index.module.css";
import { Header, Sidebar } from "../../layout";
import { Btn } from "../../components";
import image from "../../assets/images/minToken2.gif";

export const StakingPool = () => {
  return (
    <div className={styles.main_stakingpool}>
      <div className={styles.nested_satkingpool}>
        <Header />

        <div className={styles.content_stakingpool}>
          {/* sidebar div */}
          <div>
            <Sidebar />
          </div>
          <div className={styles.stakingpool_data}>
            <div className={styles.nested_stakingpool}>
              <div className={styles.network_tab}>
                <div className={styles.network_heading}>Network - Binance</div>
                <div className={styles.network_heading}>
                  Wallet - 0x123***555
                </div>
              </div>
              <h5>Access Key Staking pool</h5>

              <div className={styles.access_key}>
                <div className={styles.access_content}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                  </div>
                  <div className={styles.status_staking}>
                    <p>User Reward:</p>
                    <p className={styles.amount}>1.1 BNB</p>
                  </div>
                </div>

                <div className={styles.accessbtn}>
                  <Btn value={"STAKE/UNSTAKE"} />
                  <Btn value={"CLAIM REWARD"} />
                </div>
              </div>

              {/* line */}
              <hr />

              <div className={styles.access_key}>
                <div className={styles.access_content}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                    <div className={styles.child_status}>
                      <p>Tvl</p>
                      <p>100</p>
                      <p>Bnb</p>
                    </div>
                  </div>
                  <div className={styles.status_staking}>
                    <p>User Reward:</p>
                    <p className={styles.amount}>1.1 BNB</p>
                  </div>
                </div>

                <div className={styles.accessbtn}>
                  <Btn value={"STAKE/UNSTAKE"} />
                  <Btn value={"CLAIM REWARD"} />
                </div>
              </div>
              {/* <hr /> */}
              <div className={styles.wallet_balance}>
                <p>Wallet balance</p>
                <p>1,000 Gs50</p>
                <p>10 Bnb</p>
              </div>
            </div>
          </div>
          <div className={styles.side_data}>
            <div className={styles.netsed_sideData}>
              <h3>Access Key NFT</h3>

              <div className={styles.side_content}>
                <div style={{width: "100%" }}>
                  <img src={image} alt="gif" width={"100%"} height={"210px"} />
                  <div className={styles.accessbtn}>
                    <Btn value={"STAKE/UNSTAKE"} />
                    <Btn value={"CLAIM REWARD"} />
                  </div>
                </div>
               <div className={styles.description}>
                 <p>NFT DEscription</p>         
                 <p>Price GS50/BNB</p>
                </div>    
              </div>
              <hr />
              <div className={styles.side_content}>
                <div style={{width: "100%" }}>
                  <img src={image} alt="gif" width={"100%"} height={"210px"} />
                  <div className={styles.accessbtn}>
                    <Btn value={"STAKE/UNSTAKE"} />
                    <Btn value={"CLAIM REWARD"} />
                  </div>
                </div>
               <div className={styles.description}>
                 <p>NFT DEscription</p>         
                 <p>Price GS50/BNB</p>
                </div>    
              </div>
            </div>
          </div>
          <div className={styles.advertisment_data}>
            <p style={{ color: "gray" }}>Advertisment space</p>
          </div>
        </div>
      </div>
    </div>
  );
};
