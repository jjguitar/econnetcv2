import React, { useEffect, useState } from 'react';
import { HashRouter  , Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Experiences from '@pages/Experiences';
import Processes from '@pages/Processes';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import { setModal, loadData } from '../actions/index';
import { connect } from 'react-redux';
import AppContext from '../context/AppContext';
import { useExps } from '../hooks/useExps';
import '@styles/global.css';

const App = ({loadData}) => {
  useEffect(() => {
    loadData('process')
    loadData('meeting')
  },[]);
	return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/processes" component={Processes} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
	);
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setModal,
  loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
