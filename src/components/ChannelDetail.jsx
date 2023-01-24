import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFrmApi } from '../utils/fetchFrmApi'
//1:47:58

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFrmApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFrmApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)', zIndex: 10, height: '300px' }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '140px' } }} />
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail