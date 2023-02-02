import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friendlist from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


import PrivateRoute from './components/PrivateRoute';



function App() {

  // console.log(props)
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="login">Login</Link>
        <Link className="link" to="friends">Friends List</Link>
        <Link className="link" to="friends/add">Add Friends</Link>
        <Link className="link" to="/logout">Logout</Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/friends" element={<PrivateRoute><Friendlist /></PrivateRoute>} />
        <Route exact path="/friends/add" element={<PrivateRoute><AddFriend /></PrivateRoute>} />
        <Route exact path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
      </Routes>
    </div>

  );
}

export default App;
