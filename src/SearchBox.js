import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
// import axios from 'axios'
import {Link} from "react-router-dom";
//import AnimatedPlaceholder from "./AnimatedPlaceholder";
import {cities} from "./FetchApi";

class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            // cities :[],
            suggestions: [],
            text: ''
        }
    }
    // componentDidMount() {
    //     axios.get('https://hidden-shelf-13371.herokuapp.com/locations')
    //         //https://api.mocki.io/v1/b043df5a
    //         .then( response=> {
    //             let data= response.data;
    //             let citynames = []
    //             for (let i of data){
    //                 citynames.push(i.city +" " +  i.county + " " + i.province)
    //             }
    //             this.setState(()=>({cities: citynames}))
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    onTextChange = (e) => {
        // let {cities} =this.state
        const value = e.target.value;
        let suggestions = [];
        let names=[]
        for (let i of cities){
            names.push(i.name)
        }
        console.log(names)
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = names.filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
        // console.log(cities.find(x => x.name === this.state.text).locationId)
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }
    // hidePlaceholder=()=>{
    //     document.getElementById('searchInput').style.zIndex="12"
    // }
    // showPlaceholder=(event)=>{
    //     const target = event.target;
    //     const value =  target.value;
    //     if (value === "")
    //         document.getElementById('searchInput').style.zIndex="9"
    // }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        const { text } = this.state;
        return (
            <div className="input-group input-group-lg mt-4 mr-3">
                <div className="input-group-prepend">
                    <Link to={{pathname: `/products`, city: {text}}} className="btn btn-primary search-btn">جستجو</Link>
                    {/*<button className="btn btn-primary search-btn" onClick={this.getCity.bind(this)}>جستجو</button>*/}
                </div>
                <input id="searchInput" type="text" name="searchInput" className="form-control search icon" placeholder="&#xF041; نام شهر خود را وارد کنید" dir="rtl" value={text} onChange={this.onTextChange} />
                {/*onFocus={this.hidePlaceholder.bind(this)} onBlur={this.showPlaceholder.bind(this)}*/}
                {/*<AnimatedPlaceholder/>*/}
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default SearchBox;