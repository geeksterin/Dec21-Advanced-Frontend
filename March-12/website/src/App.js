import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ContactMe from './components/ContactMe';
import Navigation from './components/Navigation';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route path="/contact/me" element={<ContactMe />} />
        <Route path='/contact/:name' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <VideoPlayer />
    </>
  );
}

export default App;
