import React, { Component } from 'react';
import Post from './Post';
import FormPage from './FormPage';
import { Route, Link } from 'react-router-dom';

class App extends Component {

  
  render() {
    return (
      <div style={{marginLeft:'20px', marginRight:'20px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:"20px"}}>
          <h3>A Big O1' Blog</h3>
          <Link to="/user">Create Post</Link>
        </div>
        <Route exact path="/" component={Post}/> 
        <Route exact path="/user" component={FormPage}/>
      </div>
    );
  }
}

export default App;
