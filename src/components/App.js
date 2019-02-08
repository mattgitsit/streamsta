import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={StreamList} />
              <Route exact path="/streams/new" component={StreamCreate} />
              <Route exact path="/streams/edit" component={StreamEdit} />
              <Route exact path="/streams/delete" component={StreamDelete} />
              <Route exact path="/streams/show" component={StreamShow} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
