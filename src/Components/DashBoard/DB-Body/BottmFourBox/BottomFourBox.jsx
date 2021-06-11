import React from 'react'
import './BottomFourBox.css'
export const BottomFourBox = () => {
    return (
        <div>
            <div className="mainbox">
      <div>
        <p className="boxes" id="box_1">Total Value Locked
          1000 ETH</p>
        <p className="amount">$1000k</p>
      </div>
      <div>
        <p className="boxes" id="box_2">
          Token Supply
        </p>
        <p className="amount-2">$1000k</p>

      </div>
      <div className="boxes" id="box_3">
        <p>Total ETH Deposited
          since inception  1000k ETH
        </p>
        <p className="amount">$1000k</p>
      </div>
      <div >
        <p className="boxes" id="box_4"> Total Dividends
        </p>
        Paid 1000k ETH
        <p className="amount">$1000k</p>
      </div>

    </div>
        </div>
    )
}
