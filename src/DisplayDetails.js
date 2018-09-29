import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class DisplayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Details: []
    };
  }

  render() {
    return (
      <div>
        {Object.keys(this.props).map((data, index) => {
          return (
            <List key={index}>
              <ListItem button>
                <ListItemText primary={`${data}:`} />
                <ListItemText primary={this.props[data]} />
              </ListItem>
            </List>
          );
        })}
      </div>
    );
  }
}

export default DisplayDetails;
