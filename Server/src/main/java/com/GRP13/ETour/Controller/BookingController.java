package com.GRP13.ETour.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Booking;
import com.GRP13.ETour.Models.Tours;
import com.GRP13.ETour.Service.BookingService;

@CrossOrigin(origins = "http://localhost:3000" )
@RequestMapping("/")
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingserve;
	
	@PostMapping(value="Tour/Booking/add")
	public void addBooking(@RequestBody Booking booking)
	{
		bookingserve.addBooking(booking);
	}
	
	@GetMapping(value="Tour/Booking/id/{sessionid}")
	public Booking getBookingBySessionId(@PathVariable int sessionid) {
		return  bookingserve.getBookingBySessionId(sessionid);
		 
	}

	
	

}
