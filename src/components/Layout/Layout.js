import React from 'react'
import classes from './Layout.module.css'

const Layout = (props) =>{
    return (
        <>
                <h2>ToDo List</h2>
                <main className={classes.Content}>
                    {props.children}
                </main>
        </>
    )
}

export default Layout