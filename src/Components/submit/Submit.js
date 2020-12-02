import React, { Component } from 'react';
import styles from './Submit.module.css';

export default class Submit extends Component {

    handleKeyDown = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
            this.handleSubmission()
        }
    }

    handleSubmission = () => {
        console.log("Submitting")
        let results = this.extractQsAndAs()
        console.log(results)
        fetch('http://localhost:2021/api/send_results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(results)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data);
            let button = document.getElementById('submitButton')
            button.className = styles.success;
            button.disabled = true;
        })
        .catch(error => {
            console.error('Error: ', error)
        })
    }

    extractQsAndAs = () => {
        let questions = {}
        for (let key in this.props.questions) {
            questions[key] = {
                question: this.props.questions[key].question,
                rating: this.props.questions[key].answer
            }
        }
        questions['case_study'] = this.props.caseStudy
        return questions
    }

    render() {
        let className = this.props.disabled ? styles.hidden : styles.wrapper;
        return (
            <div className={className}>
                <button 
                    id="submitButton" 
                    onClick={this.handleSubmission} 
                    onKeyDown={this.handleKeyDown} disabled={this.props.disabled}
                >
                    {this.props.submit}
                </button>
            </div>
        )
    }
}