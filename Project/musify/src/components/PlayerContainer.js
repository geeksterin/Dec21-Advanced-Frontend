import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const PlayerContainer = () => {
    const [volume, setVolume] = useState(0);
    const [playTime, setPlayTime] = useState(32);

    const changeVolume = (_, volume) => {
        setVolume(volume);
    };

    const changePlayTime = (_, playTime) => {
        setPlayTime(playTime);
    }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: "100vw", zIndex: 1300 }} elevation={12}>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={playTime}
          min={0}
          step={1}
          max="200"
          onChange={changePlayTime}
          sx={{
            mt: -4,
            color: "light" === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  "light" === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Stack direction="row" sx={{p: 1}} spacing={2} justifyContent="space-between" alignItems="center">
            <img height="75"  src="http://direct.rhapsody.com/imageserver/v2/albums/Alb.639737795/images/150x150.jpg"/>
  
            <Box>
                <SkipPreviousIcon />
                <PlayArrowIcon />
                <SkipNextIcon />
            </Box>
  
            <Box sx={{width: "200px"}}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
                    <VolumeUp />
                </Stack>
            </Box>
        </Stack>
    </Paper>
  )
}

export default PlayerContainer