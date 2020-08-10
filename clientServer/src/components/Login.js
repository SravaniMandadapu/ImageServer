import React from "react";
import { Component } from 'react'
import axios from "axios"
import {Redirect}  from "react-router-dom"
import {Button, FormGroup, FormControl, Form, Container,Row, Col} from 'react-bootstrap'
import NavbarComponent from "./NavbarComponent";






 class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email:" ",
              password:" ",
              token: " ",
              redirect: localStorage.getItem("userTokenTime")  ?  true :false,
              errmsg: ""

              
            }
            this.submitHandler = this.submitHandler.bind(this);
            this.emailChangeHandler = this.emailChangeHandler.bind(this);
            this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        }

     //Change Handler Methods
     //Email Change Handler
     emailChangeHandler= e=>{
         this.setState({
             email: e.target.value
         })
     }

     //Password Change Handler

     passwordChangeHandler= e=> {
         this.setState({
             password: e.target.value
         })
     }

     
     
     //submit Handler
     submitHandler = (e) =>{
         
         e.preventDefault()
          if (!(this.state.email === '' || this.state.password === '')
             
             && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
              
            
            axios.post("http://localhost:9000/login",
              {

                   email: this.state.email,
                   password: this.state.password
                }).then(res=>{
                    console.log(res)
                    this.setState({
                        token: res.data.accesstoken
                    })
                    
                    const data = {
                        token: this.state.token,
                        time: new Date().getTime(),
                        email:this.state.email
                      }
                      localStorage.setItem('userTokenTime', JSON.stringify(data));
                  this.setState({
                      redirect: true
                  })
                  
                })
                .catch(err=>{
                     this.setState({
                         errmsg: err.message
                         
                     })
                     }  
            )
                
            }else{
                alert("please enter valid details")
            }
        }
     
     
    render() {
        
      //Handling Success Login  
    if(this.state.redirect) return <Redirect to="/images" />

    //Handling Err messages
     if(this.state.errmsg) return <div>
         <NavbarComponent />
         <h3>{this.state.errmsg}</h3>
     </div>

        return (
            
            <Form onSubmit={this.submitHandler.bind(this)}>
                <NavbarComponent />
                <Container>
                   <h1>Login</h1>
                     <FormGroup>
                        <FormControl
                        type="email"
                        name="email"
                        placeholder="email address"
                        onChange={this.emailChangeHandler}
                        required />

                    </FormGroup>
                    <FormGroup>
                        <FormControl
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.passwordChangeHandler}
                        required />
                    </FormGroup>
                    <FormGroup>
                        <Button bsstyle="primary"  type="submit" onClick={this.submitHandler}>Login</Button>

                    </FormGroup>

                                   
                </Container>
            </Form>
        )
    }
}

export default Login
