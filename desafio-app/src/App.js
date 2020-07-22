import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Carrinho from './components/Carrinho'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/carrinho" component={Carrinho}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;