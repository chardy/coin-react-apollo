import React from 'react'
import { Router, Link, Switch, Route, } from 'react-static'
//
import {
  Index
} from './routers'
import { ApolloProvider } from 'react-apollo'
import client from './connectors/apollo'

import './style.global.css';

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
)
