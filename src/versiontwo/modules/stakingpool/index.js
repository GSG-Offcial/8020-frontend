import React from "react";
import styles from "./index.module.css";
import { Header, Sidebar } from "../../layout";

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

    </div>
    <div className={styles.side_data}>

    </div>

      </div>
      </div>
    </div>
  );
};
