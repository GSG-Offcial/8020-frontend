import React from 'react';
import { Navbar } from './Components/Home/NavBar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashBoardNavbar } from './Components/DashBoard/index';
import { Header } from './Components/Lottery/Header/Header';
import { NftHeader } from './Components/NFTCommunity/index';
import { NftHeader2 } from './Components/NFTCommunityNew/index';
import { NftHeader1 } from './Components/NFT-Pool/index';
import './App.css';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';


// dropdown
import {MusicPage,ArtdropDown} from './Components/DashBoard/DB-Body/DropDownPages/index'
import {MusicHeader} from './Components/DashBoard/DB-Body/DropDownPages/MusicDropDown/MusicHeader'
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
              <Route exact path="/nftPool" component={NftHeader1} />
              <Route exact path="/communityPool" component={NftHeader} />
              <Route exact path="/communityPoolNew" component={NftHeader2} />
            </Switch>
          </div>
        </div>
      </Router>
      <div>
          <Router>
          <MusicHeader/>
            <Switch>
            <Route exact path="/dashboard/music" component={MusicPage} />
            <Route exact path="/dashboard/art" component={ArtdropDown} />
            </Switch>
          </Router>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
