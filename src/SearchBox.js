import React, {Component} from 'react';
import AnimatedPlaceholder from "./AnimatedPlaceholder";
import countries from "./Cities";

class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = countries.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
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
    hidePlaceholder=()=>{
        document.getElementById('searchInput').style.zIndex="12"
    }
    showPlaceholder=(event)=>{
        const target = event.target;
        const value =  target.value;
        if (value === "")
            document.getElementById('searchInput').style.zIndex="9"
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
        const { text } = this.state;
        return (
            <div className="input-group input-group-lg mt-3">
                <div className="input-group-prepend">
                    <button className="btn btn-primary search-btn">جستجو</button>
                </div>
                <input id="searchInput" type="text" name="searchInput" className="form-control" placeholder={""} dir="rtl" value={text} onChange={this.onTextChange} onFocus={this.hidePlaceholder.bind(this)} onBlur={this.showPlaceholder.bind(this)}/>
                <AnimatedPlaceholder/>
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default SearchBox;