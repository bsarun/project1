import React, { Component } from 'react';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import AddRequest from '../containers/AddRequest';
import AddRequest2 from '../containers/AddRequest2';
import { Routes, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact element={<Login/>} ></Route>
          <Route path="/forgotpassword" exact element={<Login forgotpassword='true' />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/addrequest" exact element={<AddRequest2 />}></Route>
          <Route path="/addrequest2" exact element={<AddRequest />}></Route>
        </Routes>
      </div>
    );
  }
}

export default compose(connect()(App));
