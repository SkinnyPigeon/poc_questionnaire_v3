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

    makeCheckBoxes = () => {
        let checkboxes = <ul>
            {this.props.values[0]}
            <label>
                <input type='radio' id={1} onChange={this.handleCheckBoxes} checked={this.props.answer === 1}/>
                1
            </label>
            <label>
                <input type='radio' id={2} onChange={this.handleCheckBoxes} checked={this.props.answer === 2}/>
                2
            </label>
            <label>
                <input type='radio' id={3} onChange={this.handleCheckBoxes} checked={this.props.answer === 3}/>
                3
            </label>
            <label>
                <input type='radio' id={4} onChange={this.handleCheckBoxes} checked={this.props.answer === 4}/>
                4
            </label>
            <label>
                <input type='radio' id={5} onChange={this.handleCheckBoxes} checked={this.props.answer === 5}/>
                5
            </label>
            {this.props.values[1]}
        </ul>
        return checkboxes;
    }

    handleCheckBoxes = (e) => {
        this.props.handleCheckBox(parseInt(e.target.id))
    }

    selectRating() {
        let type = '';
        switch(this.props.rating) {
            case 'input':
                type = <input 
                        onChange={this.props.handleInput} 
                        value={this.props.answer}>
                    </input>
                break;
            case 'select':
                let options = this.fillSelectOptions(this.props.values);
                type = <select 
                    onChange={this.props.handleInput} 
                    value={this.props.answer}>
                        {options}
                    </select>
                break;
            case 'textarea':
                type = <textarea 
                        onChange={this.props.handleInput} 
                        value={this.props.answer}>
                    </textarea>
                break;
            case 'checkbox':
                type = this.makeCheckBoxes(this.props.values)
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