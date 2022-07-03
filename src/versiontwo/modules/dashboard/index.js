import React from "react";
import style from "./index.module.css";
import { Sidebar, Header } from "../../layout";
import bnb from "../../assets/images/bnb.png";
import gs50 from "../../assets/images/GS50.svg";
import { FaAngleDown } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

import { Accordion } from "../../components";

import { Btn } from "../../components";

export const DashboardUpdgrade = () => {
  return (
    <div className={style.DashboardUpdgrade}>
      <div className={style.nested_upgradeDashboard}>
        <Header />
        <div className={style.content}>
          <div>
            <Sidebar />
          </div>
          <div className={style.main_section}>
            <div className={style.nested_section}>
              <div className={style.network_tab}>
                <div className={style.network_heading}>Network - Binance</div>
                <div className={style.network_heading}>
                  Wallet - 0x123***555
                </div>
              </div>
              <div className={style.contract}>
                {/* <div className="heading_contract"> */}
                <h1>Contract Status</h1>
                {/* </div> */}
                <div className={style.contract_status}>
                  {" "}
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                </div>
              </div>
              <div className={style.contract}>
                {/* <div className="heading_contract"> */}
                <h1>Contract Status</h1>
                {/* </div> */}
                <div className={style.contract_status}>
                  {" "}
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                  <div className={style.child_status}>
                    <p>Tvl</p>
                    <p>100</p>
                    <p>Bnb</p>
                  </div>
                </div>
              </div>
              <div className={style.groups_btn}>
                <Btn value={"WithDraw"} />
                <Btn value={"Re-invest"} />
              </div>
              <div className={style.wallet_balance}>
                <p>Wallet balance</p>
                <p>1,000 Gs50</p>
                <p>10 Bnb</p>
              </div>
            </div>
          </div>
          <div className={style.side_section}>
            <div className="">
              <div className={style.side_heading}>
                <h3>Swap</h3>
                <p>trade tokens in an instant</p>
              </div>
            </div>
            <div className={style.token_section}>
              <div className={style.netsed_token}>
                <div className={style.bnb_section}>
                  <div className={style.bnb_child}>
                    <img src={bnb} alt="bnb" width={"20px"} height="20px" />
                    <h3>Bnb</h3>
                    <FaAngleDown
                      style={{
                        fontSize: "16px",
                        fontWeight: 900,
                        color: "white",
                      }}
                    />
                  </div>
                  <div className={style.puprle_box}>
                    <span>0.0</span>
                  </div>
                  <Accordion
                    content={
                      <>
                        <div className={style.puprle_box}>
                          <span>0.0</span>
                        </div>
                        <div className={style.puprle_box}>
                          <span>0.0</span>
                        </div>
                        <div className={style.puprle_box}>
                          <span>0.0</span>
                        </div>
                        <div className={style.puprle_box}>
                          <span>0.0</span>
                        </div>
                      </>
                    }
                  />
                </div>
                <div className={style.bnb_section}>
                  {/* <h3>Bnb</h3> */}
                  <div className={style.bnb_child}>
                    <img src={gs50} alt="bnb" width={"20px"} height="20px" />
                    <h3>Gs50</h3>
                    <FaAngleDown
                      style={{
                        fontSize: "16px",
                        fontWeight: 900,
                        color: "white",
                      }}
                    />
                    <MdContentCopy
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#CAC8CB",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div className={style.puprle_box}>
                    <span>0.0</span>
                  </div>
                </div>
                <div className={style.switch_network}>
                   <p>Switch Network</p> 
                   <p>Polygon</p> 
                   <Btn value={"Connect Wallet"} border="none" bgColor={"rgb(30,199,212)"}  padding="10px 0px" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
