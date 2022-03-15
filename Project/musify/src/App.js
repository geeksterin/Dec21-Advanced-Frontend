import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopNav from './components/TopNav';
import PlayerContainer from './components/PlayerContainer';
import MainContainer from './components/MainContainer';
import SideNav from './components/SideNav';
import TopArtistContainer from './components/TopArtistContainer';
import {Routes, Route} from 'react-router-dom';
import ArtistPage from './components/ArtistPage';

const App = () => {

  return (
    <>
    <Box sx={{pb: 7}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopNav />
      <SideNav />
      <Box sx={{mb: 8}}>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/top/artists" element={<TopArtistContainer />} />
          <Route path="/artists/:artist_id" element={<ArtistPage />} />
        </Routes>
      </Box>
      
    </Box>
        <PlayerContainer />
    </Box>
    
    </>
  );
}

export default App;
