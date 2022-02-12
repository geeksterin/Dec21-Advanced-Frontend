import React from 'https://unpkg.com/react@17/umd/react.development.js';
class NavigationBar extends React.Component {
    render() {
        let name = "Akash";
        return (
            <div>
                <h1>Hello {name}</h1>
            </div>
        );
    }
}

export default NavigationBar;