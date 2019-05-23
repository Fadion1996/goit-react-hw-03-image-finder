import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import styles from './gallery.module.css';
import shortid from 'shortid';

export default class Gallery extends Component {

    render () {
        const {photos, isOpen} = this.props;
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
}