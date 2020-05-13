import React, { Component, useEffect } from 'react'
import axios from 'axios'
import Cards from './components/Cards/Cards'
import SearchForm from './components/Form/SearchForm'
import CardDetails from './components/CardDetails/CardDetails'


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      URL:"",
      data:"",
      foodIndex:"",
      display:false,
      newData:"",
      app_id:'02502174',
      app_key:'ab98e12999a37b36187cffeed08953e0	',
      itemSearch:"",
      dietFilter:{
      highProtein:"",
      Balanced:"",  
      lowFat:"",
      lowCarb:""},
      healthFilter:{
      Vegetarian:"",
      Vegan:"",
      sugar:"",
      alcohol:"",
      treeNut:"",
      peanut:""}

     
    }
  }

    handleInputChange = (e) => {
      const {target} = e
      this.setState({
        [target.name]:target.value
      })
    } 

    handleInputHP = (e) => {
      this.setState({
        dietFilter:{highProtein:"high-protein"} 
      })}

    handleInputBalanced= (e) => {
      this.setState({
        dietFilter:{Balanced:"balanced"} 
     })}
     
     handleInputLFat= (e) => {
      this.setState({
        dietFilter:{lowFat:"low-fat"} 
     })} 

     handleInputLcarb= (e) => {
      this.setState({
        dietFilter:{lowCarb:"low-carb"}
     })} 

     handleInputVeg= (e) => {
      this.setState({
        healthFilter:{Vegetarian:"vegetarian"}
     })} 

     handleInputVegan= (e) => {
      this.setState({
        healthFilter:{Vegan:"vegan"}
     })} 

     handleInputSugar= (e) => {
      this.setState({
        healthFilter:{sugar:"sugar-conscious"}
     })} 

     handleInputAlcohol= (e) => {
      this.setState({
        healthFilter:{alcohol:"alcohol-free"}
     })} 

     handleInputNut= (e) => {
      this.setState({
        healthFilter:{treeNut:"tree-nut-free"}
     })} 

     handleInputPeanut= (e) => {
      this.setState({
        healthFilter:{peanut:"peanut-free"}
     })} 

  
fetchData = async() => {
  try{
      const {dietFilter,healthFilter,itemSearch,app_id,app_key} = this.state
      const url = `https://api.edamam.com/search?q=${itemSearch}&app_id=${app_id}&app_key=${app_key}&from=0&to=21`;
      var newUrl="";
      const diet = "&diet=";
      const health = "&health=";
      var i;
      const newDiet = Object.values(dietFilter)
      console.log(newDiet)
      for (i=0; i < newDiet.length; i++ ) {
        const value=newDiet[i]
        if(value) {newUrl+=diet+newDiet[i]} else {console.log(newDiet[i])}}
      console.log(newUrl)
      const newHealth = Object.values(healthFilter)
      console.log(newHealth)
      for (i=0; i < newHealth.length; i++ ) {
        const value = newHealth[i]
        if(value) {newUrl+=health+newHealth[i]} else {console.log(newHealth[i])}}
      console.log(newUrl)  

      const URL = url + newUrl
      console.log(URL)
      const data = await axios.get(URL);
      console.log(data) 
      this.setState({
        URL:URL
      })
      
      return data
     
  }
  catch(error) {

      }
}
  
 fetchapiData = async(e) => {
      e.preventDefault()
      console.log(this.state.url)
      const fetchdata = await this.fetchData();
      const receipeData = fetchdata.data
      const receipeDataHits = receipeData.hits
      console.log(receipeData)
      console.log(receipeDataHits)
      this.setState({
        display:false,
        data:receipeDataHits
      })
     console.log(fetchdata) 
    }

    findRecipe = (index) => {
      console.log(index)
      console.log(this.state.data)
      const newData = this.state.data[index]
      console.log(newData)
      this.setState({
        foodIndex:index,
        display:true,
        newData:newData
      })
    }

    fetchNewapiData = async() =>{
      const url = `https://api.edamam.com/search?q=chicken&app_id=${this.state.app_id}&app_key=${this.state.app_key}&from=0&to=21`;
      const data = await axios.get(url);
      const receipeData = data.data
      const receipeDataHits = receipeData.hits
      this.setState({
        display:false,
        data:receipeDataHits
      })
    }
 
  displayChange = () => {
    this.setState({
      display:false
    })
  } 
  render() { 
    return (
      <div>
        <SearchForm displayChange={this.displayChange} fetchapiData={this.fetchapiData} filters={this.state.filters} handleInputPeanut={this.handleInputPeanut} handleInputNut={this.handleInputNut} handleInputAlcohol={this.handleInputAlcohol} handleInputSugar={this.handleInputSugar} handleInputVegan={this.handleInputVegan} handleInputVeg={this.handleInputVeg} handleInputLcarb={this.handleInputLcarb} handleInputLFat={this.handleInputLFat} handleInputBalanced={this.handleInputBalanced}  handleInputHP={this.handleInputHP} item={this.state.itemSearch} handleInputChange={this.handleInputChange}/>
        <CheckData fetchNewapiData={this.fetchNewapiData} newData={this.state.newData} display={this.state.display} data={this.state.data} findRecipe={this.findRecipe}/>
      </div>
    )
  }
}

export default App

function CheckData(props) {
  if(props.display) {
    return <CardDetails newData={props.newData}/>} else {return <Cards fetchNewapiData={props.fetchNewapiData} data={props.data} findRecipe={props.findRecipe}/>}
  
}