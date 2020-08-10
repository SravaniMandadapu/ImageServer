import React, { Component } from 'react'
import axios from 'axios'
import NavbarComponent from "./NavbarComponent"
import  {Redirect} from "react-router-dom"
import {Button, FormGroup, FormControl, Form, Container,Row, Col} from 'react-bootstrap'

class Upload extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Picture:"",
             errMsg:"",
             resMsg: "",
             errSize:""
           
        }
        this.imageURLhandler=this.imageURLhandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
 maxfile=(e)=>{
    let  files = e.target.files[0]
    if(files.length >1)
    return false;
    else{
        
        if(files.size>5000000){
            this.setState({
                errSize: "File is too large, it should be less than 5MB"
            })
            return false
        }
        return true;
    }

 }
    
 
 imageURLhandler=e=>{
   const files=e.target.files[0]
 if(this.maxfile(e)){
        this.setState({
            Picture: e.target.files[0],
            
        })
    }}

    submitHandler=e=>{
        e.preventDefault()
        
        const data= new FormData()
        data.append("Picture",this.state.Picture)


        if(!(URL===" ")){
            axios.post("http://localhost:9000/images/upload",data,{
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
                }
              }).then(res=>{
                this.setState({
                    resMsg: "Image Uploaded Sucessfully"
                })
            }
                
            ).catch(err=>{
                this.setState({
                    errMsg: err.message
                })
              
            }
            )
        }else {
            alert('Please enter valid details');
        }


        
    }
    
    render() {
    if(!(localStorage.getItem("userTokenTime")))  return  <Redirect to="/login" />
    //Handling error messages
     if(this.state.errMsg) return <div>
         <NavbarComponent />
         <h3>{this.state.errMsg}</h3>
         </div>
         
         
   //Handling success response messages
    if(this.state.resMsg) return <div>
    <NavbarComponent />
    <h3>{this.state.resMsg}</h3>
    </div>
   
//Handling large files 

if(this.state.errSize) return <div>
    <NavbarComponent />
    <h3>{this.state.errSize}</h3>
</div>




    //Loading UpLoad form
        return (
            <Form onSubmit={this.submitHandler.bind(this)} encType="multipart/form-data">
                <NavbarComponent />
              <Container>
                  <h1>Upload</h1>
                  
              <FormGroup>
                  <FormControl 
                    type="file"
                    name="Picture"
                    accept="image/*"
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

