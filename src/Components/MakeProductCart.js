import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MakeProductCart extends Component {
    render() {
        const {item}=this.props
        return (
                <div className="col-lg-3 col-md-5 card products-card my-3 mx-3" dir="rtl">
                    <img src={item.MainImageUrl} className="card-img-top products-card-img my-2" alt=""/>
                    <div className="card-body text-center" >
                        <h6 className="card-title text-right">{item.productName}</h6>
                        <p className="card-text text-right" style={{fontSize:"14px",height:"70px",overflow:"hidden"}}>{item.productDescription.substring(0,70)}...</p>
                        <Link to={`product/${item.id}`} className="btn btn-block btn-sm mb-1 btn-rounded">
                            <i className="fa fa-shopping-cart ml-2"></i>
                            خرید این گوسفند زنده
                        </Link>
                    </div>
                </div>
        );
    }
}

export default MakeProductCart;