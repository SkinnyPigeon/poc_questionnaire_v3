import React, { Component } from 'react';
import fcrbQuestions from '../pocQuestions/fcrb';
import ustanPatientQuestions from '../pocQuestions/ustanPatients';
import ustanProfessionalQuestions from '../pocQuestions/ustanProfessionals';
import zmcPatientQuestions from '../pocQuestions/zmcPatients';
import zmcProfessionalQuestions from '../pocQuestions/zmcProfessionals';
import Navigation from '../Navigation/Navigation';
import ProgressTracker from '../progressTracker/ProgressTracker';

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
            sections: sections
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

    handleNext = () => {
        let questionCount = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        if(questionNumber < questionCount) {
            let question = 'q' + (parseInt(questionNumber) + 1);
            this.setState({
                question: question
            })
        }
    }

    handlePrevious = () => {
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > 1) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            this.setState({
                question: question
            })
        }
    }
    render() {
        let display = '';
        let max = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        this.state.questions ? display = <div className={styles.wrapper}>
            <h3 className={styles.question}>{this.state.questions[this.state.question].question}</h3>
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