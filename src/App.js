import React from "react";
import { Navbar } from "./Components/Home/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashBoardNavbar } from "./Components/DashBoard/index";
import { Header } from "./Components/Lottery/Header/Header";
import { UpgradedDashboard } from "./Components/upgradedDashboard/UpgradedDashboard";
import { NftHeader } from "./Components/NFTCommunity/index";
import { NftHeader2 } from "./Components/NFTCommunityNew/index";
import { NftHeader1 } from "./Components/NFT-Pool/index";
import { DashboardUpdgrade, StakingPool } from "./versiontwo/modules";

import "./App.css";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

// dropdown
import {
  MusicPage,
  ArtdropDown,
  Sports,
  Utilities,
} from "./Components/DashBoard/DB-Body/DropDownPages/index";
// import {MusicHeader} from './Components/DashBoard/DB-Body/DropDownPages/MusicDropDown/MusicHeader'
// import {SideBarDropDown} from './Components/DashBoard/DB-Body/DropDownPages/MusicDropDown/SidebarDropDown'
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
              {/* <Route
                exact
                path="/upgradeddashboard"
                component={UpgradedDashboard}
              /> */}
              <Route exact path="/lottery" component={Header} />
              <Route exact path="/nftPool" component={NftHeader1} />
              <Route exact path="/communityPool" component={NftHeader} />
              <Route exact path="/communityPoolNew" component={NftHeader2} />

              <Route exact path="/music" component={MusicPage} />
              <Route exact path="/art" component={ArtdropDown} />
              <Route exact path="/sports" component={Sports} />
              <Route exact path="/utilities" component={Utilities} />

              {/*Version 2  */}
              <Route
               exact
                path={"/dashboard-upgrade"}
                component={DashboardUpdgrade}
              />
              <Route
               exact
                path={"/staking-pool"}
                component={StakingPool}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
