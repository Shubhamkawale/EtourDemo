package com.GRP13.ETour.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GRP13.ETour.Models.Tours;
import com.GRP13.ETour.Repository.ToursRepository;

@Service
public class TourService {
	
	@Autowired
	private ToursRepository tourRepository;
	
	//returns all tours
	public List<Tours> getAllTour() {
		return tourRepository.findAll();
	}

	//delete a specific tour
	public void deleteTour(Integer tour_id) {
		tourRepository.deleteById(tour_id);
	}
	
	//returns a specific tour
	public Tours getTour(Integer tour_id) {
		return tourRepository.findById(tour_id).get();
	}
	
	//adds a tour to DB
	public void addTour(Tours tour) {
		tourRepository.save(tour);
	}
	
	//update no of seats available per tour
	public void addSeat(int seats, int tour_id) 
	{
		tourRepository.addSeat(seats, tour_id);
	}
	
	//to get tour by type
	public List<Tours> getTourByType(String type){
		return tourRepository.getToursByType(type);
	}
	
	//to get tour toprated
		public List<Tours> getTourByRating(String rate){
			return tourRepository.getTourByRating(rate);
		}
		
		
		//to get tours by date
		public List<Tours> getTourByDate(String startdate, String enddate)
		{
			return tourRepository.getTourByDate(startdate, enddate);
		}
		
		//to get tour by span
		public List<Tours> getTourBySpan(int span){
			return tourRepository.getTourBySpan(span);
		}	
		
		//to get tours by cost
		public List<Tours> getTourByCost(int first, int second){
			return tourRepository.getTourByCost(first, second);
		}
}