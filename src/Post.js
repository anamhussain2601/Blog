import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";
import { Card } from 'semantic-ui-react';
import InfiniteScroll from "react-infinite-scroll-component"
import {Divider} from '@material-ui/core'

const listHeight = 600;
const rowHeight = 5;
const rowWidth = 800;


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      post_new:[],
      show:false,
      hasMore: true,
      head : 21,
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
    console.log(this.state.head);
      this.setState({
        post_new: [...this.state.post_new,...this.state.post.slice(this.state.head, this.state.head+20)],
        head:this.state.head+20,
      })
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
        </p>}>
        {
          this.state.post_new.map((post, index)=>{
            return <div key={index}>{post.text}</div>
          })
        }
    </InfiniteScroll>
    );
  }
}

export default Post;
