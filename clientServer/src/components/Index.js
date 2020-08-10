import React, { Component } from 'react'
import axios from "axios"
import {Button, FormGroup, FormControl, Image, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Redirect} from "react-router-dom"
import NavabarComponent from "./NavbarComponent"


class Index extends Component {
    constructor(props) {
        super(props)
        let shouldRedirect = false;
        if (localStorage.getItem('userTokenTime')) {

          const data = JSON.parse(localStorage.getItem('userTokenTime'));
          if (new Date().getTime() - data.time > (1 * 60 * 60 * 1000)) {
            localStorage.removeItem('userTokenTime');
            shouldRedirect = true;
          }
        } else {
          shouldRedirect = true;
        }
    
        this.state = {
             images: [],
             isLoaded:false,
             errmsg:" ",
             redirect: shouldRedirect
             
             
        }
    }
    
    
   componentDidMount (){
  if(localStorage.getItem("userTokenTime")){
       axios.get("http://localhost:9000/images",{
            headers: {
              'Content-Type': 'application/json',
               "userdata": JSON.parse(localStorage.getItem('userTokenTime')).email,
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
            }
          })
         
       
         .catch(err=>{
           console.log(err)
           this.setState({
             errmsg: err.message
           },()=><h3>{this.state}</h3>)
           
        })
        .then(res=>{
           console.log(res)  
           
                 
            this.setState({ 
               images: res.data,
               isLoaded: true
           })
         })
   
    
  }}
    
    render() {
      
      
       if(this.state.redirect) return <Redirect to="/login" />

        const {images} =this.state
        const imgstyle={
          width: "100%",
          maxWidth: 400,
          maxHeight: 400,
          height: "100%",
          border:1 ,
          margin:1,
          padding:20,
          overflow:"hidden",
          resizeMode: "contain",
          flexDirection: "row",
          flexWrap: "wrap",
          aspectRatio: 1,
          flex: 1,
          alignItems: "center"
          
    
      
        

        }
        return (
          <React.Fragment>
            <NavabarComponent />
             <Container>
               
               <Container>
               <Link to="/images/upload" className="pull-right"><Button>Upload</Button></Link>
                </Container>
               
               
                   <Row >
              
                  {
                   images.map(image=> 
                  
                   
                      <Col sm={6} md={3} key= {image._id} >
                      
                        <Image src={image.fileLink}  style={imgstyle} rounded/>	
                      
                    
                      </Col>
                  
                   
                     )
                    
                    
                     }
                   </Row>
                 
            </Container>

            </React.Fragment>
        )
    }
}

export default Index
