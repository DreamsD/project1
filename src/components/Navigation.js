import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Grid, Row, Nav, NavItem,ButtonToolbar, Button } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import MyProducts from './MyProducts'

function handleSelect(selectedKey) {
  //  alert(`selected ${selectedKey}`);
  }
  

const Navigation = () =>{
    return(
        <ButtonToolbar>
            {/* <Button bsStyle="primary" to="/" >Home</Button>
            <Button bsStyle="primary" to="/about" >About</Button>
            <Button bsStyle="primary" to="/products" >MyProdcuts</Button>
            <Button bsStyle="primary" to="/users" >Users</Button> */}
             <Grid>
                <Row>
                    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
                        <NavItem eventKey={Home} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={About} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={MyProducts} href="/products">
                            Products
                        </NavItem>
                    </Nav>
                </Row>
            </Grid> 
        </ButtonToolbar>
    );
};
export default Navigation;