import React from 'react';
import styles from './gallery-item.module.css'
import { ZoomInOutlined, CloudDownload, Comment, Visibility, ThumbUp } from '@material-ui/icons';

const GalleryItem = (props) => {

    const {webformatURL, tags, favorites, views, comments, downloads, largeImageURL} = props.photo;
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
                    onClick={()=>props.isOpen(largeImageURL, tags, true)}>
                <ZoomInOutlined/>
            </button>
        </li>
    )
}

export default GalleryItem