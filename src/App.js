import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';  
import User from './components/users/User';  
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  let githubClientId;
  let githubClientSecret;

  if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
  }else{
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_ID
  }

  // get all users
  useEffect(async() => {
    console.log('useEffect');
    const res = await axios.get(`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    // this.setState({users: res.data, loading: false});
    setUsers(res.data);
    setLoading(false);
  }, [])

  // get single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    // this.setState({user: res.data, loading: false});
    setUser(res.data)
    setLoading(false);
  }

  
  // search
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    setUsers(res.data.items)
    setLoading(false);
  }


  // get repos of user
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${githubClientId}}&client_secret=${githubClientSecret}`);
    // this.setState({repos: res.data, loading: false});
    setRepos(res.data);
    setLoading(false);
  }

  // clear Users
  const clearUsers = () => {
    // this.setState({users: [], loading: false})
    setUsers([]);
    setRepos([]);
    setLoading(false);
  }

  // show alert
  const setAlerts = (msg, type) => {
    // console.log(msg, type);
    // this.setState({alert: {msg , type}});
    setAlert({msg, type})
    setTimeout(()=> setAlert(null), 5000)
  }

    // const {loading,user, repos, users } = this.state;
    return (
        <Router>
      <div>
          <Navbar title="Github Finder"/>
          <div className="container mt-3">
            <Route exact path="/" render={props => (
              <Fragment>
                <Users loading={loading}  users={users} />
              </Fragment>
            )} />
            <Route exact path="/search" render={props => (
              <Fragment>
                <Alert alert={alert} />
                <Search 
                  searchUsers={searchUsers} 
                  clearUsers={clearUsers} 
                  showClear={users.length > 0 ? true : false } 
                  setAlerts = {setAlerts}  
                />
                <Users loading={loading}  users={users} />
              </Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path='/user/:login' render={props => (
              <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} />
            )} />
          </div>
      </div>
      </Router>
    );
}

export default App;
