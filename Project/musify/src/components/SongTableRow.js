import React from 'react'
import { PlayArrow } from '@mui/icons-material';
import { TableRow, TableCell, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setPlayNow } from '../actions';
import { Link, useMatch } from 'react-router-dom';

const SongTableRow = (props) => {
    console.log(props);
    const dispatch  = useDispatch();
    const image_url = `https://api.napster.com/imageserver/v2/albums/${props.data?.albumId}/images/150x150.jpg`;

    const playSong = () => {
        dispatch(setPlayNow(props.data?.previewURL, image_url));    
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{props.index + 1}.</TableCell>
            {(props.owner == "artist") ? (
                <TableCell>
                    <img style={{width: "3rem", height: "3rem"}} src={image_url} />
                </TableCell>
            ) : false}
            <TableCell>{props.data?.name}</TableCell>
            <TableCell>
                {(props.owner == "artist") ? (
                    <Link to={`/albums/${props.data?.albumId}`} >
                        {props.data?.albumName}
                    </Link>
                ) : (
                    <Link to={`/artists/${props.data?.artistId}`} >
                        {props.data?.artistName}
                    </Link>
                )}
                
            </TableCell>
            <TableCell>
                <IconButton aria-label="delete" size="large" onClick={playSong}>
                    <PlayArrow fontSize="large" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
};

export default SongTableRow