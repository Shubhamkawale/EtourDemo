package com.GRP13.ETour.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Booking;
import com.GRP13.ETour.Models.Login;
import com.GRP13.ETour.Models.Passenger;
import com.GRP13.ETour.Models.Tours;
import com.GRP13.ETour.Service.BookingService;
import com.GRP13.ETour.Service.LoginService;
import com.GRP13.ETour.Service.PassengerService;

@RestController
public class PassengerController {
	
	@Autowired
	private PassengerService passengerserve;
	
	@PostMapping(value="Passenger/add")
	public void addPassenger(@RequestBody Passenger passenger)
	{
		passengerserve.addPassenger(passenger);
	}
	
	

}
