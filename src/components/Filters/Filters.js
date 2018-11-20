import React from 'react'
import TaskDoneFilter from './TaskDoneFilter/TaskDoneFilter'
import ShowAllTasks from './ShowAllTasks/ShowAllTasks'

const Filters = (props) =>{
    return(
        <>
            <TaskDoneFilter
                show={props.show}
                change={props.change}
            />
            <ShowAllTasks
                clicked={props.clicked}
            />
        </>
    )
}

export default Filters