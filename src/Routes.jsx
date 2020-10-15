import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Details from './pages/Details'
import Landing from './pages/Landing'
import List from './pages/List'
import Watch from './pages/Watch'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/list" exact component={List} />
            <Route path="/watch/:id" component={Watch} />
            <Route path="/details/:id" component={Details} /> 
        </Switch>
    )
}

export default Routes