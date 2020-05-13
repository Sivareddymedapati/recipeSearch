import React, { Component } from 'react'
import '../Form/SearchForm.css'
import dispay1 from '../Images/display1.jpg'
import dispay2 from '../Images/display2.png'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'


class SearchForm extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             display:false
        }
    }
    
    displayblock = () =>{
        this.setState({
            display:!this.state.display
        })
    }
    render() {
    return (
        <CardContent className="grid-12 container">
            <div className="grid-4">
            <img className="mainImage" src={dispay1} ></img>
            <img className="mainTitleImage" onClick={this.props.displayChange} src={dispay2} ></img>
            </div>
            <div className="grid-6">
            <div className="grid-12">
            <h1 className="form">
                  Search your favourite recipe here   
            </h1>
            </div>
            <div className="grid-12">
            <form className="form" onSubmit={this.props.fetchapiData}>
                <input type="text" className="forminput grid-10" value={this.props.itemSearch} name="itemSearch" onChange={this.props.handleInputChange}/>
                <button type="submit" onSubmit={this.props.fetchapiData} className="searchBtn"><i class="fa fa-search" aria-hidden="true"  type="button" /></button>
                        
            </form>
            </div>
           
            <div className="grid-12">
            <div className="grid-12 rSearch" onClick={this.displayblock}>
                <div className="grid-2"></div>
                <div className="grid-2 refine">Refine search by </div>
                <div className="grid-4">Diet & Ingredients </div>
                <i className= "fa fa-angle-down grid-1" ></i>
                <div className="grid-4"></div>
            </div>
            </div>
            <div className="grid-12">
            <div className={this.state.display ? "active":"inactive"}>
            <div className="grid-10 filterBox">
                <div className="grid-2"></div>
                <div className="grid-4 ">
                 <div className="grid-12">Diet</div> 
                 <div className="grid-12">
                   <div className="grid-12">  
                    <input type="checkbox" id="highProtein" name="highProtein" onClick={this.props.handleInputHP}/>
                    <label>high-protein</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="balanced" name="balanced"  onClick={this.props.handleInputBalanced}/>
                    <label>balanced</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="lowFat" name="lowFat"  onClick={this.props.handleInputLFat}/>
                    <label>low-fat</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="lowCarb" name="lowCarb" onClick={this.props.handleInputLcarb} />
                    <label>low-carb</label>
                   </div>
                   </div>
                </div>
                
                <div className="grid-4 ">
                 <div className="grid-12">Ingredients</div> 
                 <div className="grid-12">
                   <div className="grid-12">  
                   <input type="checkbox" id="vegetarian" name="vegetarian" onClick={this.props.handleInputVeg}/>
                   <label>vegetarian</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="vegan" name="vegan" onClick={this.props.handleInputVegan}/>
                    <label>vegan</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="sugar" name="sugar" onClick={this.props.handleInputSugar}/>
                    <label>sugar-conscious</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="alcohol"  name="alcohol" onClick={this.props.handleInputAlcohol}/>
                    <label>alcohol-free</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="treeNut" name="treeNut" onClick={this.props.handleInputNut}/>
                    <label>tree-nut-free</label>
                   </div>
                   <div className="grid-12">  
                    <input type="checkbox" id="Peanuts" name="peanut" onClick={this.props.handleInputPeanut}/>
                    <label>peanut-free</label>
                   </div>
                </div>   
                <div className="grid-2"></div>
            </div>
            <div className="grid-12">
                <div className="grid-10"></div>
                <div className="grid-2">
                        <button className="findBtn" type="button" onClick={this.props.fetchapiData}>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>Find</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="grid-2"></div>
        </CardContent>
    )
}
}
export default SearchForm
