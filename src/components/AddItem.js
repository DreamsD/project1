import React, { Component } from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);
        
          this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();     
        
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        //To empty The input values after submition
        this.nameInput.value = "";
        this.priceInput.value = "";
    }
  
    render() {
        return (
        <div className="addItem">
            <h3> Add Product </h3>
            <form onSubmit={this.onSubmit} >
                    <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                    <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
                    <button>Add</button>
            </form>
            <hr />
            </div>
        );
  }
}

export default AddItem;
