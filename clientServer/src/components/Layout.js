import React from 'react'
import {container} from "react-bootstrap"

function Layout(props) {
    return (
        <container>
            {props.children}
        </container>
    )
}

export default Layout
