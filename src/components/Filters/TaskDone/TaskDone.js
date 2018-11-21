import React from 'react'

const TaskDone = (props)=> {
    return(
        <div>
            <input type='checkbox' checked={props.show} onChange={props.change}/>
            <label>Show completed tasks</label>
        </div>
    )
}

export default TaskDone