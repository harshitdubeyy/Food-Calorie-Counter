import React from 'react'
import PropTypes from 'prop-types'
import './FoodItemStyle.css'

export default function FoodItem({food,onDelete,buttonsview}) {
    
    return (
        <div className="container  main-food-box col-lg-4 col-md-6 col-sm-6">
            <div  className="container details  border" >
                    <h4 className="details-title border" >{food.title}</h4>
                    <p className="details-desciption">{food.desc}</p>
                     <hr className="bold-hr" ></hr>
                    <div className="nutrients ">
                        <p >Nutrition Facts : </p>
                         {/* <hr></hr> */}
                        <p className="text-center">Proteins :&emsp;<span>{food.inputprotein}g</span></p>
                        <p className="text-center">Carbs :&emsp;<span>{food.inputcarbs}g</span></p>
                        <p className="text-center">Fats : &emsp;<span>{food.inputfats}g</span></p>
                         <hr></hr>
                        <p>Total Calories :&ensp;{4*food.inputprotein+4*food.inputcarbs+9*food.inputfats}cal</p>
                         <hr className="bold-hr"></hr>
                        <p>Others Details:&emsp;<span>{food.others}</span></p>
                    </div>
                        {buttonsview==="true"?
                            <div className="Button-food">
                                <button type="button" className="button mx-2" >Edit</button>
                                <button className="button mx-3" onClick={()=> {onDelete(food)}}>Delete</button>
                            </div>:""
                        }
                    
                    
            </div>
        </div>
    )
}
FoodItem.propTypes = {
    buttonsview: PropTypes.bool.isRequired
  }
