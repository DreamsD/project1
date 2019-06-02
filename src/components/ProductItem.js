import React, { Component } from 'react';


class Productitem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false
          };
        this.deleteitem  = this.deleteitem.bind(this);
        this.onEdit  = this.onEdit.bind(this);
        this.onEditSubmit  = this.onEditSubmit.bind(this);
    }
    onEdit(){
        this.setState({
            isEdit: true
        });
    }
   deleteitem(){
    this.props.onDelete(this.props.name);
   }
   onEditSubmit(event){
    event.preventDefault();

    //this.props.name for the search in the original list of products if exists
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
    this.setState({
        isEdit: false
    });  
   }
    render() {
    const {name, price} = this.props;
    return (
        <div>
        {
            this.state.isEdit
            ? (
                <form onSubmit={this.onEditSubmit} >
                    <input placeholder="Name" defaultValue={name} ref={nameInput => this.nameInput = nameInput}/>
                    <input placeholder="Price" defaultValue={price} ref={priceInput => this.priceInput = priceInput} />
                    <button>SAVE</button>
            </form>
            )
            :(
                <div className="productItem">
                    <span>{name}</span> | 
                    <span>{price}</span> | 
                    <button onClick={this.onEdit}>Edit</button>
                    <button onClick={this.deleteitem}>DELETE</button>
                </div>
            )
        }
        </div>
      
    );
  }
}

export default Productitem;
