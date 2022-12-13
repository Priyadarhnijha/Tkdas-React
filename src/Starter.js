import React,{Component} from 'react';
import {NavLink, redirect} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './App.css';
import Starter1 from "./Images/Starter1.jpg";
import Starter2 from "./Images/Starter2.jpg";
import {AddPayModal} from './AddPayment';
import Button from 'react-bootstrap/Button'

export class Starter extends Component{
  constructor(props){
    super(props);
    this.state={pays:[], addModalShow:false, testModalShow:false}
}

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
          // let testModalClose=()=>this.setState({testModalShow:false});
          <div>
          <div style={{marginRight:700, marginTop:20}}>
          <img src={Starter1} height= "150" width= "200" marginLeft="220"/>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Pakode </h3>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Price Rs.160/- </h3>

          <img src={Starter2} height= "150" width= "200" marginRight="400"/>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Paneer Tikka </h3>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Price Rs.240/- </h3>

          </div>

          {/* <div>
          <div style={{marginLeft:750, marginTop:20}}>
          <img src={Starter2} height= "150" width= "200" marginLeft=""/>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Paneer Tikka </h3>
          <h3 style={{color:"Red", fontWeight:'bold', fontSize:15}}>Price Rs.250/- </h3>
          </div>
         </div>
          <div> */}
            
          {/* <ButtonToolbar>

              <Button className="mr-2" variant="info"
              onClick={()=>this.setState({testModalShow:true,
                payid:pay.Id,pname:prod.Name,cardno:pay.cardno,expirydate:pay.ExpiryDate,
                cvvno:pay.CvvNo,address:pay.Address,paymentmode:pay.PaymentMode
                })}>

              Add Payment
          </Button>
          
          <AddOrderModal show={this.state.testModalShow}
          onHide={testModalClose}
          id={payid}
          name={pname}
          cardno={cardno}
          expirydate={expirydate}
          cvvno={cvvno}
          address={address}
          paymentmode={paymentmode}/>
    </ButtonToolbar> */}
    
    </div>

  )
    }
}
