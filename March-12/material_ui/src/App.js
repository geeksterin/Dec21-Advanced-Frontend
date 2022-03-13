import Header from './components/Header';
import Search from './routes/Search';
import Home from './routes/Home';
import Detail from './routes/Detail';
import NotFound from './routes/NotFound';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
