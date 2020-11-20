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
import ConsentButton from '../ConsentButton/ConsentButton';
// import FlashMessage from '../FlashMessage/FlashMessage';

import styles from './QuestionComponent.module.css';

export default class QuestionComponent extends Component {
    state = {
        questions: '',
        sections: '',
        question: 'q0',
        section: 's0',
        skip: false,
        sectionTranslation: '',
        start: false
    }

    componentDidMount() {
        let questions = '';
        let sections = '';
        let message = '';
        let sectionTranslation = '';
        switch(this.props.hospital) {
            case 'FCRB':
                questions = fcrbQuestions['questions'];
                sections = fcrbQuestions['sections'];
                sectionTranslation = fcrbQuestions['sectionTranslation'];
                break;
            case 'USTAN':
                switch(this.props.type) {
                    case 'PATIENT':
                        questions = ustanPatientQuestions['questions'];
                        sections = ustanPatientQuestions['sections'];
                        sectionTranslation = ustanPatientQuestions['sectionTranslation'];
                        break;
                    case 'PROFESSIONAL':
                        questions = ustanProfessionalQuestions['questions'];
                        sections = ustanProfessionalQuestions['sections'];
                        sectionTranslation = ustanProfessionalQuestions['sectionTranslation'];
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
                        sectionTranslation = zmcPatientQuestions['sectionTranslation'];
                        break;
                    case 'PROFESSIONAL':
                        questions = zmcProfessionalQuestions['questions'];
                        sections = zmcProfessionalQuestions['sections'];
                        sectionTranslation = zmcProfessionalQuestions['sectionTranslation'];
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
            message: message,
            sectionTranslation: sectionTranslation,
            start: true
        })
    }

    componentDidUpdate() {
        console.log(this.state)
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

    countSections = () => {
        let count = 0, key;
        for(key in this.state.sections) {
            if(this.state.sections.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    checkSection = (question) => {
        let start = this.state.sections[this.state.section].range[0];
        let end = this.state.sections[this.state.section].range[1];
        console.log(`QUESTION: ${question}, START: ${start}, END: ${end}`)
        console.log((question - start) * (question - end) <= 0)
        return ((question - start) * (question - end) <= 0);
    }

    handleNext = () => {
        let sectionNumber = this.state.section.substring(1);
        if(this.state.skip) {
            let skipSection = 's' + (parseInt(sectionNumber) + 1);
            let skipQuestion = 'q' + this.state.sections[skipSection].range[0];
            this.setState({
                question: skipQuestion,
                section: skipSection,
                showMessage: true,
                skip: false,
                start: false
            })
            return;
        }
        let questionCount = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        if(questionNumber < questionCount) {
            let question = 'q' + (parseInt(questionNumber) + 1);
            this.setState({
                question: question,
                skip: false,
                showMessage: false,
                start: false
            })
            if(!this.checkSection(parseInt(questionNumber) + 1)) {
                let sectionCount = this.countSections();
                let sectionNumber = this.state.section.substring(1);
                if(sectionNumber < sectionCount) {
                    let section = 's' + (parseInt(sectionNumber) + 1);
                    this.setState({
                        section: section,
                        skip: false,
                        showMessage: false,
                        start: false
                    })
                }
            }
        }
        
    }

    handlePrevious = () => {
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > 0) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            this.setState({
                question: question,
                showMessage: false
            })
            if(!this.checkSection(parseInt(questionNumber) - 1)) {
                let sectionNumber = this.state.section.substring(1);
                if(sectionNumber > 0) {
                    let section = 's' + (parseInt(sectionNumber) - 1);
                    this.setState({
                        section: section
                    })
                    if(section === 's0') {
                        this.setState({
                            start: true
                        })
                    }
                }
            }
        }
    }
    
    fillSelectOptions = (question) => {
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
        if(this.state.questions[this.state.question].dependencies) {
            this.handleDependentQuestions();
        }
    }

    handleDependentQuestions = () => {
        let question = this.state.questions[this.state.question];
        let questionsToAlter = question.linked;
        let updatedQuestions = this.state.questions;
        if(question.answer === question.trigger) {
            questionsToAlter.forEach(function (question) {
                updatedQuestions[question].optional = true;
            })
            this.setState({
                questions: updatedQuestions,
                skip: true
            })
        } else {
            questionsToAlter.forEach(function (question) {
                updatedQuestions[question].optional = false;
            })
            this.setState({
                questions: updatedQuestions,
                skip: false
            })
        }
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
        let display, consent = '';
        let questionCount = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        let sectionCount = this.countSections();
        let sectionNumber = this.state.section.substring(1);
        let disabled;
        if(questionCount > 0) {
            disabled = this.disable();
        }
        let disabledSubmit = true;
        if(questionCount === parseInt(questionNumber) && !disabled) {
            disabledSubmit = false;
            disabled = true;
        }
        this.state.questions ? display = <div className={styles.wrapper}>
            <h5 className={styles.title}>{this.state.sections[this.state.section].title}</h5>
            <h5 className={styles.subtitle}>{this.state.sections[this.state.section].text}</h5>
            <div className={styles.line}></div>
            <div className={styles.question}>{this.state.questions[this.state.question].question}</div>
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
            <ProgressTracker 
                max={String(sectionCount)} 
                value={sectionNumber}
                sectionTranslation={this.state.sectionTranslation}
            />
            <Submit 
                questions={this.state.questions} 
                caseStudy={this.props.caseStudy} 
                disabled={disabledSubmit}
                display={disabledSubmit}
            />
        </div> : display = '';   
        this.state.start ? consent = <div className={styles.wrapper}>
            <h5 className={styles.title}>{this.state.sections[this.state.section].title}</h5>
            <h5 className={styles.subtitle}>{this.state.sections[this.state.section].text}</h5>
            <div className={styles.line}></div>
            <div className={styles.question}>{this.state.questions[this.state.question].question}</div>
            <ConsentButton handleNext={this.handleNext} consent="I consent"/>
        </div>  : consent = false;    
        consent ? display = consent : display = display
        return (
            <div>
                {display}
            </div>
        )
    }
}