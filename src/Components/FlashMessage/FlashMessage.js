import React, { Component } from 'react';
import styles from './FlashMessage.module.css';

export default class FlashMessage extends Component {

    display = () => {
        let display = '';
        if(this.props.display) {
            display = <div className={styles.show}>
                {this.props.message}
            </div>
        }
        return display
    }

    render() {
        console.log("FLASH MESSAGE", this.props)
        let display = this.display()
        return (
            <div>
                {display}
            </div>
        )
    }
}