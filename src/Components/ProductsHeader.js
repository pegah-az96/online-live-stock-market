import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProductsHeader extends Component {
    render() {
        return (
            <header id="products-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-right pt-5">
                            <h5 className="text-right pt-5">فروشندگان</h5>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">
                                    <Link to="/">خانه</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <Link to="/products">فروشندگان</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default ProductsHeader;