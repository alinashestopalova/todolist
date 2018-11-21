import React from 'react'
import TaskDone from './TaskDone/TaskDone'
import ShowAllTasks from './ShowAllTasks/ShowAllTasks'
import SelectPeriod from "./SelectPeriod/SelectPeriod";
import './Filters.css'

const Filters = (props) =>{
    return(
        <div className="Filters">
            <TaskDone
                show={props.show}
                change={props.change}
            />
            <ShowAllTasks
                clicked={props.clicked}
            />
            <SelectPeriod
                changeStartDate={props.changeStartDate}
                changeEndDate={props.changeEndDate}
                clicked={props.selectTasksForPeriod}
                endDateValue={props.endDateValue}
                startDateValue={props.startDateValue}
            />
        </div>
    )
}

export default Filters