package com.GRP13.ETour.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Booking;
import com.GRP13.ETour.Models.Login;
import com.GRP13.ETour.Models.Tours;
import com.GRP13.ETour.Service.BookingService;
import com.GRP13.ETour.Service.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginserve;
	
	@PostMapping(value="Login/add")
	public void addLogin(@RequestBody Login login)
	{
		loginserve.addLogin(login);
	}
	
	

}
