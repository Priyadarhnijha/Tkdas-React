import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {AddPayModal} from './AddPayModal';
import axios from 'axios';
export class Payment extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            pays:[], 
            addModalShow:false, 
            editModalShow:false, 
            testModalShow:false
        };

        this.refreshList = this.refreshList.bind(this);
    }

    

    refreshList(){
        // let { pays } = this.state
        // // fetch(process.env.REACT_APP_API+'/Payment/getPayment')
        // fetch('https://localhost:44364/api/Payment')

        //  //{mode : 'no-cors'})
        // .then(response=>response.json())
        // .then(data=>{
        //     this.setState({pays:data});
        //     console.log("data "+data);
        //     console.log("respone" + response)
        //     console.log("pay"+this.state.pays)
        // });

        axios.get('https://localhost:44364/api/Payment')
        .then(function (response) {
        // handle success
        // this.setState({pay:response})
        let pay = () =>{ this.setState({pays:response.data})}
        this.state.pays.push(response.data)
        console.log(this.state);
        
         })

    }

    componentDidMount(){
        this.refreshList();
    }

    // componentDidUpdate(){
    //     this.refreshList();
    //     console.log("didM")
    // }

    render(){

        const {pays, payid,name,cardno,expiry,cvv,address,paymentmode}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let testModalClose=()=>this.setState({testModalShow:false});
        

        const myStyle={
            backgroundImage:
            "url('https://images.moneycontrol.com/static-mcnews/2022/06/Indian-Digital-Payments_pic.jpg?impolicy=website&width=770&height=431')",
            height:'90vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
        };

        return(
            <div  className="mb-2 pageheading" style={myStyle}> 
            
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PaymentId</th>
                            <th>Name</th>
                            <th>CardNo</th>
                            <th>ExpiryDate</th>
                            <th>CvvNo</th>
                            <th>Address</th>
                            <th>PaymentMode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pay?.map(pay=>
                            <tr key={pay.PaymentId}>
                                <td>{pay.PaymentId}</td>
                                <td>{pay.Name}</td>
                                <td>{pay.CardNo}</td>
                                <td>{pay.ExpiryDate}</td>
                                <td>{pay.CvvNo}</td>
                                <td>{pay.Address}</td>
                                <td>{pay.PaymentMode}</td>
                            </tr>)}
                    </tbody>

                </Table>

                {/* <a href='./UserDashboard' style={{marginRight:'10px'}}>Back</a> */}

            </div>
        )
    } 
}


