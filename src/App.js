import React from 'react';
import { Navbar } from './Components/Home/NavBar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashBoardNavbar } from './Components/DashBoard/index';
import { Header } from './Components/Lottery/Header/Header';
import {NftHeader} from './Components/NFT-Pool/index'
import './App.css';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="main_div">
          <div>
            <Switch>
              <Route exact path="/" component={Navbar} />
              <Route exact path="/dashboard" component={DashBoardNavbar} />
              <Route exact path="/lottery" component={Header} />
              <Route exact path="/nft-pool" component={NftHeader}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
