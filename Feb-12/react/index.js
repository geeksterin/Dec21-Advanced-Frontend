// import NavigationBar from './nav.js';
// let NavigationBar = require('./nav.js');

class WelcomeText extends React.Component {
    render() {
        let name = "Aayush";
        return (
            <h1>Hello {name}</h1>
        )
    }
}

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <WelcomeText />
                <input type="text" />
                <button>Search</button>
            </div>
        );
    }
}

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-container">
                <img src="#" />
                <img src="#" />
                <img src="#" />
                <img src="#" />
                <img src="#" />
                <img src="#" />
                <img src="#" />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Gallery />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)