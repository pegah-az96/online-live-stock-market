import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
import {cities} from "./FetchApi";

class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: '',
            locationId:''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        let names=[]
        for (let i of cities){
            names.push(i.name)
        }
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = names.filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText(value) {
        let locId= cities.find(x => x.name === value).locationId
        this.setState(() => ({
            text: value,
            suggestions: [],
            locationId:locId
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
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        // console.log()
        const { text,locationId } = this.state;
        console.log(text,locationId)
        return (
            <div className="input-group input-group-lg mt-4 mr-3">
                <div className="input-group-prepend">
                    <Link to={{pathname: `/products`, locId: locationId}} className="btn btn-primary search-btn">جستجو</Link>
                    {/*<button className="btn btn-primary search-btn" onClick={this.getCity.bind(this)}>جستجو</button>*/}
                </div>
                <input id="searchInput" type="text" name="searchInput" className="form-control search icon" placeholder="&#xF041; نام شهر خود را وارد کنید" dir="rtl" value={text} onChange={this.onTextChange} />
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default SearchBox;