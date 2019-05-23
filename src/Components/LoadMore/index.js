import React, { Component } from 'react';
import styles from './load-more.module.css'

export default class LoadMore extends Component {

    render () {
        return (
            <button className={styles.button} onClick={this.props.loadMore}>
                Load more
            </button>
        )
    }
}