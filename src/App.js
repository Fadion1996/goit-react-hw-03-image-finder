import React, {Component} from 'react';
import {Gallery, Modal, SearchForm, LoadMore} from './Components'
import axios from 'axios';

import './App.css'

const key = '12551544-5d6e1dc51f03a64bc157d63ba';
const imageUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

class App extends Component{
    state = {
        photos: [],
        searchValue: '',
        page: 1,
        isOpen: false,
        image: '',
        tag: '',
    };

    componentDidMount() {
        this.onSubmit();
    }

    onModal = (img = '', tag = '', isOpen = false) => {
        this.setState({
            isOpen: isOpen,
            image: img,
            tag: tag,
        });
    };

    onSubmit = (value = '', load = false) => {
        if (!load) {
            this.setState({
                photos: [],
                page: 1,
                searchValue: value
            });
        }
        const {page, searchValue} = this.state;
        axios.get(imageUrl + `${(!load) ? value : searchValue}&page=${(!load) ? 1 : page}&per_page=12&key=${key}`)
            .then((response) => {
                if (response.status === 200) {
                    response.data.hits.map((item) => {
                        return this.setState(state => {
                            const photos = [...state.photos, item];
                            return {photos}
                        });
                    });
                    this.setState({
                        page: this.state.page + 1
                    });
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }

    render () {
        const {photos, isOpen, image, tag} = this.state;
        return (
            <div className="App">
                <SearchForm onSubmit={this.onSubmit}/>
                <Gallery photos={photos} isOpen={this.onModal}/>
                {photos && <LoadMore loadMore={()=> this.onSubmit('', true)}/>}
                {isOpen && <Modal image={image} tags={tag} isOpen={this.onModal}/>}
            </div>
        );
    }
}

export default App;
