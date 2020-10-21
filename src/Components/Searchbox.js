import React from "react"


const Search = ({action}) => {
    return (
        <div className={'pa2'}>
            <input className={'pa3 ba b--green bg-light-blue'} type='search' placeholder={'Discover new robots'} onChange={action}/>
        </div>
    )
}

export default Search