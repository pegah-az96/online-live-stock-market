import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MakeProductCart extends Component {
    render() {
        const {item}=this.props
        return (
            <div  className="col-md-4 my-5">
                <div className="card products-card" dir="rtl">
                    <img src={item.MainImageUrl} className="card-img-top ml-auto products-card-img" alt=""/>
                    <div className="card-body text-center" >
                        <h5 className="card-title text-right">{item.productName}</h5>
                        <p className="card-text text-right" style={{height:"70px",overflow:"hidden"}}>{item.productDescription.substring(0,70)}...</p>
                        <Link to={`product/${item.id}`} className="btn btn-info btn-sm mb-1 btn-rounded">جزئیات بیشتر</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeProductCart;