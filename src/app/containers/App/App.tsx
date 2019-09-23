import React from 'react';
import './App.style.scss';

export interface AppProps {
}

export class App extends React.Component<AppProps, any> {
    render() {
        return (
            <div className="app__container"> React simple starter</div>
        );
    }
}

export default App;
