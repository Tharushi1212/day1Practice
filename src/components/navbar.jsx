import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class NavBar extends Component {
    state = {  } 
    render() { 
        return(
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="./counter.jsx">Navbar</a>
                </nav>
        );
    }
}
 
export default NavBar;