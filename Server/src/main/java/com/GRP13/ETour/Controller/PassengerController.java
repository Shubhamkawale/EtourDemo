package com.GRP13.ETour.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Passenger;
import com.GRP13.ETour.Service.PassengerService;

@CrossOrigin(origins = "http://localhost:3000" )

@RestController
public class PassengerController {
	
	@Autowired
	private PassengerService passengerserve;
	
	@PostMapping(  value="Tour/Passenger/add")
	public void addPassenger(@RequestBody Passenger passenger)
	{
		passengerserve.addPassenger(passenger);
	}
	
	

}
