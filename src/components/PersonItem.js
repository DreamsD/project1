import React, { Component } from 'react';

export default class PersonItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            person: props.value
        }
    }
   
   
    render() {
    return (
      <div className="PersonItem" key={this.state.person.id}> 
      <div className="PersonName"><strong>{this.state.person.name}</strong></div>
      <div className="PersonUserName">{this.state.person.username}</div>
      <div className="PersonEmail">{this.state.person.email}</div>
      </div>
    );
  }
}
