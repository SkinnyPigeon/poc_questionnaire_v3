import React, { Component } from 'react';

export default class Rating extends Component {

    state = {
        rating: <div></div>
    }

    componentDidMount() {
        const rating = this.selectRating();
        this.setState({
            rating: rating
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.question !== this.props.question) {
            let rating = this.selectRating();
            this.setState({
                rating: rating
            })
        }
        if(prevProps.answer !== this.props.answer) {
            let rating = this.selectRating();
            this.setState({
                rating: rating
            })
        }
    }

    fillSelectOptions = (values) => {
        let options = [];
        for(let i = 0; i < values.length; i++) {
            options.push(<option key={i} value={i}>{values[i]}</option>)
        }
        return options
    }

    selectRating() {
        let type = '';
        switch(this.props.rating) {
            case 'input':
                type = <input onChange={this.props.handleInput} value={this.props.answer}></input>
                break;
            case 'select':
                let options = this.fillSelectOptions(this.props.values);
                type = <select onChange={this.props.handleInput} value={this.props.answer}>
                    {options}
                </select>
                break;
            case 'textarea':
                type = <textarea onChange={this.props.handleInput}></textarea>
                break;
            case 'checkbox':
                type = <input onChange={this.props.handleInput}></input>
                break;
            default:
                break;
        }
        return type;
    }

    render() {
        return (
            <div>
                {this.state.rating}
            </div>
        )
    }
}