import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import HomePage from './Components/HomePage';
import AboutItems from './Components/AboutItems';
import ListOfItems from './Components/ListOfItems';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import CheckoutPage from './Components/CheckoutPage';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={AboutItems} />
        <Route path="/list" component={ListOfItems} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;