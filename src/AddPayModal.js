import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { useNavigate, Link, NavLink, Navigate,Route } from 'react-router-dom';

export class AddPayModal extends Component{
    constructor(props){
        super(props);
        let loggedIn = false
        this.state = {
            loggedIn
        }
        this.state={prods:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:44364/api/payment')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:44364/api/payment',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               PaymentId:null,
               Name:event.target.Name.value,
               CardNo:event.target.CardNo.value,
               ExpiryDate:event.target.Status.value,
               CvvNo:event.target.CvvNo.value,
               Address:event.target.Address.value,
               PaymentMode:event.target.PaymentMode.value
            })

        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            if(result=="Added Successfully")
                {
                  this.setState({loggedIn: true});
                }
        },
        (error)=>{
            alert('Failed');
        })
    }


    render(){
        if(this.state.loggedIn)
        {
            return <Navigate to="/Payment"/>
        }
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Payment
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>

            

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="PaymentId">
                        <Form.Label>PaymentId</Form.Label>
                        <Form.Control type="text" name="PaymentId" required 
                        disabled
                        placeholder="PaymentId"
                        defaultValue={this.props.id}
                        />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <br/>
                        <Form.Control type="text" name="Name"
                        required
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="CardNo">
                        <Form.Label>CardNo</Form.Label>
                        <br/>
                        <Form.Control type="text" name="CardNo"
                        required
                        placeholder="CardNo"/>
                    </Form.Group>

                    <Form.Group controlId="ExpiryDate">
                        <Form.Label>ExpiryDate</Form.Label>
                        <br/>
                        <Form.Control type="text" name="ExpiryDate"
                        required
                        placeholder="ExpiryDate"/>
                    </Form.Group>

                    <Form.Group controlId="CvvNo">
                        <Form.Label>CvvNo</Form.Label>
                        <Form.Control  type="text" name="CvvNo"
                        required
                        placeholder="CvvNo"/>
                    </Form.Group>

                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  type="text" name="Address"
                        required
                        placeholder="Address"/>
                    </Form.Group>

                    <Form.Group controlId="PaymentMode">
                        <Form.Label>PaymentMode</Form.Label>
                        <br/>
                        <select name='PaymentMode' value={this.state.value} onChange={this.handleChange} >  
                            <option value="Online">Online</option>   
                        </select>                        
                    </Form.Group>
                        

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Payment
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}