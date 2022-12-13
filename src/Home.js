import React,{Component} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './App.css';
//import Product from "./Products.js";
import {Dropdown} from 'react-bootstrap';
//import home from "./Images/1.png";

export class Home extends Component{
    render(){
        const myStyle={
            backgroundImage:
            "url('')",
            height: '77vh',
            width: '208vh',
            marginLeft:2,
            fontSize:'20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
        };
        return(
          
            <div style={myStyle}>
                
                <div className='LoginHome' style={{padding: "100px",marginLeft: "-50px"}}>
                
                 <div style={{backgroundColor: "#FFE4C4",fontWeight: 'bold',color:'black' , width:300 , marginLeft:550 ,fontSize:50}}>
                     Login
                 </div>
                
                 <div >
                    <div style={{padding:10}}></div>
                     <a style={{color:'white'}} href="/Admin/AdminLogin"><p style={{backgroundColor: 'white',fontWeight: 'bold',color:'black', width:200 , marginLeft:600}}>Admin Login</p></a>
                     <div style={{padding:10}}></div>
                     <a style={{color:'white'}} href="/Login" ><p style={{backgroundColor: 'white',fontWeight: 'bold', color:'black' , width:200 , marginLeft:600}}>User Login</p></a>
                    
                 
                 </div>
                 </div>
            
            </div>
        
        );    
        
    } 
}