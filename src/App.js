import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}></Route>
        <Route path="/vid/:id" exact element={<VideoDetail/>}></Route>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}></Route>
        <Route path="/search/:sid" exact element={<SearchFeed/>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App