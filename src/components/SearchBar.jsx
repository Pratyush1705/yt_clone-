import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const[sid,setSid]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
       e.preventDefault();
       if(sid){
         navigate(`/search/${sid}`);
         setSid('');
       }
    }
    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 21, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>
            <input className='search-bar' placeholder='Search..' value={sid} onChange={(e) => {setSid(e.target.value)}} />
            <IconButton>
                <Search type="submit" sx={{p:'10px',color:'red'}}/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar