import React, { Component } from 'react';
import styles from './Rating.module.css';

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
        let checkboxes = <ul className={styles.checkBoxList}>
            <div className={styles.maxMin}>
                {this.props.values[0]}
            </div>
            <div className={styles.checkboxes}>
                <label>
                    <input type='radio' id={0} onChange={this.handleCheckBoxes} checked={this.props.answer === 0}/>
                    1
                </label>
                <label>
                    <input type='radio' id={1} onChange={this.handleCheckBoxes} checked={this.props.answer === 1}/>
                    2
                </label>
                <label>
                    <input type='radio' id={2} onChange={this.handleCheckBoxes} checked={this.props.answer === 2}/>
                    3
                </label>
                <label>
                    <input type='radio' id={3} onChange={this.handleCheckBoxes} checked={this.props.answer === 3}/>
                    4
                </label>
                <label>
                    <input type='radio' id={4} onChange={this.handleCheckBoxes} checked={this.props.answer === 4}/>
                    5
                </label>
            </div>
            <div className={styles.maxMin}>
                {this.props.values[1]}
            </div>
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
                type = <textarea className={styles.textArea}
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
            <div className={styles.rating}>
                {this.state.rating}
            </div>
        )
    }
}