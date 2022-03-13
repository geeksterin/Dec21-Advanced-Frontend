import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating'
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'

const Detail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    const fetch_fn = async() => {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=a08c1dc5`);
        const data = await response.json();
        data.actors_arr = data.Actors.split(", ");
        data.rating_value = data.imdbRating / 2;
        console.log(data);
        setDetails(data);
    }
    useEffect(() => { fetch_fn(); }, [id])

    return (
        <>
            
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            <Typography underline="hover">Home</Typography>
                        </Link>
                    <Typography color="text.primary">Detail</Typography>
                </Breadcrumbs>

                { Object.keys(details).length === 0 ? (<CircularProgress />) : (false)}
                

                <Grid container spacing={6} columns={16} sx={{ mt: 1}}>
                    <Grid item xs={4}>
                        <Stack spacing={2}>
                            <img src={details?.Poster} alt="Movie Poster" />
                            <Typography component="legend" variant="h5">Rating</Typography>
                            <Rating name="read-only" value={details?.rating_value ? details?.rating_value : 0} readOnly />
                        </Stack>
                        
                    </Grid>

                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Typography variant="h4" gutterBottom component="div">
                                {details?.Title}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Chip label={details?.Type} />
                                <Typography variant="h5" gutterBottom component="div">
                                    /
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {details?.Genre}
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    /
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {details?.Language}
                                </Typography>
                            </Stack>
                            <Typography variant="h5" gutterBottom component="div">
                                Plot:
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {details?.Plot}    
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Cast:
                                </Typography>
                                {details?.actors_arr?.map((single_actor, idx) => {
                                    return (
                                        <Chip label={single_actor} key={idx} />
                                    )
                                })}
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Box Office Collection:    
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    {details?.BoxOffice}    
                                </Typography>
                            </Stack>
                        </Stack>
                        
                    </Grid>
                </Grid>


            </Container>
        </>
    )
}

export default Detail