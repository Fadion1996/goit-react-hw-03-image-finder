import React, { Component } from 'react';
import styles from './gallery-item.module.css'
import { ZoomInOutlined, CloudDownload, Comment, Visibility, ThumbUp } from '@material-ui/icons';

export default class GalleryItem extends Component {

    render () {
        const {webformatURL, tags, favorites, views, comments, downloads, largeImageURL} = this.props.photo;
        return (
            <li className={styles["gallery-item"]}>
                <img src={webformatURL} alt={tags}/>

                <div className={styles.stats}>
                    <p className={styles["stats-item"]}>
                        <ThumbUp/>
                        {favorites}
                    </p>
                    <p className={styles["stats-item"]}>
                        <Visibility/>
                        {views}
                    </p>
                    <p className={styles["stats-item"]}>
                        <Comment/>
                        {comments}
                    </p>
                    <p className={styles["stats-item"]}>
                        <CloudDownload/>
                        {downloads}
                    </p>
                </div>
                <button type="button"
                        className={styles["fullscreen-button"]}
                        onClick={()=>this.props.isOpen(largeImageURL, tags)}>
                    <ZoomInOutlined/>
                </button>
            </li>
        )
    }
}