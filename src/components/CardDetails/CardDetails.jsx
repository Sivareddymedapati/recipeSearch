import React, { Component } from 'react'
import styles from '../CardDetails/CardDetails.module.css'


class CardDetails extends Component {
    render() {  const newIngredients = Object.values(this.props.newData.recipe.totalNutrients)


    return (
        <div className="grid-12">
            <div className="grid-2"></div>
            <div className="grid-8">
                <div className="grid-6">
                <div className="grid-12">
                <div className="grid-12">
                <div className="grid-12">    
                <div className={styles.recipeLabel}>
                    {this.props.newData.recipe.label}
                </div>
                </div>
                <div className="grid-12 ">
                    <img className={styles.recipeImage} src={this.props.newData.recipe.image} ></img>
                </div>
                </div>
                <div className={styles.inputLabel}>
                    <div className="grid-12">Total Calories:{Math.round(this.props.newData.recipe.calories)}</div>
                    <div className="grid-12">Total Weight:{Math.round(this.props.newData.recipe.totalWeight)}</div>
                </div>
                </div>
                <div className="grid-12">
                    <div className={styles.inputLabel}>
                    <table>
                           <thead>
                               <tr>
                                   <th className={styles.tableHeading}>Ingredients</th>
                               </tr>
                           </thead>
                           <tbody>
                        {
                        
                        this.props.newData.recipe.ingredients.map((data) => {return (
                     
                               <tr>
                                 <td>{data.text}</td>
                               </tr>)})}
                           </tbody>
                        </table>
                    </div>
                    
                </div>
                </div>
                <div className="grid-2"></div>
                <div className="grid-4">
                    <div className={styles.inputLabel}>
                    <div className="grid-12">
                        <div className={styles.tableHeading}>Total Nutrients</div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                               {newIngredients.map((item) => {return (
                                  <tr> 
                                   <td>{item.label}</td>
                                   <td>{Math.round(item.quantity)}</td>
                                   <td>{item.unit}</td>
                                  </tr> 
                               )})}
                            </tbody>
                        </table>
                    </div>
                    </div>

                </div>
            </div>
            <div className="grid-2"></div>
        </div>
    )
}}

export default CardDetails
