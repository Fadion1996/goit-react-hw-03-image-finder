import React from 'react';
import GalleryItem from './GalleryItem';
import styles from './gallery.module.css';
import shortid from 'shortid';

const Gallery = (props) => {

    const {photos, isOpen} = props;
    return (
        <ul className={styles.gallery}>
            {
                photos.map((photo) => (
                    <GalleryItem key={shortid.generate()} photo={photo} isOpen={isOpen}/>
                ))
            }
        </ul>
    )
}
export default Gallery