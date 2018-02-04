// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { reducers } from './reducers/index.js';
import 'antd/dist/antd.css';
import '../css/common.scss';

// pages
import Page1Connet from './page1/page1.connect.jsx';
import Home from './home/home'
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';
import Page4 from './page4/index';
class Application extends Component {
  constructor(props) {
   
    super(props);
}
  render() {
    console.log(this.props.children);
    return (
      <div>
        <div className="header">
          <Link to="home">home</Link>
          <Link to="echarts">echarts</Link>
          <Link to="d3">d3</Link>
          <Link to="cavans">canvas</Link>
        </div>
        {this.props.children}
      </div>

    );
  }
}
const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}></Route>
        <Route path="echarts" component={Page2}></Route>
        <Route path="d3" component={Page3}></Route>
        <Route path="cavans" component={Page4}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));