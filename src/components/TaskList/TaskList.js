import React from 'react'
import Task from './Task/Task'
import classes from './TaskList.module.css'


const TaskList = (props) =>{
    return(
        <div className={classes.TaskList}>
            {!props.taskList.length ?
                <p>No tasks</p> :
                props.taskList.map((task, index)=>{
                    return (
                        <Task
                            key={task.id}
                            title={task.title}
                            done={task.done}
                            createdAt={task.createdAt}
                            isEdited={task.isEdited}
                            changeTitle={(event)=>props.changeTitle(task.id,event)}
                            editTask={()=>props.editTask(task.id)}
                            saveTask={()=>props.saveTask(task.id)}
                            changedDone={()=>props.changedDone(task.id)}
                            removed={()=>props.removed(task.id)}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList