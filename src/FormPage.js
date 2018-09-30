import React, { Component } from "react";
import DisplayDetails from "./DisplayDetails";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {validateFields, submitButtonStatus} from './utils';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData:{
        name:'',
        email:'',
        phone:'',
        website:''
      },
      validation:{
        name:true,
        email:true,
        phone:true,
        website:true
      },
      showComponent: false,
      responseReturn: {},
      buttonStatus:false
    };
  }

  onSubmit = () => {
    axios
    .post("https://jsonplaceholder.typicode.com/posts", this.state.userData)
    .then(response => {
      this.setState({
        responseReturn: response.data,
        showComponent: true
      });
    })
    .catch(error => {
      console.log(error);
    });
  };

  onValueCahnge =(e,fieldName) =>{
    let userData= this.state.userData;
    userData[fieldName]=e.target.value;
    this.setState({userData:userData});
    let validation = this.state.validation;
    validation[fieldName] = validateFields(userData, fieldName);
    this.setState({validation:validation});
    this.setState({buttonStatus:submitButtonStatus(this.state.userData, this.state.validation)})

  }

  render() {

    return (
      <div >
        {this.state.showComponent ? (
          <DisplayDetails responseReturn={this.state.responseReturn} />
        ) : (
          <Form>
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              error={!this.state.validation['name']}
              onChange={(e)=>{this.onValueCahnge(e,'name')}}
              value={this.state.userData['name']}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              error={!this.state.validation['email']}
              onChange={(e)=>{this.onValueCahnge(e,'email')}}
              value={this.state.userData['email']}
            />
            <Form.Input
              fluid
              label="Phone"
              placeholder="Phone"
              error={!this.state.validation['phone']}
              onChange={(e)=>{this.onValueCahnge(e,'phone')}}
              value={this.state.userData['phone']}
            />
            <Form.Input
              fluid
              label="Webiste"
              placeholder="Website"
              error={!this.state.validation['website']}
              onChange={(e)=>{this.onValueCahnge(e,'website')}}
              value={this.state.userData['website']}
            />
            <Button type="submit" onClick={this.onSubmit} disabled={!this.state.buttonStatus}>
              Send
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default FormPage;
