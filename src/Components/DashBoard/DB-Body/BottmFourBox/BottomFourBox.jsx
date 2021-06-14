import React from 'react';
import './BottomFourBox.css';
export const BottomFourBox = () => {
  return (
    <div>
      <div className="bottom-mainbox mainbox">
        <div>
          <p className="boxes" id="box_1">
            User Balance 1000 ETH Token
          </p>
          <p className="amount">$1000k</p>
        </div>
        <div>
          <p className="boxes" id="box_2">
            Dividends Earned 0.1 ETH
          </p>
          <p className="amount-2">$1000k</p>
        </div>
        <div className="boxes" id="box_3">
          <p>Ref. Commision 0.1 ETH</p>
          <p className="bottom-amount amount">$1000k</p>
        </div>
        <div>
          <p className="boxes" id="box_4">
            Loyality Bones Earned 0.5 ETH
          </p>
          <p className="amount">$1000k</p>
        </div>
      </div>
    </div>
  );
};
