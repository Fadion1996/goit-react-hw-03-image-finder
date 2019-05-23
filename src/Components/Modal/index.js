import React, { Component } from 'react';
import styles from './modal.module.css'

export default class Modal extends Component {

    escFunction = (event) => {
        if(event.keyCode === 27) {
            this.props.isOpen();
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render () {
        const {image, tags, isOpen} = this.props;

        return (
            <div className={styles.overlay} onClick={() => isOpen()}>
                <div className={styles.modal}>
                    <img src={image} alt={tags} />
                </div>
            </div>
        )
    }
}