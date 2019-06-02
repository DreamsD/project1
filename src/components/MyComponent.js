import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propsTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
};    
const defaultProps = {
    name: "Default Name",    
    title: "Default Title"
};   

class MyComponent extends Component{

    // componentWillMount(){
    //     console.log("component Will Mount");
    // }
    // componentWillUpdate(nextProps,nextState){
    //     console.log("this.props:",this.props, 
    //     "this.state:",this.state,"nextProps:", nextProps,"nextState:",nextState);
    // }

    componentDidUpdate(prevProps,prevState){
        console.log("this.props:",this.props, 
        "this.state:",this.state,"prevProps:", prevProps,"prevState:",prevState);
    }

    // componentDidMount(){
    //     console.log("component Did Mount");
    // }

  render() {
    const {title, name, onClick} = this.props;
    return (
      <div className="MyComponent">
        <h1>Title: {title}</h1>          
        <p>Name: {name}</p>  
        <div onClick={onClick}>Click Me!</div>
      </div>
    );
  }
}
MyComponent.defaultProps = defaultProps;
MyComponent.protoTypes = propsTypes;
export default MyComponent;
