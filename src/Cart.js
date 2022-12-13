import axios from 'axios';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';

export class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carts: [],
            addModalShow: false,
            editModalShow: false,
            testModalShow: false
        };
    }

    async refreshList() {
        const value = await axios.get('https://localhost:44364/api/Cart');
        this.setState({ carts: value.data }, () =>
            console.log(this.state.carts));
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        let testModalClose=()=>this.setState({testModalShow:false});

        const myStyle = {
            backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWHakBhB5SWm04gr6U7gM9XLDXOWe4Hl1mQ&usqp=CAU')",
            height: '70vh',
            width: '180',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };

        return (
            <div className="mb-2 pageheading" style={myStyle}>

                <Table className="mt-4" striped bordered hover size="sm" border="1px solid black" style={{ width: "100%", backgroundColor: "#E5E9DE"}}>
                    <tr>
                        <th>CartId</th>
                        <th>ProductId</th>
                        <th>Quantity</th>
                        <th>UserId</th>
                        <th>Price</th>
                    </tr>
                    {this.state.carts.map(cart =>
                        <tr key={cart.cartId}>
                            <td>{cart.cartId}</td>
                            <td>{cart.productId}</td>
                            <td>{cart.quantity}</td>
                            <td>{cart.userId}</td>
                            <td>{cart.price}</td>
                            <td>
                            <a href='./AddPayment'><Button variant='primary' style={{backgroundColor:"#581845", borderRadius:'20px', border:'3px solid black', width:100, paddingBottom: "5px", height:20, padding:20, color:"white", marginLeft:100, marginRight:80, fontWeight:'bold', fontSize:18}}>Buy</Button></a>
                            </td>
                        </tr>)}
                </Table>

            </div>
        )
    }
}