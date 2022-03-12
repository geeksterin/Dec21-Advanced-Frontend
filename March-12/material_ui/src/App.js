import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl" sx={{mt: 4}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl:6 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item key={index}>
              <MovieCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
