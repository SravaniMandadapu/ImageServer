import React, { Component } from 'react'
import "./Landing.css"
import { Container } from 'react-bootstrap'
import NavbarComponent from "./NavbarComponent"


class Landing extends Component {
    render() {
        return (
            <React.Fragment>
             <NavbarComponent />
            <Container className="landing-header">
                <h1 className="landing-header">Welcome to NAture PHotography</h1>
                <a href="/images" class="btn btn-lg btn-success">View All Images </a>

                
            </Container>
            </React.Fragment>
        )
    }
}

export default Landing
