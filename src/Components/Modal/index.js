import React, { Component } from 'react';
import styles from './modal.module.css'

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
      }

    escFunction = (event) => {
        if(event.keyCode === 27) {
            this.props.isOpen(true);
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener("click", this.handleOutsideClick, false);

    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener("click", this.handleOutsideClick, false);
    }

    handleOutsideClick(e) {
        const { isOpen } = this.props;

        if (this.modal) {
          if (!this.modal.contains(e.target)) {
            isOpen();
            document.removeEventListener("click", this.handleOutsideClick, false);
          }
        }
      }

    render () {
        const {image, tags} = this.props;

        return (
            <div className={styles.overlay}>
                <div className={styles.modal} ref={node => (this.modal = node)}>
                    <img src={image} alt={tags}/>
                </div>
            </div>
        )
    }
}