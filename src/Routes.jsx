import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import List from './pages/List'
import Watch from './pages/Watch'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/list" exact component={List} />
            <Route path="/watch/:id" component={Watch} />
        </Switch>
    )
}

export default Routes