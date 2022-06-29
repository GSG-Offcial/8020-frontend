import React from "react";
import styles from "./UpgradedDashboard.module.css";
import Group900 from "../Icons/Group 900.svg";
import { NavLink } from "react-router-dom";
import bnb from "../Images/bnb.png";
import { FaAngleDown } from "react-icons/fa";
import Accordion from "../Accordian/accordian";
import { MdContentCopy } from "react-icons/md";
import { DashBoardNavbar } from "../DashBoard";
export const UpgradedDashboard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main2}>
        <div className={styles.navbar_mobile}>
          <NavLink className={styles.NavLink} to={"/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink className={styles.NavLink} to={"/nftPool"}>
            Access pool
          </NavLink>
          <NavLink className={styles.NavLink} to={"/communityPool"}>
            community Pool
          </NavLink>
          <NavLink className={styles.NavLink} to={""}>
            drop latto
          </NavLink>
          <NavLink className={styles.NavLink} to={""}>
            nft launchpad
          </NavLink>
          <NavLink className={styles.NavLink} to={""}>
            white paper
          </NavLink>
          <NavLink className={styles.NavLink} to={""}>
            discord
          </NavLink>
          <NavLink className={styles.NavLink} to={""}>
            community
          </NavLink>
          <NavLink
            className={styles.NavLink}
            style={{ color: "white" }}
            to={"/upgradeddashboard"}
          >
            Dashboard new
          </NavLink>
        </div>
        <header className={styles.header}>
          <div className={styles.loader}>
            <div>
              <a className={styles.navbar_brand} href="#/">
                <img src={Group900} alt="" className={styles.mainpage_logo} />
              </a>
            </div>
          </div>
          <div style={{ display: "flex", gridGap: "40px" }}>
            <div className={styles.deposit_card}>
              <p>Total deposited-750 BNB</p>
              <p>Total Withdrawn-750 BNB</p>
            </div>
            <div className={styles.pool_card}>
              <p>Total deposited-750 BNB</p>
              <p>Total Withdrawn-750 BNB</p>
            </div>
          </div>
        </header>
        <section className={styles.body}>
          <div className={` ${styles.body_sidebar} ${styles.gray_bg} `}>
            <NavLink className={styles.NavLink} to={"/dashboard"}>
              Dashboard
            </NavLink>
            <NavLink className={styles.NavLink} to={"/nftPool"}>
              Access pool
            </NavLink>
            <NavLink className={styles.NavLink} to={"/communityPool"}>
              community Pool
            </NavLink>
            <NavLink className={styles.NavLink} to={""}>
              drop latto
            </NavLink>
            <NavLink className={styles.NavLink} to={""}>
              nft launchpad
            </NavLink>
            <NavLink className={styles.NavLink} to={""}>
              white paper
            </NavLink>
            <NavLink className={styles.NavLink} to={""}>
              discord
            </NavLink>
            <NavLink className={styles.NavLink} to={""}>
              community
            </NavLink>
            <NavLink
              className={styles.NavLink}
              style={{ color: "white" }}
              to={"/upgradeddashboard"}
            >
              Dashboard new
            </NavLink>
          </div>
          <div className={`${styles.middle} ${styles.gray_bg}`}>
            <div className={styles.middle_top}>
              <p className="">Network-Bonance</p>
              <p className="">WALLET-0x123***555</p>
            </div>
            <div className={styles.middle_bottom}>
              <p className={styles.status}>Contact Status</p>
              <div className={styles.pricing}>
                <div className={styles.first}>
                  <p className="">TVL</p>
                  <p className="">100</p>
                  <p className="">BNB</p>
                </div>
                <div className={styles.second}>
                  <p className="">TOTAL</p>
                  <p className="">75,000</p>
                  <p className="">6SS0</p>
                </div>
                <div className={styles.third}>
                  <p className="">TOTAL</p>
                  <p className="">145</p>
                  <p className="">WALLETS</p>
                </div>
                <div className={styles.forth}>
                  <p className="">GSSO price</p>
                  <p className="">$0.50</p>
                  <p className="">usd</p>
                </div>
              </div>
              <p className={styles.status}>Contact Status</p>
              <div className={styles.pricing}>
                <div className={styles.first}>
                  <p className="">dividend</p>
                  <p className="">.5</p>
                  <p className="">BNB</p>
                </div>
                <div className={styles.second}>
                  <p className="">bonus</p>
                  <p className="">1.5</p>
                  <p className="">bnb</p>
                </div>
                <div className={styles.third}>
                  <p className="">comission</p>
                  <p className="">2.4</p>
                  <p className="">bnb</p>
                </div>
                <div className={styles.forth}>
                  <p className="">share</p>
                  <p className="">ratio</p>
                  <p className="">13%</p>
                </div>
              </div>
              <div className={styles.options_buttons}>
                <p>With Draw</p>
                <p>re-invest</p>
              </div>
              <div className={styles.middle_foot}>
                <p>wallet balance</p>
                <p>1,000 gsso</p>
                <p>10 bnb</p>
              </div>
            </div>
          </div>
          <div className={styles.middle2}>
            <div className={styles.middle2_head}>
              <h3>Swap</h3>
              <p>trade tokens in an instant</p>
            </div>
            <div className={styles.middle2_body}>
              <div className={styles.bnb_heading}>
                <img className={styles.bnb} src={bnb} alt="" srcset="" />
                <span>BNB</span>
                <FaAngleDown style={{ fontSize: "16px", fontWeight: 900 }} />
              </div>
              <div className={styles.puprle_box}>
                <span>0.0</span>
              </div>
              <Accordion
                content={
                  <>
                    <div className={styles.puprle_box}>
                      <span>0.0</span>
                    </div>
                    <div className={styles.puprle_box}>
                      <span>0.0</span>
                    </div>
                    <div className={styles.puprle_box}>
                      <span>0.0</span>
                    </div>
                    <div className={styles.puprle_box}>
                      <span>0.0</span>
                    </div>
                  </>
                }
              />
              <div className={styles.bnb_heading}>
                <img className={styles.bnb} src={bnb} alt="" srcset="" />
                <span>GS50</span>
                <FaAngleDown style={{ fontSize: "16px", fontWeight: 900 }} />
                <MdContentCopy
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#CAC8CB",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={styles.puprle_box}>
                <span>0.0</span>
              </div>
              <h6
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  fontSize: "1.6rem",
                }}
              >
                Switch network
              </h6>
              <h6
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  fontSize: "1.8rem",
                }}
              >
                Polygon
              </h6>
              <h6 className={styles.connect_btn}>Connect wallet</h6>
            </div>
          </div>
          {/* <div className="right ">
            <h3>advertisment space</h3>
          </div> */}
        </section>
        {/* <div className="foot">
            <h3>advertisment space</h3>
        </div> */}
      </div>
    </div>
  );
};
