import React from 'react'

const ShowAllTasks = (props) =>{
    return(
        <button className="btn-success" onClick={props.clicked}>Show All Tasks</button>
    )
}

export default ShowAllTasks