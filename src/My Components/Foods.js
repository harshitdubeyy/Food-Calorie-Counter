import React from 'react'
import FoodItem from "./FoodItem";
// import { ImageBackground } from 'react-native'
import './FoodsStyle.css'


export default function Foods(props) {
    return (
        <>
        {/* <ImageBackground source={"./background-img.jpg"} style={{width: '100%', height: '100%'}}>
        <Text>Inside</Text>
        </ImageBackground> */}
        <div className="container h-100">
            <h3 className="text-centre my-3 Foods-heading">
                List of Dishes you may love
            </h3>
                {props.foods.length===0? <p className="align-items-center h-100 No-Dishes">No Dishes to Display. Please Add some Dish</p>:
                props.foods.map((food)=>{
                    return <FoodItem food={food} key={food.sno} onDelete={props.onDelete} buttonsview={props.buttonsview}/>
                })
            }
        </div>
        </>
        
    )
}
