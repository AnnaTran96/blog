import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, Post, NotFound404 } from './pages'

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Blog</h1>
                <Switch>
                    <Route exact path='/' component={Form}></Route>
                    <Route path='/:id' component={Post}></Route>
                    <Route path='/*' component={NotFound404}></Route>
                </Switch>
            </div>
        )
    }
}

export default App