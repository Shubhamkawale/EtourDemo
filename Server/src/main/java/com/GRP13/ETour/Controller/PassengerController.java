package com.GRP13.ETour.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Login;
import com.GRP13.ETour.Models.Passenger;
import com.GRP13.ETour.Models.Tours;
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
	
	@GetMapping("Tour/AllPassengers")
	public List<Passenger> getallPassenger(){
		return passengerserve.getallPassenger();
		
	}
	

	@GetMapping(value="Tour/AllPassengers/{sessionId}")
	public List<Passenger> getallPassengerById(@PathVariable int sessionId){
		return passengerserve.getallPassengerById(sessionId);
	}
	
}
