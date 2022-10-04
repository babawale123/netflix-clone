import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const  dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(
            login({
            uid:userAuth.uid,
            email:userAuth.email,
            })
        );
      }
      else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);

  return ( 
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
             <ProfileScreen />
            </Route>
          <Route>
            <HomeScreen exact path="/" />
          </Route>
        </Switch>
        )}
       
      </Router>
    </div>
  );
}

export default App;
