import React, {useState} from 'react';

import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; // Import the CSS file

export const SearchBar = () => {
    const [input, setInput] = useState("");

const fetchData = (value) => {
    fetch("https://josnplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
        
    });
}   

const handleChange = (value) => {
    setInput(value)
    fetchData(value)
}

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input 
                placeholder='Type to search...' 
                value={input} 
                onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
    );
};