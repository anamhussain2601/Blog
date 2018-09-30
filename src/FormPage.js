import React, { Component } from "react";
import DisplayDetails from "./DisplayDetails";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

const validateEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
};

const validatePhone = phone => {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

const validateWebsite = website => {
  var res = website.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
};

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      Email: "",
      Contact: "",
      Website: "",
      showComponent: false,
      error: false,
      responseReturn: {},
      //validation flags
      isValidName: false,
      isValidEmail: false,
      isValidPhone: false,
      isValidWebSite: false
    };
  }

  validateFields = data => {
    console.log(data);
    let { name, email, phone, website } = data;
    if (!name) {
      this.setState({ isValidName: true });
    }
    email
      ? this.setState({ isValidEmail: !validateEmail(email) })
      : this.setState({ isValidEmail: true });
    phone
      ? this.setState({ isValidPhone: !validatePhone(phone) })
      : this.setState({ isValidPhone: true });
    website
      ? this.setState({ isValidWebSite: !validateWebsite(website) })
      : this.setState({ isValidWebSite: true });
  };

  onSend = () => {
    const post = {
      name: this.state.UserName,
      email: this.state.Email,
      phone: this.state.Contact,
      website: this.state.Website
    };
    this.validateFields(post);
    console.log(this.state.isValidEmail);
    !this.state.isValidEmail &&
      !this.state.isValidName &&
      !this.state.isValidPhone &&
      !this.state.isValidWebSite &&
      axios
        .post("https://jsonplaceholder.typicode.com/posts", post)
        .then(response => {
          this.setState({
            responseReturn: response.data,
            showComponent: true
          });
        })
        .catch(error => {
          this.setState({
            error: true
          });
        });
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
    console.log(this.state.isValidName);
    return (
      <div>
        {this.state.showComponent ? (
          <DisplayDetails responseReturn={this.state.responseReturn} />
        ) : (
          <Form>
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              error={this.state.isValidName}
              onChange={this.handleNameInput}
              value={this.state.UserName}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              error={this.state.isValidEmail}
              onChange={this.handleEmail}
              value={this.state.Email}
            />
            <Form.Input
              fluid
              label="Phone"
              placeholder="Phone"
              error={this.state.isValidPhone}
              onChange={this.handleContact}
              value={this.state.Contact}
            />
            <Form.Input
              fluid
              label="Webiste"
              placeholder="Website"
              error={this.state.isValidWebSite}
              onChange={this.handleWebsite}
              value={this.state.Website}
            />
            <Button type="submit" onClick={this.onSend}>
              Send
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default FormPage;
