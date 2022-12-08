import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './App.css';
import Starter1 from "./Images/Starter1.jpg";
import {AddPayModal} from './AddPayModal';
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
          <img src={Starter1} height= "250" width= "300" marginLeft="220"/>
          </div>

          <div>
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
    </div>

  )
    }
}
