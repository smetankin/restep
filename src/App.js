import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Rent from "./components/Rent";
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            Hello world
            <Switch>
                <Route path="/rent">
                    <Rent />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
