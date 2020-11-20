import React, { Component } from 'react';
import styles from './ConsentButton.module.css';

export default class ConsentButton extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <button
                    className={styles.button}
                    onClick={this.props.handleNext}>{this.props.consent}
                </button>
            </div>
        )
    }
}