import React from 'react'
import {Navbar} from './Components/Home/NavBar/Navbar'
import {SecondComp} from './Components/Home/SecCom/SecondComp'
import './App.css';

function App() {
  return (
    <div className="main_div">
      <Navbar/>
      <div>
        <SecondComp/>
      </div>
    </div>
  );
}

export default App;
