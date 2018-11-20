import React from 'react'
import classes from "./Task.module.css"

const Task = (props) =>{
    let taskClasses = classes.Task + ` row`
    let modeButton=(<div className="col-md-1"><button className="btn-primary" onClick={props.editTask}>Edit</button></div>)
    let modeValue = props.title
    if(props.isEdited){
        modeButton=(<div className="col-md-1"><button className="btn-success" onClick={props.saveTask}>Save</button></div>)
        modeValue=(<input type='text' value={props.title} onChange={props.changeTitle}/>)
    }
    return (
        <div className={taskClasses}>
            <div className="col-md-1">
                <input
                    type="checkbox"
                    checked={props.done}
                    onChange={props.changedDone}/>
            </div>
            <div className="col-md-6">{modeValue}</div>

            <div className="col-md-3">{new Date(props.createdAt).toDateString()}</div>
            {modeButton}
            <div className="col-md-1"><button className="btn-danger" onClick={props.removed}>Delete</button></div>
        </div>
    )
}

export default Task