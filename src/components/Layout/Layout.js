import React from 'react'
import classes from './Layout.module.css'

const Layout = (props) =>{
    return (
        <>
            <div className='col-md-offset-2 col-md-8 col-md-offset-2'>
                <h2>ToDo List</h2>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout