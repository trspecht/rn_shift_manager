import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";
import Router from "./src/Router";

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCpq_LKtiKu-STEDNE2fngHpMiBp5CzFd0",
      authDomain: "manager-bbc1d.firebaseapp.com",
      databaseURL: "https://manager-bbc1d.firebaseio.com",
      projectId: "manager-bbc1d",
      storageBucket: "manager-bbc1d.appspot.com",
      messagingSenderId: "1004468575655"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
