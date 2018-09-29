import React, { Component } from "react";
import loremIpsum from "lorem-ipsum";

import { List } from "react-virtualized";

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class Post extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          post: data
        });
      });
  }

  renderRow({ index, key, style }) {
    console.log(this.state.post.length, "length");
    return (
      <div key={key}>
        <div >
          <img
            src={this.state.post[index].thumbnailUrl}
            style={{ height: "80px", width: "100px", borderBottom: "10px" }}
          />
        </div>
        <div>
          <div style={{fontSize:'18px'}}>{this.state.post[index].title}</div>
        </div>
        <div>
          <div style={{color:'#e6e6e6'}}>Clementina DuBuque</div>
        </div>
        <div>
          <div style={{color:'#cccccc'}}>{this.state.post[index].title}</div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state.post);
    return (
      <div>
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={this.renderRow}
          rowCount={this.state.post.length}
          overscanRowCount={3}
        />
      </div>
    );
  }
}

export default Post;
