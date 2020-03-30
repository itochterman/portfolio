import React from 'react'
import NavBar from './NavBar'
import MemeGenerator from './MemeGenerator'
import Header from './Header'


class Home extends React.Component { 
    render(){
      return (   
        <div>
            <Header />
            <NavBar />
            <MemeGenerator /> 
        </div>
      )
    }
  }
  export default Home