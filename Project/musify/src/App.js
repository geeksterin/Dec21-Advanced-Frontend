import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopNav from './components/TopNav';
import PlayerContainer from './components/PlayerContainer';
import MainContainer from './components/MainContainer';
import SideNav from './components/SideNav';
const App = () => {

  return (
    <>
    <Box sx={{pb: 7}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopNav />
      <SideNav />
      <MainContainer />
      
    </Box>
        <PlayerContainer />
    </Box>
    
    </>
  );
}

export default App;
