import './App.css';
import Header from './components/Header.js';
import ProductSection from './components/ProductSection.js';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    this.setState({
      productList: json
    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <ProductSection products={this.state.productList} />
      </div>
    );
  }
}


export default App;
