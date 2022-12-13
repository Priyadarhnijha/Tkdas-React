import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Cart } from './Cart';

export class Navigation extends Component{
    render(){
        return(

            <Navbar bg="light" expand="lg">
            <Nav>
                <div style={{backgroundColor:"#581845 ", padding:5, color : "white"}}>
                <Marquee speed={70}>
                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' , textDecoration:'none' , fontSize:25, marginRight:100}}>
                    GOOD FOOD GOOD LIFE
                </NavLink>
                </Marquee>

                <div>
                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, marginLeft:50, padding:5}} to="/">
                    Home
                </NavLink>

                {/* <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, padding:5}} to="/">
                    Order
                </NavLink> */}

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, padding:5}} to="/Cart">
                    Cart
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20,marginLeft:10,  padding:5}} to="/About">
                    About Us
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' , textDecoration:'none' , fontSize:20, marginLeft:10, padding:5}} to="/FAQs">
                    FAQs
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20,marginLeft:10, marginRight:50, padding:5}} to="/Payment">
                    Payment Details
                </NavLink>
                </div>
                </div>
           
            </Nav>
            { <a href="/"  style={{ marginLeft:1200, color:"Red", fontWeight:'bold', fontSize:15}} >Logout</a> }
        </Navbar>
        
        
        );
    }
}
