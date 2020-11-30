import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

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

    getProducts=()=>{
        let city =this.props.location.locId
        console.log(city)
        // axios.get(`http://roocket.org/api/user?api_token=${apiToken}`)
        //https://calm-garden-76853.herokuapp.com/locations/products?locationId=city_8c90cda84b073f84695afe65a98d6c4958fb2075
        axios.get('https://calm-garden-76853.herokuapp.com/locations/products?locationId=city_8c90cda84b073f84695afe65a98d6c4958fb2075')
            // null,
            // { params: city}
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
            data.map((item, index) => (<div key={index} className="col-md-4 my-5">
                <div className="card products-card" dir="rtl">
                    <img src={item.MainImageUrl} className="card-img-top mx-auto products-card-img" alt=""/>
                    <div className="card-body text-right" >
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-text" style={{height:"100px",overflow:"hidden"}}>{item.productDescription.substring(0,70)}...</p>
                        <Link to={`product/${item.id}`} className="btn btn-info btn-sm mb-1" style={{float:"left"}}>مشاهده</Link>
                        {/*<button className="btn btn-info btn-sm mb-1" style={{float:"left"}}>مشاهده</button>*/}
                    </div>
                </div>
            </div>))
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