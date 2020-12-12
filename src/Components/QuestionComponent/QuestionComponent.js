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

import styles from './QuestionComponent.module.css';

export default class QuestionComponent extends Component {
    state = {
        questions: '',
        sections: '',
        question: 'q0',
        section: 's0',
        skip: false,
        sectionTranslation: '',
        start: false,
        previous: '',
        next: '',
        submit: ''
    }

    componentDidMount() {
        let questions = '';
        let sections = '';
        let message = '';
        let sectionTranslation = '';
        // let section = 's15';
        // let question = 'q70';
        // let start = false;
        let section = 's0';
        let question = 'q0';
        let start = true;
        let consent = '';
        let previous = '';
        let next = '';
        let submit = '';
        switch(this.props.hospital) {
            case 'FCRB':
                questions = fcrbQuestions['questions'];
                sections = fcrbQuestions['sections'];
                sectionTranslation = fcrbQuestions['sectionTranslation'];
                consent = fcrbQuestions['consent'];
                previous = fcrbQuestions['previous'];
                next = fcrbQuestions['next'];
                submit = fcrbQuestions['submit'];
                break;
            case 'USTAN':
                switch(this.props.type) {
                    case 'PATIENT':
                        questions = ustanPatientQuestions['questions'];
                        sections = ustanPatientQuestions['sections'];
                        sectionTranslation = ustanPatientQuestions['sectionTranslation'];
                        consent = ustanPatientQuestions['consent']
                        previous = ustanPatientQuestions['previous'];
                        next = ustanPatientQuestions['next'];
                        submit = ustanPatientQuestions['submit'];
                        break;
                    case 'MEDICAL_STAFF':
                        questions = ustanProfessionalQuestions['questions'];
                        sections = ustanProfessionalQuestions['sections'];
                        sectionTranslation = ustanProfessionalQuestions['sectionTranslation'];
                        consent = ustanProfessionalQuestions['consent']
                        previous = ustanProfessionalQuestions['previous'];
                        next = ustanProfessionalQuestions['next'];
                        submit = ustanProfessionalQuestions['submit'];
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
                        consent = zmcPatientQuestions['consent']
                        previous = zmcPatientQuestions['previous'];
                        next = zmcPatientQuestions['next'];
                        submit = zmcPatientQuestions['submit'];
                        break;
                    case 'MEDICAL_STAFF':
                        questions = zmcProfessionalQuestions['questions'];
                        sections = zmcProfessionalQuestions['sections'];
                        sectionTranslation = zmcProfessionalQuestions['sectionTranslation'];
                        consent = zmcProfessionalQuestions['consent']
                        previous = zmcProfessionalQuestions['previous'];
                        next = zmcProfessionalQuestions['next'];
                        submit = zmcProfessionalQuestions['submit'];
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
            start: start,
            section: section,
            question: question,
            consent: consent,
            previous: previous,
            next: next,
            submit: submit
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    countQuestions = () => {
        let count = -1, key;
        for(key in this.state.questions) {
            if(this.state.questions.hasOwnProperty(key)) {
                count++;
            }
        }
        return count
    }

    countSections = () => {
        let count = -1, key;
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
        let minQuestion = 0;
        if(this.props.hospital === 'FCRB') {
            minQuestion = 1;
        }
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > minQuestion) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            this.setState({
                question: question,
                showMessage: false
            })
            if(!this.checkSection(parseInt(questionNumber) - 1)) {
                let sectionNumber = this.state.section.substring(1);
                if(sectionNumber > minQuestion) {
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
            <h1 className={styles.title}>{this.state.sections[this.state.section].title}</h1>
            <h3 className={styles.subtitle}>{this.state.sections[this.state.section].text}</h3>
            <div className={styles.line}></div>
            <div className={styles.question} style={{fontSize: "1.4em"}}>{this.state.questions[this.state.question].question}</div>
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
                previous={this.state.previous}
                next={this.state.next}
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
                submit={this.state.submit}
            />
        </div> : display = '';   
        this.state.start ? consent = <div className={styles.wrapper}>
            <h1 className={styles.title}>{this.state.sections[this.state.section].title}</h1>
            <h3 className={styles.subtitle}>{this.state.sections[this.state.section].text}</h3>
            <div className={styles.line}></div>
            <div className={styles.question} style={{fontSize: "1.4em", whiteSpace: "pre-line"}}>{this.state.questions[this.state.question].question}</div>
            <ConsentButton handleNext={this.handleNext} consent={this.state.consent}/>
        </div>  : consent = false;    
        consent ? display = consent : display = display
        return (
            <div>
                {display}
            </div>
        )
    }
}