import React from 'react'
import styles from './HomeConnect.module.css'
import STAYINTOUCH from '../../Images/STAYINTOUCH.svg'

export const HomeConnect = () => {
    return (
        <div className={`  ${styles.HomeConnect_mainDiv}`}>
            <div className={`container-fluid mt-4`}>
                <div className={`col-10 mx-auto`}>
                    <div className={`column`}>
                        <div className={`d-flex justify-content-center ${styles.HomeConnect_Image}`}>
                            <img src={STAYINTOUCH} alt="" />
                        </div>
                        <div className={`d-flex justify-content-center mt-3`}>
                            <h1 className={`display-4 fw-bolder`}>STAY IN TOUCH!</h1>
                        </div>
                        <div class={` mb-5 col-lg-10 mx-auto  d-flex justify-content-center flex-row align-items-center ${styles.HomeConnect_ButtonDiv}`}>
                            <input type="text" placeholder="text..." className={styles.Input_text} />
                            <input type="submit" value="Submit" className={styles.Input_button} />
                           
                        </div>
                   

                    </div>
                </div>

            </div>

        </div>
    )
}
