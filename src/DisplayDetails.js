import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

class DisplayDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      Details: []
    };
  }

  render() {
    return (
      <div>
        {this.props.Details.map((details, index) => {
          let data = Object.keys(details);
          return data.map((data, index) => {
            return (
              <List >
                <ListItem button>
                  <ListItemText primary={`${data}:`} />
                  <ListItemText primary={details[data]} />
                </ListItem>
              </List>
            );
            // <p key={index}>{details[data]}</p>
          });
        })}
      </div>
    );
  }
}

export default DisplayDetails;
