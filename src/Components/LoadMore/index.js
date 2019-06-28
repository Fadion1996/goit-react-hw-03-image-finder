import React from 'react';
import styles from './load-more.module.css'

 const LoadMore = (props) => (

    <button className={styles.button} onClick={props.loadMore}>
        Load more
    </button>
)

export default LoadMore