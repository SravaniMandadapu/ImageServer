import React, { Component } from 'react'
import axios from "axios"
import {Button, FormGroup, FormControl, Form, Container,Row, Col} from 'react-bootstrap'

class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             FirstName:"",
             MiddleName:"",
             LastName:"",
             email:"",
             password:""

        }
        this.submitHandler=this.submitHandler.bind(this)
        this.firstnameChangeHandler=this.firstnameChangeHandler.bind(this)
        this.middlenameChangeHandler=this.middlenameChangeHandler.bind(this)
        this.lastnameChangeHandler=this.lastnameChangeHandler.bind(this)
        this.emailChangeHandler=this.emailChangeHandler.bind(this)
        this.passwordChangeHandler=this.passwordChangeHandler.bind(this)
    }

    //Change Handlers
    //Firstname handler
     firstnameChangeHandler=e=>{
         this.setState({
             FirstName: e.target.value
         })
     }
     //Middlename handler
     middlenameChangeHandler=e=>{
        this.setState({
            MiddleName: e.target.value
        })
    }
    //Firstname handler
    lastnameChangeHandler=e=>{
        this.setState({
            LastName: e.target.value
        })
    }

    //Email Change Handler
    emailChangeHandler=e=>{
        this.setState({
            email: e.target.value
        })
    }

    //Password Change Handler
    passwordChangeHandler=e=>{
        this.setState({
            password:e.target.value
        })
    }
    //submit Handler
    submitHandler=e=>{
        e.preventDefault();
            
        if (!(this.state.FirstName === '' || this.state.LastName === '' || this.state.email === '' || this.state.password === '')
        && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
                axios.post('http://localhost:9000/SignUp', {
                FirstName: this.state.FirstName,
                Middlename:this.state.Middlename,
                LastName: this.state.LastName,
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                console.log(res)
             })
            .catch(err => {
                console.log(err);
            });
        } else {
            alert('Please enter valid details');
        }
    }


    

    

    render() {
        return (
           <Form onSubmit={this.submitHandler.bind(this)}>
                <Container>
                   <h1>SignUp</h1> 
                <FormGroup> 
                    <FormControl 
                        id="first-name"
                        type= "text"
                        name="FirstName"
                        placeholder="Firstname"
                        onChange={this.firstnameChangeHandler}
                        required 
                    />
                </FormGroup> 
                <FormGroup> 
                   <FormControl
                        id="middle-name"
                        type="text"
                        name="MiddleName"
                        placeholder="Middlename (Optional)"
                        onChange={this.middlenameChangeHandler}
                   />
                </FormGroup> 
                <FormGroup> 
                   <FormControl 
                        id="last-name"
                        type="text"
                        name="LastName"
                        placeholder="Lastname"
                        onChange={this.lastnameChangeHandler}
                        required />
                </FormGroup> 
                <FormGroup>  
                   <FormControl
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email address"
                        onChange={this.emailChangeHandler}
                        required
                    />
                </FormGroup> 
                <FormGroup>   
                   <FormControl
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.passwordChangeHandler}
                        required 
                    />
                </FormGroup> 
                <FormGroup>   
               
                    <Button type="submit" onClick={this.submitHandler}>Register</Button>
                </FormGroup>
                </Container>
            </Form>
        )
    }
}

export default SignUp

