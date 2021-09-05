package com.GRP13.ETour.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GRP13.ETour.Models.Booking;
import com.GRP13.ETour.Repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepo;
	
	public void addBooking(Booking booking) {
		bookingRepo.save(booking);
		
	}
	

}
