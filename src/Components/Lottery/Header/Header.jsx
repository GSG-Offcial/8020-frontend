
import React from 'react'
import './Header.css'


// import React from 'react';
// import './Header.css';

export const Header = () => {
  return (
    <div className="contianer-home" id="lotter-maindiv">
      <div>
        <h1>
          <span className="badge header-heading">DashBoard</span>
        </h1>
      </div>

      <div>
        <ul className="nav justify-content-end" id="home-ul">
          <li className="nav-item" id="lottery-li">
            <a className="nav-link active" aria-current="page" href="#/">
              Dashboard
            </a>
          </li>
          <li className="nav-item" id="lottery-li2">
            <a className="nav-link active " aria-current="page" href="#/">
              Your spons ID: 0x02354309
            </a>
          </li>
          <li className="nav-item" id="lottery-li3">
            <a className="nav-link active" aria-current="page" href="#/">
              Copy Ref. link
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form class="d-flex">
          <input type="submit" value="Connect" className="lottery-btn" />
        </form>
      </div>
    </div>
  );
};
