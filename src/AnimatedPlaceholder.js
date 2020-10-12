import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import $ from "jquery";


class AnimatedPlaceholder extends Component {
    componentDidMount() {
        let target = $('#target');
        const change = function(str) {
            let tmp = $('<h1>' + str + '</h1>');
            tmp.css({
                display: "inline-block",
                position: "absolute"
            })
                .appendTo('body')
                .hide();
            tmp.remove();
            target.animate({
                opacity: 0
            }, 200, function() {
                target.animate({
                }, 300, function() {
                    target.empty()
                        .html(str)
                        .css({
                            display: "initial"
                        })
                        .animate({
                            animationDuration:700,
                            animationTimingFunction:"easeIn",
                            animationDelay:0,
                            animationIterationCount:1,
                            animationDirection:"forwards",
                            animationPlayState:"running",
                            opacity: 1
                        }, 200);
                });
            });
        }
        let samples = [
            "استان",
            "شهر",
            "منطقه"
        ];
        let i = 0;
        setInterval(function() {
            change(samples[++i % samples.length]);
        }, 3000);
    }
    render() {
        return (
            <div className="container d-inline-block " dir="rtl">
                <p className="text-right placeholder" dir="rtl">
                        <i className="fa fa-map-marker pl-2" />
                        {/*نام   <span id="target" className="px-2">شهر </span> خود را وارد کنید*/}
                    نام شهر  خود را وارد کنید
                </p>
            </div>
        );
    }
}

export default AnimatedPlaceholder;