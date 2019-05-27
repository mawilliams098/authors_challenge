import React, { Component } from 'react';
import axios from 'axios';

export class GetTitle extends Component {

    // put constructor here 
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
        };
    }

    updateSearch = e => {
        this.setState({title: e.target.value});
    }
    
    getAuthor = e => {
        console.log(this.state.title)
        axios.get('/book/' + this.state.title).then(res => {
            console.log(res); 
            console.log('results from getAuthor: ', res.data.express);
            this.setState({author: res.data.express});
        });
        console.log(this.state.author)
        e.preventDefault(); 
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Book Search</h1>
                <form>
                    <input type = "text" placeholder="Input a title..."
                        value = {this.state.title} 
                        onChange = {this.updateSearch}/>
                    <button onClick={this.getAuthor}> Search </button>
                </form>
                <div>
                    Author : {this.state.author}
                </div>
            </div>
        )
    }
}

export default GetTitle
