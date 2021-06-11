import React from 'react'
import './Desclaimer.css'
export const Desclaimer = () => {
    return (
        <div className='bottom-dislaimer'>
            <h1 className="Des-h1">DISCLAIMER</h1>
            <div className="desc-div1">
                Before purchasing cryptocurrency and participating in the 80/20 Smart
                Contract, you must ensure that the nature, complexity and risks inherent in the
                investment arena are suitable for your objectives in light of your circumstances
                and financial position. You should not purchase cryptocurrency unless you
                understand the extent of your exposure to potential loss. The 80/20 Smart
                Contract and its affiliates, agents, and sponsors will not be liable for any actions
                taken as a result of your use of this website or participation in the 80/20 Smart
                Contract. For more information please read the disclaimer.
            </div>
            <div  className="desc-button">
                <input type="submit" value="DISCLAMER" />
            </div>
        </div>
    )
}
