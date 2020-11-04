import React, { Component } from 'react';
import fcrbQuestions from '../pocQuestions/fcrb';
import ustanPatientQuestions from '../pocQuestions/ustanPatients';
import ustanProfessionalQuestions from '../pocQuestions/ustanProfessionals';
import zmcPatientQuestions from '../pocQuestions/zmcPatients';
import zmcProfessionalQuestions from '../pocQuestions/zmcProfessionals';
import Navigation from '../Navigation/Navigation';
import ProgressTracker from '../progressTracker/ProgressTracker';
import Rating from '../Rating/Rating';
import Submit from '../submit/Submit';

import styles from './QuestionComponent.module.css';

export default class QuestionComponent extends Component {
    state = {
        questions: '',
        sections: '',
        question: 'q68',
    }

    componentDidMount() {
        let questions = '';
        let sections = '';
        switch(this.props.hospital) {
            case 'FCRB':
                questions = fcrbQuestions['questions'];
                sections = fcrbQuestions['sections'];
                break;
            case 'USTAN':
                switch(this.props.type) {
                    case 'PATIENT':
                        questions = ustanPatientQuestions['questions'];
                        sections = ustanPatientQuestions['sections'];
                        break;
                    case 'PROFESSIONAL':
                        questions = ustanProfessionalQuestions['questions'];
                        sections = ustanProfessionalQuestions['sections'];
                        break;
                    default:
                        break;
                }
                break;
            case 'ZMC':
                switch(this.props.type) {
                    case 'PATIENT':
                        questions = zmcPatientQuestions['questions'];
                        sections = zmcPatientQuestions['sections'];
                        break;
                    case 'PROFESSIONAL':
                        questions = zmcProfessionalQuestions['questions'];
                        sections = zmcProfessionalQuestions['sections'];
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        this.setState({
            questions: questions,
            sections: sections,
        })
    }

    componentDidUpdate() {
        console.log(this.state.questions)
    }
    countQuestions = () => {
        let count = 0, key;
        for(key in this.state.questions) {
            if(this.state.questions.hasOwnProperty(key)) {
                count++;
            }
        }
        return count
    }

    handleNext = () => {
        let questionCount = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        if(questionNumber < questionCount) {
            let question = 'q' + (parseInt(questionNumber) + 1);
            this.setState({
                question: question,
            })
        }
    }

    handlePrevious = () => {
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > 1) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            this.setState({
                question: question,
            })
        }
    }
    
    fillSelectOptions = (question) => {
        console.log(question)
        let options = [];
        for(let i = 0; i < question.values.length; i++) {
            options.push(<option key={i} value={i}>{question.values[i]}</option>)
        }
        return options
    }

    handleInput = (e) => {
        let updatedQuestions = this.state.questions;
        if(this.isInteger(e.target.value)) {
            updatedQuestions[this.state.question].answer = parseInt(e.target.value);

        } else {
            updatedQuestions[this.state.question].answer = e.target.value;
        }
        this.setState({
            questions: updatedQuestions
        })
    }

    handleCheckBox = (id) => {
        let updatedQuestions = this.state.questions;
        updatedQuestions[this.state.question].answer = id;
        this.setState({
            questions: updatedQuestions
        })
    }

    isInteger = (value) => {
        return /^\d+$/.test(value);
    }

    disable = () => {
        let answer = this.state.questions[this.state.question].answer
        if(this.state.questions[this.state.question].optional) {
            return false;
        }
        if(answer === 0 || answer === "") {
            return true;
        }
        return false;
    }

    render() {
        let display = '';
        let max = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        let disabled;
        if(max > 0) {
            disabled = this.disable();
        }
        let disabledSubmit = true;
        if(max === parseInt(questionNumber) && !disabled) {
            disabledSubmit = false;
            disabled = true;
        }
        this.state.questions ? display = <div className={styles.wrapper}>
            <h3 className={styles.question}>{this.state.questions[this.state.question].question}</h3>
            <Rating 
                question={this.state.question} 
                rating={this.state.questions[this.state.question].type} 
                answer={this.state.questions[this.state.question].answer}
                values={this.state.questions[this.state.question].values}
                selected={this.state.questions[this.state.question].selected}
                handleInput={this.handleInput}
                handleCheckboxes={this.handleCheckboxes}
                handleCheckBox={this.handleCheckBox}
            />
            <Navigation 
                handleNext={this.handleNext} 
                handlePrevious={this.handlePrevious} 
                disabled={disabled}
            />
            <ProgressTracker max={String(max)} value={questionNumber}/>
            <Submit 
                questions={this.state.questions} 
                caseStudy={this.props.caseStudy} 
                disabled={disabledSubmit}
                display={disabledSubmit}
            />
        </div> : display = '';                                                         
        return (
            <div>
                {display}
            </div>
        )
    }
}