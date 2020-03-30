import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'

class Tech extends React.Component { 
    render(){
      return (
        <div>
            <Header title = "Technology"/>
            <NavBar />
            I'm tech!
        </div>
      )
      }
  }
  export default Tech 