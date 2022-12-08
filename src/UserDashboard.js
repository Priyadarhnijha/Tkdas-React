import React,{Component} from 'react';
import './App.css';
import {Dropdown} from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button'
import{Starter} from './Starter';

export class UserDashboard extends Component{
    render(){
        const myStyle={
            backgroundImage:
           "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg')",
            height: '77vh',
            width: '200',
            //marginLeft:2,
            fontSize:'20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
        };
        return(
            <div style={myStyle}>
            <div style={{paddingTop:80}}>
            <div style={{color:'white', backgroundColor:'#0D476F', width:140, marginLeft:580}}>
            <h1>MENU</h1>
            </div>
        
        
            <a href='./Starter'><Button variant='primary' style={{backgroundColor:"#C70039",borderRadius:'20px', border:'3px solid black', width:140, height:100, padding:20, color:"white", marginLeft:100, marginRight:80, fontWeight:'bold', fontSize:18}}>Starter</Button></a>
            <Button variant='primary' style={{backgroundColor:"#C70039",borderRadius:'20px', border:'3px solid black', width:130, padding:15, marginRight:80, color:"white",width:140, height:100, fontWeight:'bold', fontSize:15}}>Main Course</Button>
            <Button variant='primary' style={{backgroundColor:"#C70039",borderRadius:'20px', border:'3px solid black', width:100, padding:20, marginRight:80, color:"white",width:140, height:100, fontWeight:'bold', fontSize:18}}>Sweets</Button>
            <Button variant='primary' style={{backgroundColor:"#C70039",borderRadius:'20px', border:'3px solid black', width:100, padding:20, marginRight:80, color:"white",width:140,height:100, fontWeight:'bold', fontSize:18}}>Drinks</Button>
            </div>
                <div className='LoginHome' style={{padding: "100px",marginLeft: "-50px"}}>
                
                 
                 </div>
            
            </div>
        );    
        
    } 
}