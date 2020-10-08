import React, {Component} from 'react';
//components
import SearchBox from "./SearchBox";

class MainText extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-right" dir="rtl">
                        <h4 className="mt-5">پلتفرم هوشمند جستجوی گوسفند</h4>
                        <h1 className="mt-3">
                            <b>گوسفند خودتُ پیدا کن!</b>
                        </h1>
                    </div>
                </div>
                <div className="row" >
                    <SearchBox/>
                   <div className="col text-right mt-3" dir="rtl">
                       <h6>
                          <b>
                              به کمک فارمزی،به سادگی از بهترین دامداران منطقه خود گوسفند زنده بخرید و از خدمات ارسال رایگان به همراه قصاب بهره مند شوید.
                          </b>
                       </h6>
                   </div>
                </div>
            </div>
        );
    }
}

export default MainText;