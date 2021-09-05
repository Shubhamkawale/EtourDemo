import axios from 'axios';

const TOUR_URL = "http://localhost:8080/Tour"

class TourService {

    getTours() {
        return axios.get(TOUR_URL);
    }

    createTour(tour) {
        return axios.post(TOUR_URL + "/add"+ tour);
    }

    getTourById(id) {
        return axios.get(TOUR_URL + "/" +id);
    }

    getTourByType(type) {
        return axios.get(TOUR_URL+"/type/"+type);
    }
}

export default new TourService()