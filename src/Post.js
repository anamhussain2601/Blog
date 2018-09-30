import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react';
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      post_new:[],
      show:false,
      hasMore: true,
      head : 2,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          post: data,
          post_new:data.slice(0, 20),
          show:true
        });
      });
  }

  fetchMoreData =() =>{
      this.setState({
        post_new: [...this.state.post_new,...this.state.post.slice(this.state.head, this.state.head+20)],
        head:this.state.head+20,
      })
  }

  getShortTitle = (title)=>{
    if(title.length>15){
      return title.substring(0,15)+"...";
    }else{
      return title;
    }
  }

  render() {
    return (
      <InfiniteScroll
      dataLength={this.state.post_new.length}
      next={this.fetchMoreData}
      hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>  
       <Card.Group className="media" itemsPerRow={3}>{
          this.state.post_new.map((post, index)=>{
            return (
              <Card key={index}>
              <Image src={post.thumbnailUrl} />
              <Card.Content>
                <Card.Header>{this.getShortTitle(post.title)}</Card.Header>
                <Card.Description>{post.title}</Card.Description>
              </Card.Content>
            </Card>
            )
          })
       }</Card.Group>
      </InfiniteScroll>
    );
  }
}

export default Post;
