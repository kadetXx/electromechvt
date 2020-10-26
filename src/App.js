import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from './pages/about/About'

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
