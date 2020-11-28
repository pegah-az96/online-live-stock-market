import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

class Products extends Component {
    getProducts=()=>{
        let city =this.props.location.locId
        console.log(city)
        //https://calm-garden-76853.herokuapp.com/locations/products?locationId=city_8c90cda84b073f84695afe65a98d6c4958fb2075
        axios.get('https://calm-garden-76853.herokuapp.com/locations/products?locationId=city_8c90cda84b073f84695afe65a98d6c4958fb2075')
            // null,
            // { params: city}
            .then( response=> {
                let data= response.data;
                console.log(data)
                for (let i of data){
                    return(
                        <li>{i.productName}</li>
                    );
                }

            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {

        return (
            <div>
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
                                <ul>
                                    {this.getProducts()}
                                </ul>
                            </div>
                        </div>
                       <div className="row">
                           <ul>
                               {this.getProducts()}
                           </ul>

                       </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Products;