import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import OrpahangesMap from './pages/OrphanageMap/OrpahangesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrpahangesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;