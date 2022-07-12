import React from "react";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={style.main_sidebar}>
      <ul className={style.menu_sidebar}>
        <NavLink to={"/dashboard-upgrade"}>
          <li>Dashboard</li>
        </NavLink>
        <NavLink to={"/staking-pool"}>
          <li>Staking Pools</li>
        </NavLink>
        <li>Drop Lotto</li>
        <li>Nft Launchpad</li>
        <li>Whitepaper</li>
        <li>Discord</li>
        <li>Community</li>
      </ul>
    </div>
  );
};
