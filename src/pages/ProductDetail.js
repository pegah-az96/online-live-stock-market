import React, {Component} from 'react';
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';
import but from '../images/butcher.png'


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            productInfo:[]
        }
    }
    componentDidMount() {
        const {params} =this.props.match;
        axios.get(`https://calm-garden-76853.herokuapp.com/products/${params.id}`)
            .then(response =>{
                this.setState({productInfo:response.data})
            })
    }

    render() {
        const {productInfo}=this.state
        return (
            <div className="container product-bg">
                <div className="row my-5" dir="rtl">
                    <div className="col-md-4 mt-md-5">
                        <img src={productInfo.MainImageUrl} className="product-image mt-4" alt="product"/>
                    </div>
                    <div className="col-md-4 mt-3">
                       <h1 className="text-center product-name"> {productInfo.productName}</h1>
                        <hr/>
                        <p className="text-right mr-2">{productInfo.productDescription}</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="card bg-light my-4 text-right" style={{height:"250px"}}>
                            <div className="card-body">
                                <i className="fa fa-car"></i>
                                <span> خدمات ارسال رایگان گوسفند</span>
                                <hr/>
                                <img src={but} style={{width:"30px",height:"30px"}} alt=""/>
                                <span>ارسال قصاب رایگان در محل</span>
                                <hr/>
                                <button className="btn btn-danger btn-block btn-rounded">ثبت سفارش </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;