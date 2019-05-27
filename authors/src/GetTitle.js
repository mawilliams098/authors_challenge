import React, { Component } from 'react'

export class GetTitle extends Component {

    // put constructor here 

    // put logic here to request backend... 
    // some kind of function like ... 
    // this is requesting information from the server.js file
    getAuthor = (title) => {
        axios.get('localhost:3000/book?title='+title)
    }

    render() {

        // somebody hits a button that accesses search 
        // getAuthor(whatever they typed in).then(
            //display it on the webpage)

        return (
            <div>
                
            </div>
        )
    }
}

export default GetTitle
