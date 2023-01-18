import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

function Sidebar() {
  const selectCategory='New';
  return (
    <Stack direction="row" sx={{overflowY:"auto",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
        {categories.map((category)=>{
            return (<button className='category-btn' style={{color:'white',background:category.name===selectCategory&&'#FC1503'}} key={category.name}>
                <span style={{color:category.name===selectCategory?'white':'red',marginRight:'15px'}}>{category.icon}</span>
                <span style={{opacity:category.name===selectCategory?'1':'0.7'}}>{category.name}</span>
            </button>)
        })}

    </Stack>
  )
}

export default Sidebar