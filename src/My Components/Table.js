import React from 'react'
import MaterialTable from 'material-table'

export const Table = (foods) => {
    const columns=[
        {
            title:'Dish', field:'title'
        },
        {
            title:'Description', field:'desc'
        },
        {  
             title:'Proteins', field:'inputprotein'
        },
        {
            title:'Carbs', field:'inputcarbs'
        },
        {
            title:'Fats', field:'inputfats'
        },
        {
            title:'Others', field:'others'
        },
    ]
    
    return (

        <div>
            <MaterialTable title="Food Table"
            data={foods}
            columns={columns}
            />

        </div>
    )
}
