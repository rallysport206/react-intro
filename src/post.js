//bring in react and component instance from React.
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// define our component name app
class post extends Component {
  //render, what do we want to render?
  render() {
    // const listOfThings = ['kitties', 'puppies', 'beer', 'tacos'];
    // const now = Date();
    return (
      <div className="post">
        <h1>{this.props.title}</h1>
        <ul>
        Written by: {this.props.author}
        </ul>
        <p>{this.props.body}</p>
        <h2>Comments:</h2>
          {this.props.comments[0]}
      </div>
    );
  }
}
class Authors extends Component{
  render(){
    return(
      <div className="Authors">
        {this.props.allAuthors.map(authors =><li>authors</li>)}
        </div>
    );
  }
}

export default post;
//             ^changed class
