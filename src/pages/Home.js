import React, {Component} from 'react';
//background images
import bg from '../images/background-new.png'
import bg_sm from '../images/background-sm-new.png'
//components
import MyNav from "../Components/MyNav";
import MainText from "../Components/MainText";

class Home extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col navBar1">
                    <MyNav/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ml-0 pl-0">
                        <img src={bg} alt="background" className="bg-image d-none d-lg-block"/>
                    </div>
                    <div className="col-lg-5 ">
                        <MainText/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={bg_sm} alt="background for small devices" className="bg-sm d-lg-none"/>
                </div>
            </div>
            <section className="greenDevider d-none d-lg-block"/>
            <section className="greenDeviderSm  d-lg-none"/>
        </div>
    );
  }
}

export default Home;
