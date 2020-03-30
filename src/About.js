import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'

class About extends React.Component { 
    render(){
      return (
        <div>
            <Header title = "About Me"/>
            <NavBar />
            I'm about!
        </div>
      )
      }
  }
  export default About 