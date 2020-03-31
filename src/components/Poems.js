import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import ChildPoems from './ChildPoems'
import PoemDataService from '../services/poem.service'


class Poems extends React.Component { 
  constructor(){
    super()
    this.state = {
    
      all :  [{
        id: "",
        title: "",
        description: "",
        published: false
      }],
      isLoading: true

    }
  } 
  async componentWillMount(){
    await this.displayPoems();  
  }

  addPoem(){

    PoemDataService.create({
      title: this.state.title,
      description: this.state.description
      })
  }
  async displayPoems(){

      const data = await PoemDataService.getAll().then((response) => {
        return response.data
      })
      this.setState(
      {all: data, isLoading: false})        
  }
  render(){
    const sendProps = !this.state.isLoading
    return (
      <div>
          <Header title = "Poems"/>
          <NavBar />
          <ChildPoems poems = {this.state.all} isLoading = {this.state.isLoading}/>

      </div>
    )
    }
  }
  export default Poems 