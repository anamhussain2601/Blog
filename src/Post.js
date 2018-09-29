import React, { Component } from "react";
import loremIpsum from "lorem-ipsum";


import { ReactProgressiveList } from "react-progressive-list";

const listHeight = 600;
const rowHeight = 5;
const rowWidth = 400;

const Spinner =()=>{
  return <div>Pilla...</div>
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);

    this.state = {
      post: [],
      show:false
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
          show:true
        });
      });
  }

  // renderRow({ index, key, style }) {
  //   console.log(index)
  //   console.log(this.state.post.length, "length");
  //   return (
  //     <div key={key}>
  //       <div >
  //         <img
  //           src={this.state.post[index].thumbnailUrl}
  //           style={{ height: "80px", width: "100px", borderBottom: "10px" }}
  //         />
  //       </div>
  //       <div>
  //         <div style={{fontSize:'18px'}}>{this.state.post[index].title}</div>
  //       </div>
  //       <div>
  //         <div style={{color:'#e6e6e6'}}>Clementina DuBuque</div>
  //       </div>
  //       <div>
  //         <div style={{color:'#cccccc'}}>{this.state.post[index].title}</div>
  //       </div>
  //     </div>
  //   );
  // }

  renderRow = index => {
    return   <div style={{fontSize:'18px'}}>{this.state.post[index].title}</div>;
  }

 

  render() {
    return (
      <ReactProgressiveList
        initialAmount={40}
        progressiveAmount={20}
        renderItem={this.renderRow}
        renderLoader={() => <Spinner />}
        rowCount={400}
        useWindowScroll
      />
    );
  }
}

export default Post;
