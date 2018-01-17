import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './post';
import registerServiceWorker from './registerServiceWorker';
let post = {
  title: 'Dinosaurs are awesome',
  body: 'Check out this body property!',
  comments: [
    'First!',
    'Great post',
    'Hire this author now!'
  ],
  allAuthors: [
    'Stealthy Stegosaurus',
    'Tiny trex',
    'Iguanadon Ivory'
  ]
}

ReactDOM.render(<Post title={post.title} allAuthors={post.allAuthors} body={post.body} comments={post.comments}/>,
  document.getElementById('root'));
registerServiceWorker();
