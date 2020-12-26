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
        document.body.className='grey'
        const {params} =this.props.match;
        axios.get(`https://calm-garden-76853.herokuapp.com/products/${params.id}`)
            .then(response =>{
                this.setState({productInfo:response.data})
            })
    }
    componentWillUnmount(){
        document.body.className=''
    }


    render() {
        const {productInfo}=this.state
        return (
            <div className="mx-4">
                <div className="row my-5 bg-white border" dir="rtl">
                    <div className="col-md-4 text-center my-2 border-left">
                        <img src={productInfo.MainImageUrl} className="product-image mt-md-5 mt-4" alt="product" />
                    </div>
                    <div className="col-md-5 text-right mt-3">
                       <h1 className=" product-name"> {productInfo.productName}</h1>
                        {/*<hr className="mr-5"/>*/}
                        <p className="text-right mr-2 features">{productInfo.productDescription}</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div className="card bg-light my-4 text-right" style={{height:"250px"}}>
                            <div className="card-body buyCard">
                                <i className="fa fa-car"></i>
                                <span> خدمات ارسال رایگان گوسفند</span>
                                <hr/>
                                <img src={but} style={{width:"30px",height:"30px"}} alt=""/>
                                <span>ارسال قصاب رایگان در محل</span>
                                <hr/>
                                <button className="btn btn-danger btn-block order-btn py-2">ثبت سفارش </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;