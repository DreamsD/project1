import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MyProducts from './components/MyProducts';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:   'Initial Title',
      name:   'Initial Name',
      checked: 'true'
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick  = this.onClick.bind(this);
    this.changeHeader  = this.changeHeader.bind(this);
    this.updateName  = this.updateName.bind(this);
    this.updateCheck  = this.updateCheck.bind(this);
  }
  
  changeHeader(){
    this.setState({
      title: 'Hellow',
      name: "Tsipi"
    });
  }
  updateCheck(){
    this.setState({
      checked: !this.state.checked
    });
   }
  updateName(event){
    this.setState({
      name: event.target.value
    });
   }
  onClick(){
    alert ("clicked");

  }
 
 
  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value)
  }
  render() {
    const {title} = this.state;
    const list =['item 1', 'item 2', 'item 3']
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        
       <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About} />
              <Route path="/products" component={MyProducts} />
              <Route component={Error} />
            </Switch>
          </div>
       </BrowserRouter>

      </div>
    );
  }
}

export default App;
