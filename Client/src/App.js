import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Componenets/Footer';
import HomePage from './Componenets/HomePage';
import MyNavbar from './Componenets/MyNavBar';
import DetailedTourInternational from './Componenets/DetailedTourInternational';
import DetailedTourDomestic from './Componenets/DetailedTourDomestic'
import BookingForm from './Componenets/BookingForm';


function App() {
  return (
    
    <Router>
      <div className="App">
        <MyNavbar />
          <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/view-Tour/I" component={DetailedTourInternational}></Route>          
          <Route exact path="/view-Tour/D" component={DetailedTourDomestic}></Route>
          <Route exact path="/book-Tour/:id" component={BookingForm}></Route>

          </Switch>
          
        </div>
        <Footer />
    </Router>

  );
}

export default App;
