import React, { Component } from 'react';
import styles from './FlashMessage.module.css';

export default class FlashMessage extends Component {


    componentDidUpdate() {
        const message = document.getElementById("message");
        message.style.display = "block";
        message.addEventListener("animationend", (ev) => {
        if (ev.type === "animationend") {
            message.style.display = "none";
        }
        }, false);
    }

    display = () => {
        let display = <div id="message"></div>;
        if(this.props.display) {
            display = <div className={styles.show} id="message">
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
                <b>{display}</b>
            </div>
        )
    }
}