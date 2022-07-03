import React from "react";
import style from "./index.module.css";
import { Sidebar, Header } from "../../layout";

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
              
            </div>
          </div>
          <div className={style.side_section}></div>
        </div>
      </div>
    </div>
  );
};
