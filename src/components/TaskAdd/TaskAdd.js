import React from 'react'

const TaskAdd = (props) =>{
    return(
        <div className='input-group'>
            <input type="text" className="form-control" placeholder="Add new task" onChange={props.changeNewTasValue} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={props.clicked}>Add</button>
            </span>
        </div>
    )
}

export default TaskAdd