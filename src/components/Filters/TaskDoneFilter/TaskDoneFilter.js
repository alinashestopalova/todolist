import React from 'react'

const TaskDoneFilter = (props)=> {
    return(
        <>
            <input type='checkbox' checked={props.show} onChange={props.change}/>
            <label>Show completed tasks</label>
        </>
    )
}

export default TaskDoneFilter