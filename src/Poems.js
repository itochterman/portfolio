import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'

class Poems extends React.Component { 
    render(){
      return (
        <div>
            <Header title = "Poems"/>
            <NavBar />
            I'm poems!
        </div>
      )
      }
  }
  export default Poems 