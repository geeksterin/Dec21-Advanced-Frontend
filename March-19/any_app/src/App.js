import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Geeks</h1>
        <Component1 />
        <Component2 />
        <Component3 />
      </header>
    </div>
  );
}

export default App;
