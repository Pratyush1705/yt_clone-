import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFrmApi } from '../utils/fetchFrmApi';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {sid}=useParams();

  useEffect(() => {
    fetchFrmApi(`search?part=snippet&q=${sid}`).then((data) => { setVideos(data.items) })
  }, [sid])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
      Search Results for: <span style={{ color: '#fc1503' }}>{sid}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed