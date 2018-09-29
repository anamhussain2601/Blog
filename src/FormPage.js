import React, { Component } from "react";
import DisplayDetails from "./DisplayDetails";
import Loader  from './Loader';

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserDetails: [
        {
          email: "abc@abc.com",
          contact: "9999999999",
          website: "www.abc.com"
        }
      ],
      showComponent: false 
    };
  }

  onSend = () => {
    console.log("send");
    this.setState({
      showComponent: true
    });

  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <TextField
            id="outlined-dense"
            label="Enter your name"
            margin="dense"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="abc@abc.com"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-dense"
            label="Enter your 10 digit Number"
            margin="dense"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="www.abc.com"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "210px" }}
            onClick={this.onSend}
          >
            SEND
          </Button>
        </div>
        {this.state.showComponent ? (
          <DisplayDetails Details={this.state.UserDetails} />
        ) : null}
      </div>
    );
  }
}

export default FormPage;
