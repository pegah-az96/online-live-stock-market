import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css'

class AnimatedPlaceholder extends Component {
    render() {
        return (
            <div className="container d-inline-block " dir="rtl">
                <p className="text-right placeholder" dir="rtl">
                    <i className="fa fa-map-marker pl-2" />
                    نام شهر  خود را وارد کنید
                </p>
            </div>
        );
    }
}
export default AnimatedPlaceholder;