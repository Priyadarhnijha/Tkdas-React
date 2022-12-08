import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

export class Navigation extends Component{
    render(){
        return(

            <Navbar bg="light" expand="lg">
            <Nav>
                <div style={{backgroundColor:"#FC702B ", padding:5}}>
                <Marquee speed={70}>
                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' , textDecoration:'none' , fontSize:25, marginRight:100}}>
                    GOOD FOOD GOOD LIFE
                </NavLink>
                </Marquee>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, marginLeft:500, padding:2}} to="/">
                    Home
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, padding:2}} to="/">
                    Order
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20, padding:2}} to="/">
                    Cart
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20,marginLeft:10, padding:2}} to="/About">
                    About Us
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' , textDecoration:'none' , fontSize:20, marginLeft:10, padding:2}} to="/FAQs">
                    FAQs
                </NavLink>

                <NavLink className="d-inline p-2 bg-light text-black" style={{color: "white", fontWeight: 'bold' ,textDecoration:'none' , fontSize:20,marginLeft:10, padding:2}} to="/Payment">
                    Payment Details
                </NavLink>

                </div>
           
            </Nav>
            { <a href="/"  style={{ marginLeft:1200, color:"Red", fontWeight:'bold', fontSize:15}} >Logout</a> }
        </Navbar>
        
        
        );
    }
}
