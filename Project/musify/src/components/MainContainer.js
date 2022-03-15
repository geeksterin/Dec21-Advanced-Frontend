import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const MainContainer = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {(new Array(15)).fill(1123).map((_, idx) => {
                return (
                    <Grid item xs={2} key={idx}>
                        <Paper elevation={3} sx={[{pb: 1}, {'&:hover': { backgroundColor: 'grey' }}]}>
                            <Paper elevation={2} sx={{m: 2, p:4, backgroundImage: "url('http://direct.rhapsody.com/imageserver/v2/albums/Alb.639737795/images/300x300.jpg');"}}>
                            <h1>&nbsp;</h1>
                            </Paper>
                   
                            <Typography sx={{ textAlign: "center" }}>Song Name</Typography>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default MainContainer