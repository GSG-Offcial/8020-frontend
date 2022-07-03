import React from "react";
import style from "./index.module.css";

export const Sidebar = () => {
  return (
    <div className={style.main_sidebar}>
      <ul className={style.menu_sidebar}>
        <li>Dashboard</li>
        <li>Staking Pools</li>
        <li>Drop Lotto</li>
        <li>Nft Launchpad</li>
        <li>Whitepaper</li>
        <li>Discord</li>
        <li>Community</li>
      </ul>
    </div>
  );
};
