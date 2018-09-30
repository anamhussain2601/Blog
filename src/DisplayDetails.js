import React, { Component } from "react";
import { Image, List, Header } from 'semantic-ui-react'

class DisplayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Details: []
    };
  }

  render() {
    let {name , email, website, phone} =this.props.responseReturn;
    return (
    <List>
      <Header as='h2'>{name}</Header> 
      <List.Item>
        <List.Icon name='mail' />
        <List.Content>{email}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='phone' />
        <List.Content>{phone}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>{website}</List.Content>
      </List.Item>
    </List>
    );
  }
}

export default DisplayDetails;
