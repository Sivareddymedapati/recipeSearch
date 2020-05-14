import React,{useEffect} from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from '../Cards/Cards.module.css'
import cx from 'classnames'

const Cards = (props) => {
    console.log(props.data)

    
    return (

       
        <div>
            <Grid container spacing={3} justify="center" >
               {props.data && props.data.map((receipe,index) => {return (
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.food)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>{receipe.recipe.label}</Typography>
                       <Typography variant="body2" gutterBottom>
                           <img src={receipe.recipe.image} width="200" height="200"></img></Typography>
                       <Typography color="textSecondary" gutterBottom>Number of calories:{Math.round(receipe.recipe.calories)}</Typography>  
                       <button type="button" onClick={() => {props.findRecipe(index)}} className={styles.detailsbtn}>Check recipe</button>  
                   </CardContent>
               </Grid> )})} 
               
               
            </Grid>
            
            
        </div>
    )
}

export default Cards
