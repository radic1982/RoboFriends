import React from 'react';
import './SearchBox.css';


const SearchBox = ({searchField, searchChange}) => {

    return (
        <div className = 'search'>
        <input className='in' type='search' placeholder='search robots' onChange={searchChange}/>
        
        </div>
    );


}

export default SearchBox;