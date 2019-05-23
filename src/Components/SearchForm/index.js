import React, { Component } from 'react';
import styles from './search-form.module.css'

export default class SearchForm extends Component {

    state = {
        input: ''
    };

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    };

    render () {
        return (
            <form className={styles["search-form"]} onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.input}
                       autoComplete="off"
                       placeholder="Search images..."
                       onChange={this.handleChange}/>
            </form>
        )
    }
}