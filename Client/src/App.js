import React from 'react';
import './App.css';
import ListToursComponent from './Componenets/ListToursComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTourComponenet from './Componenets/CreateTourComponenet';
import Footer from './Componenets/Footer';
import HomePage from './Componenets/HomePage';
import MyNavbar from './Componenets/MyNavBar';
import DetailedTourInternational from './Componenets/DetailedTourInternational';
import TourType from './Componenets/TourType';
import DetailedTourDomestic from './Componenets/DetailedTourDomestic'
import BookingForm from './Componenets/BookingForm';


function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
          <Switch>
          <Route exact path="/" component={TourType}></Route>
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
