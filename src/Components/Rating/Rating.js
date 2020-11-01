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

    makeCheckBoxes = (value) => {
        let checkboxes = <ul>
            {this.props.values[0]}
            <input key={1} id={1} type='checkbox' onChange={this.props.handleInput} />
            <input key={2} id={1} type='checkbox' onChange={this.props.handleInput} />
            <input key={3} id={1} type='checkbox' onChange={this.props.handleInput} />
            <input key={4} id={1} type='checkbox' onChange={this.props.handleInput} />
            <input key={5} id={1} type='checkbox' onChange={this.props.handleInput} />
            {this.props.values[1]}
        </ul>
        return checkboxes;
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
                // type = <input 
                //         onChange={this.props.handleInput} 
                //         value={this.props.answer}>
                //     </input>
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