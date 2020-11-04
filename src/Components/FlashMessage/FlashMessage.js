import React, { Component } from 'react';

export default class FlashMessage extends Component {

    display = () => {
        let display = '';
        if(this.props.display) {
            display = <div>
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