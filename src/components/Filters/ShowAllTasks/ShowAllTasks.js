import React from 'react'
import './ShowAllTasks.css'

const ShowAllTasks = (props) =>{
    return(
        <div className='AllTasks'>
        <button className="btn-success" onClick={props.clicked}>Show All Tasks</button>
        </div>
    )
}

export default ShowAllTasks