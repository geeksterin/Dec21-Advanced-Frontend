import React, { useRef, useState, useEffect } from 'react';
import { Paper, Stack, Box, Slider, Fab, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';

const PlayerContainer = () => {
    const [volume, setVolume] = useState(50);
    const [playTime, setPlayTime] = useState(0);
    const [isPlaying, setPlaying] = useState(false);
    const audioPlayer = useRef(null);

    const appState = useSelector((state) => {
      return state;
    });

    useEffect(() => {
      audioPlayer.current.volume = (volume / 100);
    }, [volume]);

    useEffect(() => {
      setPlayTime(0);
      audioPlayer.current.play();
      setPlaying(true);
    }, [appState]);

    const changeVolume = (_, volume) => {
        setVolume(volume);
    };

    const changePlayTime = (_, playTime) => {
        audioPlayer.current.currentTime = playTime;
        setPlayTime(playTime);
    }

    const updatePlayTimeAudioPlayer = (e) => {
      setPlayTime(e.target.currentTime);
    }

    const stopPlaying = () => {
      setPlaying(false);
      setPlayTime(0);
    }

    const togglePlayPause = () => {
      setPlaying((currentState) => {
        const newState = !currentState;
        
        if(newState) {
          audioPlayer.current.play();
        } else {
          audioPlayer.current.pause();
        }
        return newState;
      })
    }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: "100vw", zIndex: 1300 }} elevation={12}>
      <audio ref={audioPlayer} src={appState.audio_url} onTimeUpdate={updatePlayTimeAudioPlayer} onEnded={stopPlaying} />
        <Slider
          aria-label="time-indicator"
          size="small"
          value={playTime}
          min={0}
          max="30"
          onChange={changePlayTime}
          sx={{
            mt: -4,
            color: "light" === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
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
        <Stack direction="row" sx={{pb: 2, pl: 2, pr: 4}} spacing={2} justifyContent="space-between" alignItems="center">
            <img height="75"  src={appState.img_url} />
  
            <Box sx={{pl: 18}}>
              <Stack direction="row" spacing={2} alignItems="center">
                
                <IconButton aria-label="delete">
                  <SkipPreviousIcon fontSize="large" />
                </IconButton>
                
                <Fab color="primary" aria-label="add" onClick={togglePlayPause}>
                  {isPlaying ? <PauseIcon fontSize='large' /> : <PlayArrowIcon fontSize='large' /> }
                </Fab>
                
                <IconButton aria-label="delete">
                  <SkipNextIcon fontSize='large' />
                </IconButton>
                
              </Stack>
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