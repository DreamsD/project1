import React, { Component } from 'react';
import axios from 'axios';
import PersonItem from './PersonItem'
import { Grid } from 'react-bootstrap';



export default class PersonList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            persons:[],
        }
        this.filterList = this.filterList.bind(this)
    }
   
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }
    componentWillMount(){
      this.setState({persons: this.state.persons})
    }

    filterList(event){
      var updatedList = this.state.persons;
      updatedList = updatedList.filter(function(person){
        return person.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({persons: updatedList});
    }

    render() {
    return (
      <div className="PersonList">
        <h1>Persons List</h1>     
        <Grid>
            <form>
            <fieldset className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
            </fieldset>
            </form>
            <ul>
            { this.state.persons.map(person => <PersonItem key={person.id} value={person}/>) } 
             </ul>
        </Grid>
            
      </div>
    );
  }
}
//            { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)} 

