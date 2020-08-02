import React, { Component } from 'react'
import axios from "axios"

class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images: [],
             isLoaded:false
        }
    }

    componentDidMount (){
        axios.get("http://localhost:9000/images")
       
        .catch(err=>{
            console.log(err)
        })
        .then(res=>{
            console.log(res)            
            this.setState({ 
                images: res
            })
        })
    }
    
    render() {
        const {images} =this.state
        return (
            <div>
               PHotoGRaPHy 
               {
                   images.length ? images.map(image=> 
                   <div key= {image._id}>
                    {image.URL}
                   </div> ):
                    null
                    
               }
            </div>
        )
    }
}

export default Index
