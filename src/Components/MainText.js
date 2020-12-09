import React, {Component} from 'react';
//components
import SearchBox from "./SearchBox";

class MainText extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-right mt-5" dir="rtl">
                        <span className="mb-4 text-1">پلتفرم هوشمند جستجوی گوسفند</span>
                        <span className="text-2">
                            گوسفند خودتُ پیدا کن!
                        </span>
                    </div>
                </div>
                <div className="row" >
                    <SearchBox/>
                   <div className="col text-right mt-4" dir="rtl">
                       <span className="text-3">
                              به کمک فارمزی،به سادگی از بهترین دامداران منطقه خود گوسفند زنده بخرید و از خدمات ارسال رایگان به همراه قصاب بهره مند شوید.
                       </span>
                   </div>
                </div>
            </div>
        );
    }
}

export default MainText;