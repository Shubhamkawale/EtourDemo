import axios from 'axios';

const TOUR_URL = "http://localhost:8080/Tour"

class TourService {

    getTours() {
        return axios.get(TOUR_URL);
    }

    createTour(tour) {
        return axios.post(TOUR_URL + "/add", tour);
    }

    addPassenger(passenger) {
        return axios.post(TOUR_URL+"/Passenger/add",passenger)
    }

    getTourById(id) {
        return axios.get(TOUR_URL + "/" +id);
    }

    getTourByType(type) {
        return axios.get(TOUR_URL+"/type/"+type);
    }

    getTourByRating(top_rated) {
        return axios.get(TOUR_URL+"/rating/"+top_rated);
    }

    getIternaryById(id){
        return axios.get(TOUR_URL+"/Iternary/"+id);
    }

    bookTour(book) {
        return axios.post(TOUR_URL+"/Booking/add",book)
    }

    getTourByDate(first, second){
        return axios.get(TOUR_URL+"/Date/"+first+"/"+second);
    }
    getTourByCost(first, second){
        return axios.get(TOUR_URL+"/Cost/"+first+"/"+second);
    }
    getTourBySpan(span){
        return axios.get(TOUR_URL+"/Span/"+span);
    }

    addLogin(user) {
        return axios.post(TOUR_URL+"/Login/add",user);
    }

}




export default new TourService()