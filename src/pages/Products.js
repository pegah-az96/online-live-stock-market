import React, {Component} from 'react';
import axios from 'axios'
//components
import MakeProductCart from "../Components/MakeProductCart";
import logo from "../images/logo-new.png";
import sheep from '../images/sheep.png'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            currentPage: 1,
            ProductsPerPage: 6
        }
    }
    componentDidMount() {
        this.getProducts()
    }

    getProducts=()=>{
        let locId =this.props.location.locId
        if (locId !== undefined){
            localStorage.setItem('location', locId);
        }
        else {
            locId=localStorage.getItem('location');
        }
        axios.get(`https://calm-garden-76853.herokuapp.com/locations/products?locationId=${locId}`)
            .then( response=> {
               let data= response.data;
               this.setState(()=>{
                   return{
                       data:data
                   }
               })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderProducts=()=>{
        const {data, currentPage, ProductsPerPage}=this.state;
        const indexOfLastProduct = currentPage * ProductsPerPage;
        const indexOfFirstProduct= indexOfLastProduct - ProductsPerPage;
        const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
        return(
            currentProducts.map((item, index) => (<MakeProductCart key={index} item={item}/>))
        );

    }

    renderPageNumbers=()=>{
        const {data,ProductsPerPage}=this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / ProductsPerPage); i++) {
            pageNumbers.push(i);
        }
        return(
            pageNumbers.map(number => {
                return (
                    <li key={number} id={number} onClick={this.handleClick.bind(this)}>
                        {number}
                    </li>
                );
            })
        )
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        return (
            <div>
                {/*search section*/}
                <div className="row" dir="rtl">
                    <div className="col-md-6 text-right mb-3 mx-3">
                        <div className="input-group input-group-lg mt-3">
                            <div className="input-group-prepend mx-3">
                                <img src={logo} width="40px" height="40px" alt=""/>
                            </div>
                            <input type="text"  className="form-control search-input" placeholder="&#xF002; جستجو در فارمزی" />
                        </div>
                    </div>
                </div>
                {/*green header*/}
                <header className="mt-3" id="products-header">
                    <div className="row ">
                        <h5 className="text-right mr-5 margin gold">سفارش تلفنی</h5>
                    </div>
                </header>
                <div className="row products justify-content-around mx-3" dir="rtl">
                    {/*phone-order-section*/}
                    <div className="col-md-2 bg-white">
                        <div className="card PhoneOrder-card my-3" dir="rtl">
                            <div className="card-body text-center" >
                                <h5 className="card-title text-right">سفارش تلفنی </h5>
                                <p className="card-text text-right">ثبت سفارش تلفنی این گوسفند زنده</p>
                            </div>
                        </div>
                        <img src={sheep} className="stick d-none d-lg-block" alt=""/>
                    </div>
                    {/*online-order-section*/}
                    <div className="col-md-10 ">
                        <h5 className="text-right top gold"> سفارش آنلاین</h5>
                        <div className="row bg-white mr-1 justify-content-around">
                            {this.renderProducts()}
                        </div>
                        <ul className="pageNumbers justify-content-center my-5">
                            {this.renderPageNumbers()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;