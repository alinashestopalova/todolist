import React from 'react'

const Search = (props) =>{
    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search task title" onChange={props.changeSearchValue} value={props.searchValue}/>
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={props.search}>Search</button>
              </span>
        </div>
    )
}

export default Search