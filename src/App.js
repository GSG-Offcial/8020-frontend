import React from "react";
import { Navbar } from "./Components/Home/NavBar/Navbar";

// import React Router
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

// DashBoard Comp
import { DashBoardNavbar } from "./Components/DashBoard/index";

import "./App.css";

function App() {
  return (
    <Router>
      <div className='main_div'>
        <div>
          <Switch>
            <Route exact path="/" component={Navbar}/>
            <Route exact path='/dashboard' component={DashBoardNavbar} />
          </Switch>   
        </div>
       
      </div>
    </Router>
  );
}

export default App;
