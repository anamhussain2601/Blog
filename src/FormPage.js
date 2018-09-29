import React, { Component } from "react";
import DisplayDetails from "./DisplayDetails";
import axios from "axios";

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
      UserName: "",
      Email: "",
      Contact: "",
      Website: "",
      showComponent: false,
      error: false
    };
  }

  onSend = () => {
    const post = {
      name: this.state.UserName,
      email: this.state.Email,
      website: this.state.Website
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
    console.log("send");
    // this.setState({
    //   showComponent: true
    // });
  };
  handleNameInput = e => {
    this.setState({
      UserName: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      Email: e.target.value
    });
  };

  handleContact = e => {
    this.setState({
      Contact: e.target.value
    });
  };
  handleWebsite = e => {
    this.setState({
      Website: e.target.value
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
            onChange={this.handleNameInput}
            value={this.state.UserName}
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
            onChange={this.handleEmail}
            value={this.state.Email}
          />
        </div>
        <div>
          <TextField
            id="outlined-dense"
            label="Enter your 10 digit Number"
            margin="dense"
            variant="outlined"
            onChange={this.handleContact}
            value={this.state.Contact}
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
            onChange={this.handleWebsite}
            value={this.state.Website}
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
          <DisplayDetails
            UserName={this.state.UserName}
            Email={this.state.Email}
            Contact={this.state.Contact}
            Website={this.state.Website}
          />
        ) : null}
        {this.state.error ? <p  >OOPs..!! :( No internet connection</p> : null}
      </div>
    );
  }
}

export default FormPage;
