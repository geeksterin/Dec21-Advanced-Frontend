import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Toolbar, Paper, Stack, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { NAPSTER_API_KEY } from '../constants';


const ArtistPage = () => {
    const { artist_id } = useParams();
    const [artistDetails, setArtistDetails] = useState({});
    const [songList, setSongList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://api.napster.com/v2.2/artists/${artist_id}?apikey=${NAPSTER_API_KEY}`);
            const data = await response.json();
            if(data.artists.length > 0) {
                setArtistDetails(data.artists[0]); 
            }
            const song_response = await fetch(`http://api.napster.com/v2.2/artists/${artist_id}/tracks?apikey=${NAPSTER_API_KEY}&limit=20`);
            const song_data = await song_response.json();
            setSongList(song_data.tracks);
        })();
    }, []);

    const image_url = `https://api.napster.com/imageserver/v2/artists/${artist_id}/images/633x422.jpg`;
  
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <Toolbar />
            <Stack direction="row" spacing={10}>
                <Paper elevation={12} style={{width: "31vw", height: "20vw", backgroundImage: `url('${image_url}')`, backgroundSize: "cover"}} />
                <Typography variant='h2' sx={{pt: 4}}>{artistDetails?.name}</Typography>
            </Stack>
            

            <TableContainer component={Paper} sx={{mt: 12}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Album</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {songList.map((single_song, idx) => (
                            <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    1.
                                </TableCell>
                                <TableCell>{single_song.name}</TableCell>
                                <TableCell>{single_song.albumName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
      )
}

export default ArtistPage