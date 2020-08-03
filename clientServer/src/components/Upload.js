import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import {Button, FormGroup, FormControl, Form, Container,Row, Col} from 'react-bootstrap'

class Upload extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             URL:""
        }
        this.imageURLhandler=this.imageURLhandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }

    imageURLhandler=e=>{
        this.setState({
            URL: e.target.value
        })
    }

    submitHandler=e=>{
        e.preventDefault()
        if(!(URL===" ")){
            axios.post("http://localhost:9000/Upload",{
                URL: this.state.URL
            },{
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
                }
              }).then(res=>
                toast.success("Image Uploaded Successfully")
                
            ).catch(err=>
               toast.error(`Upload failed : ${err.statusText}`)
            )
        }else {
            alert('Please enter valid details');
        }


        
    }
    
    render() {
        return (
            <Form onSubmit={this.submitHandler.bind(this)}>
              <Container>
                  <h1>Upload</h1>
              <FormGroup>
                  <FormControl 
                    type="text"
                    name="URL"
                    placeholder="Image URL"
                    onChange={this.imageURLhandler}
                     required/>
              </FormGroup>
              <FormGroup>
                  <Button type="submit" onClick={this.submitHandler}>Upload</Button>
              </FormGroup>
              </Container>
        </Form>
        )
    }
}

export default Upload

