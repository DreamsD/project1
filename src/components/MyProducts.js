import React, { Component } from 'react';
import Productitem from './ProductItem';
import AddItem from './AddItem';

const products = [
    { 
        name: "mitsubishi",
        price: 1000
    },
    {
        name: "hyundai",
        price: 2000
    }
];
localStorage.setItem('products', JSON.stringify(products));

class MyProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
          };
          this.onDelete = this.onDelete.bind(this);
          this.onAdd = this.onAdd.bind(this);
          this.onEditSubmit = this.onEditSubmit.bind(this);
          
    }
    componentWillMount(){
      const products = this.getProducts();
      this.setState({
          products
      });
    }

    getProducts(){
        return this.state.products;
       
    }
    onDelete(name){
       const products = this.getProducts();

       const filteredProducts = products.filter(product =>{
           return product.name !== name;
       });
       console.log(filteredProducts);
       this.setState({
        products: filteredProducts
        });
    }
    onAdd(name,price){
        const products = this.getProducts();
        products.push({
            name,
            price
        });
        this.setState({
            products
            });
    }
    onEditSubmit(name,price, originalName){
         let products = this.getProducts();
         products = products.map(product => {
             if(product.name === originalName){
                product.name = name;
                product.price = price;
             }
           return product;
         });
         this.setState({
            products
            });
    }
   

    render() {
    const {title} = this.props;
    return (
      <div className="MyPRoducts">
        <h1>{title}</h1>     
        <AddItem 
         onAdd = {this.onAdd}
        />     
        {
            
            this.state.products.map(product =>{
                return(
                    <Productitem 
                        onEditSubmit = {this.onEditSubmit}
                        key={product.name}
                        {...product}
                        onDelete = {this.onDelete}
                    />
                );
            })
        }
      </div>
    );
  }
}

export default MyProducts;
