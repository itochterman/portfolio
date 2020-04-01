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
      isLoading: true,
      currPoem: []
    }
  } 
  async componentWillMount(){
    // await this.displayPoems();  
    this.readTextFile("./poems/raw_gums.txt");
    if(this.state.currPoem){
      console.log("YES: ", this.state.currPoem)
      this.setState({isLoading: false})
    }
  }
    readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                let allText = rawFile.responseText;
                for (let i = 0; i < allText.length; i++) {
                  let uni = allText.charCodeAt(i)
                  if (uni === 13) {
                    allText =(allText.substring(0, i) + "~" + allText.substring(i + 1, allText.length - 1))
                  }
                }
                let newText = allText.split("~")
                console.log(newText)


                
                this.setState({
                    currPoem: newText
                });
            }
        }
    };
    rawFile.send(null);
};

  addPoem(){

    PoemDataService.create({
      title: this.state.title,
      description: this.state.description
      })
  }
  // async displayPoems(){

  //     const data = await PoemDataService.getAll().then((response) => {
  //       return response.data
  //     })
  //     this.setState(
  //     {all: data, isLoading: false})      
  // }
  render(){
    const sendProps = !this.state.isLoading
    return (
      <div>
          <Header title = "Poems"/>
          <NavBar />
          <ChildPoems current = {this.state.currPoem} poems = {this.state.all} isLoading = {this.state.isLoading}/>

      </div>
    )
    }
  }
  export default Poems 