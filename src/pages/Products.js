import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import MakeProductCart from "../Components/MakeProductCart";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        this.getProducts()
    }
    componentWillUnmount() {
        this.setState(()=>{
            return{
                data:[]
            }
        })
    }

    getProducts=()=>{
        let city =this.props.location.locId
        console.log(city)
        axios.get('https://calm-garden-76853.herokuapp.com/locations/products?locationId=city_8c90cda84b073f84695afe65a98d6c4958fb2075')
            .then( response=> {
                let data= response.data;
               this.setState(()=>{
                   return{
                       data:data
                   }
               })
                console.log("data:",this.state.data)

            })
            .catch(error => {
                console.log(error);
            })
    }
    showProducts=()=>{
        const {data}=this.state;
        return (
            data.map((item, index) => (<MakeProductCart key={index} item={item}/>))
        );
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
                            </div>
                        </div>
                    </div>
                </header>
                <div className="row mt-5 mx-5">
                    {this.showProducts()}
                </div>

            </div>
        );
    }
}

export default Products;