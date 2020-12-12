import React, { Component } from 'react';
import styles from './Navigation.module.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <button 
                    className={styles.button} 
                    onClick={this.props.handlePrevious} 
                    style={{fontSize: "1.4em"}}>{this.props.previous}
                </button>
                <button 
                    className={styles.button} 
                    disabled={this.props.disabled}
                    onClick={this.props.handleNext} 
                    style={{fontSize: "1.4em"}}>{this.props.next}
                </button>
            </div>
        )
    }
}