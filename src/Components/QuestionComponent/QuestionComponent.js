import React, { Component } from 'react';
import fcrbQuestions from '../pocQuestions/fcrb';
import ustanPatientQuestions from '../pocQuestions/ustanPatients';
import ustanProfessionalQuestions from '../pocQuestions/ustanProfessionals';
import zmcPatientQuestions from '../pocQuestions/zmcPatients';
import zmcProfessionalQuestions from '../pocQuestions/zmcProfessionals';
import Navigation from '../Navigation/Navigation';
import ProgressTracker from '../progressTracker/ProgressTracker';
import Rating from '../Rating/Rating';

import styles from './QuestionComponent.module.css';

export default class QuestionComponent extends Component {
    state = {
        questions: '',
        sections: '',
        question: 'q1',
        type: '',
    }

    componentDidMount() {
        let questions = '';
        let sections = '';
        let type = '';
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
                        // type = this.setupType(questions['q1']);
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
            type: type
        })
    }

    // componentDidUpdate(prevProp, prevState) {
        // console.log(this.state)
        // if(this.state.questions[this.state.question].answer !== prevState.questions[this.state.question].answer) {
        //     console.log("KASJKDJSJ")
        // }
    // }

    componentDidUpdate() {
        console.log(this.state.question)
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
            // let type = this.selectType(this.state.questions, question);
            this.setState({
                question: question,
                // type: type
            })
        }
    }

    handlePrevious = () => {
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > 1) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            // let type = this.selectType(this.state.questions, question);
            this.setState({
                question: question,
                // type: type
            })
        }
    }

    
    setupType = (question) => {
        // console.log(question);
        let type = '';
        switch(question.type) {
            case 'input':
                type = <input onChange={this.handleInput} value=''></input>
                break;
            case 'select':
                let options = this.fillSelectOptions(question);
                type = <select onChange={this.handleInput} value={0}>
                    {options}
                </select>
                break;
            case 'textarea':
                type = <textarea onChange={this.handleInput}></textarea>
                break;
            case 'checkbox':
                type = <input onChange={this.handleInput}></input>
                break;
            default:
                break;
        }
        return type;
    }

    selectType = () => {
        let type = '';
        switch(this.state.questions[this.state.question].type) {
            case 'input':
                type = <input onChange={this.handleInput} value={this.state.questions[this.state.question].answer}></input>
                break;
            case 'select':
                let options = this.fillSelectOptions(this.state.questions[this.state.question]);
                type = <select onChange={this.handleInput} value={this.state.questions[this.state.question].answer}>
                    {options}
                </select>
                break;
            case 'textarea':
                type = <textarea onChange={this.handleInput}></textarea>
                break;
            case 'checkbox':
                type = <input onChange={this.handleInput}></input>
                break;
            default:
                break;
        }
        return type;
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
        updatedQuestions[this.state.question].answer = e.target.value;
        this.setState({
            questions: updatedQuestions
        })
    }

    render() {
        let display = '';
        let max = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        this.state.questions ? display = <div className={styles.wrapper}>
            <h3 className={styles.question}>{this.state.questions[this.state.question].question}</h3>
            {/* {this.state.type} */}
            <Rating 
                question={this.state.question} 
                rating={this.state.questions[this.state.question].type} 
                answer={this.state.questions[this.state.question].answer}
                values={this.state.questions[this.state.question].values}
                handleInput={this.handleInput}
            />
            <Navigation 
                handleNext={this.handleNext} 
                handlePrevious={this.handlePrevious} 
            />
            <ProgressTracker max={String(max)} value={questionNumber}/>
        </div> : display = '';                                                         
        return (
            <div>
                {display}
            </div>
        )
    }
}