import React, { Component } from 'react'
import axios from "axios"
import {Button, FormGroup, FormControl, Image, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images: [],
             isLoaded:false
        }
    }

   componentDidMount (){
       axios.get("http://localhost:9000/images",{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
            }
          })
         
       
         .catch(err=>{
           console.log(err)
        })
        .then(res=>{
           console.log(res)            
            this.setState({ 
               images: res.data,
               isLoaded: true
           },()=>console.log(this.state))
         })
    }
    
    render() {
        const {images} =this.state
        const imgstyle={
          maxWidth: 300,
          maxHeight: 300,
          border:20,
          margin:10,
          padding:10
      
        

        }
        return (
            <Container >
               PHotoGRaPHy 
               {
                   images.map(image=> 
                  
                   <Row className="d-flex">
                      <div className="col-md-3 col-sm-6"  key= {image._id}>
                      
                        <Image src={ image.URL}  style={imgstyle} rounded/>	
                      
                    
                      </div>
                    </Row>
                   
                   )
                    
                    
               }
            </Container>
        )
    }
}

export default Index
