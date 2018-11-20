import React, { Component } from 'react';
import '../App.css';
import TaskList from '../components/TaskList/TaskList'
import Search from '../components/Search/Search'
import Layout from '../components/Layout/Layout'
import Filter from '../components/Filters/Filters'
import TaskAdd from '../components/TaskAdd/TaskAdd'

class App extends Component {
    state = {
        taskList:[
            {id:1, title:'To learn ES6', done: true, createdAt: new Date(2018,11,19).getTime(), isEdited: false},
            {id:2, title:'To learn React', done: false, createdAt: new Date(2018,11,19).getTime(), isEdited: false},
            {id:3, title:'To learn Redux', done: false, createdAt: new Date(2018,11,19).getTime(), isEdited: false}
        ],
        showDoneTasks: false,
        searchValue: '',
        showAllTasks: false,
        searchTaskList: [],
        neWTaskValue: ''
    }

    componentDidMount(){
        const localStarageState = localStorage.getItem('state');
        if (localStarageState) {
            this.setState(JSON.parse(localStarageState));
        }
    }
    removeTaskHandler = (id) => {
        const updatedTaskList = [...this.state.taskList]
        let index = updatedTaskList.findIndex((item)=>{
            return item.id === id
        })
        updatedTaskList.splice(index,1)
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    changeTaskDoneHandler = (id) =>{
        const updatedTaskList = [...this.state.taskList]
        let index = updatedTaskList.findIndex((item)=>{
            return item.id === id
        })
        let updatedTask = updatedTaskList[index]
        updatedTask.done = !updatedTask.done
        updatedTaskList[index] = updatedTask
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    changeShowDoneTask = ()=> {
        let updatedshowDoneTasks = !this.state.showDoneTasks
        this.setState({
            showAllTasks: false,
            showDoneTasks: updatedshowDoneTasks
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    searchValueHandler = () =>{
        const taskList = this.state.taskList
        const updatedTaskList = taskList.filter((task)=>{
            return task.title === this.state.searchValue
        })
        this.setState({
            showAllTasks: false,
            searchTaskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    changeSearchValueHandler = (event) =>{
        this.setState({
            searchValue: event.target.value
        })
    }

    showAllTasksHandler = () =>{
        this.setState({
            searchValue: '',
            showAllTasks:true
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    editTaskHandler = (id) =>{
        const updatedTaskList = [...this.state.taskList]
        let index = updatedTaskList.findIndex((item)=>{
            return item.id === id
        })
        updatedTaskList[index].isEdited = true
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    changeTitleInputHandler = (id,event) =>{
        const updatedTaskList = [...this.state.taskList]
        let index = updatedTaskList.findIndex((item)=>{
            return item.id === id
        })
        updatedTaskList[index].title = event.target.value
        console.log(updatedTaskList[index],event.target.value)
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    saveTaskHandler = (id) => {
        const updatedTaskList = [...this.state.taskList]
        let index = updatedTaskList.findIndex((item) => {
            return item.id === id
        })
        updatedTaskList[index].isEdited = false
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    changeNewTaskValueHandler = (event) =>{
        this.setState({newTaskValue: event.target.value})
    }

    addTaskHandler = () => {
        let newTaskTitle = this.state.newTaskValue
        const updatedTaskList = [...this.state.taskList];
        let newId = this.state.taskList[this.state.taskList.length - 1].id + 1;
        updatedTaskList.push({
            id: newId,
            title: newTaskTitle,
            done: false,
            createdAt: new Date().getTime(),
            isEdited: false
        });
        this.setState({
            taskList: updatedTaskList
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    render() {
        let updatedTaskList = []
        const taskList = this.state.taskList
        if (this.state.showDoneTasks){
            updatedTaskList = taskList.filter((task)=>{
                return task.done === true
            })
        }
        else{
            updatedTaskList = taskList.filter((task)=>{
                return task.done === false
            })
        }
        if (this.state.searchValue){
            updatedTaskList = this.state.searchTaskList
        }
        if (this.state.showAllTasks){
            updatedTaskList = taskList
        }

        return (
            <div className="App">
                <Layout>
                    <Search
                        search={this.searchValueHandler}
                        searchValue={this.state.searchValue}
                        changeSearchValue={this.changeSearchValueHandler}
                    />
                    <Filter
                        show={this.state.showDoneTask}
                        change={this.changeShowDoneTask}
                        clicked={this.showAllTasksHandler}
                    />
                    <TaskList
                        taskList={updatedTaskList}
                        removed={this.removeTaskHandler}
                        changedDone={this.changeTaskDoneHandler}
                        editTask={this.editTaskHandler}
                        changeTitle={this.changeTitleInputHandler}
                        saveTask={this.saveTaskHandler}
                    />
                    <TaskAdd
                        clicked={this.addTaskHandler}
                        changeNewTasValue={this.changeNewTaskValueHandler}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;
