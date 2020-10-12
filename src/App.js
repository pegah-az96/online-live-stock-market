import React, {Component} from 'react';
//logo and background images
import logo from './images/logo.png'
import bg from './images/background.png'
import bg_sm from './images/background-sm.png'
//components
import MainText from "./MainText";

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="mx-lg-auto">
                    <img src={logo} alt="logo" className="logo" width="100px" height="100px"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 ml-0 pl-0">
                    <img src={bg} alt="background" className="bg-image d-none d-lg-block"/>
                </div>
                <div className="col-lg-5">
                    <MainText/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={bg_sm} alt="background for small devices" className="bg-sm d-lg-none"/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
