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
import Tour from './Componenets/DetailedIternary';
import DetailedIternary from './Componenets/DetailedIternary';
import AboutUs from './Componenets/AboutUs';
import ContactUs from './Componenets/ContactUs';
import Invoice from './Componenets/Invoice';
import SearchByDate from './Componenets/SearchByDate';
import SearchByPrice from './Componenets/SearchByPrice';
import SearchBySpan from './Componenets/SearchBySpan';
import Genre from './Componenets/Genre'
import TourPackages from './Componenets/TourPackages'
import ListToursComponent from './Componenets/ListToursComponent'
import CreateTourComponent from './Componenets/CreateTourComponenet'
import AdminLogin from './Componenets/AdminLogin'


function App() {
  return (

    <Router>
      <div className="App">
        <MyNavbar />
        <Switch >

          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/view-Tour/I" component={DetailedTourInternational}></Route>
          <Route exact path="/view-Tour/D" component={DetailedTourDomestic}></Route>
          <Route exact path="/book-Tour/:id" component={BookingForm}></Route>
          <Route exact path="/iternary/" component={DetailedIternary}></Route>
          <Route exact path="/booking" component={BookingForm}></Route>
          <Route exact path="/aboutUs" component={AboutUs}></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route exact path="/invoice" component={Invoice}></Route>
          <Route exact path="/date" component={SearchByDate}></Route>
          <Route exact path="/price" component={SearchByPrice}></Route>
          <Route exact path="/span" component={SearchBySpan}></Route>
          <Route exact path="/Genre" component={Genre}></Route>
          <Route exact path="/tourpackages" component={TourPackages}></Route>
          
          
          <Route exact path="/admin" component={AdminLogin}></Route>
          <Route exact path="/tourlist" component={ListToursComponent}></Route>
          <Route exact path="/admin/add-tour" component={CreateTourComponent}></Route>

        </Switch>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
