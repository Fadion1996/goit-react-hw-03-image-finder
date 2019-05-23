import React, {Component} from 'react';
import {Gallery, Modal, SearchForm, LoadMore} from './Components'
import axios from 'axios';

import './App.css'

const key = '12551544-5d6e1dc51f03a64bc157d63ba';

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

    render () {
        return (
            <div className="App">
                <SearchForm onSubmit={this.onSubmit}/>
                <Gallery photos={this.state.photos} isOpen={this.onModal}/>
                {(this.state.photos) && <LoadMore loadMore={()=> this.onSubmit('', true)}/>}
                {(this.state.isOpen) && <Modal image={this.state.image} tags={this.state.tag} isOpen={this.onModal}/>}
            </div>
        );
    }

    onModal = (img = '', tag = '') => {
        this.setState({
            isOpen: !this.state.isOpen,
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
        axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${page}&per_page=12&key=${key}`)
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    response.data.hits.map((item) => {
                        this.setState({
                            photos: this.state.photos.concat(item),
                        });
                        return null
                    });
                    this.setState({
                        page: this.state.page + 1
                    });
                }

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }
}

export default App;
