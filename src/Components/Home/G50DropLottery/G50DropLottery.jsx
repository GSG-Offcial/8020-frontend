import React from 'react';
import styles from './G50DropLottery.module.css';
import GS50DropLottery from '../../Images/GS50DropLottery.svg';
// import Aos from 'aos';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'



export const G50DropLottery = () => {

useEffect(() =>{
   Aos.init({    
    duration: 1400,easing: 'ease-in-sine', once: false
   }) 
})


    return (
        <div className={`d-flex align-items-center mt-3 ${styles.G50DropLottery_mainDiv}`}>
            <div className={`container-fluid`}>
                <div className={`col-10 mx-auto`}>
                    <div className={`row`}>
                        <div className={`col-lg-6 pt-5 order-lg-1 ${styles.G50DropLottery_image}`} data-aos="fade-right">
                            <img src={GS50DropLottery} alt="" />
                        </div>
                        <div className={`col-lg-6 order-lg-2 pt-5 pb-5 pt-lg-0 text-white d-flex justify-content-center flex-column ${styles.G50DropLottery_Div2}`} data-aos="fade-left">
                            <h1 className={`display-5 fw-bolder`}>
                                GS50 Drop Lottery
                            </h1>
                            <p className={`px-4 py-3 fw-light ${styles.G50DropLottery_para}`}>
                                <span>
                                Users can pick 3 or 4 numbers for a drawing. If the
                                user picks correctly then GS50 is the prize. If no
                                user can guess the correct number in the amount
                                tries allowed, the game will pick 5 random players
                                and reward them with GS50 for playing.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
