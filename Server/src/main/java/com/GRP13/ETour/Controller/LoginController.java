package com.GRP13.ETour.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Booking;
import com.GRP13.ETour.Models.Login;
import com.GRP13.ETour.Models.Tours;
import com.GRP13.ETour.Service.BookingService;
import com.GRP13.ETour.Service.LoginService;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginserve;
	
	@PostMapping(value="Tour/Login/add")
	public void addLogin(@RequestBody Login user)
	{
		loginserve.addLogin(user);
	}
	
	@GetMapping(value="Tour/Login/get/{user_id}")
	public Login getUserById(@PathVariable int user_id) {
		return loginserve.getUserById(user_id);
	}
	
	@GetMapping("Tour/Allusers")
	public List<Login> getallUsers(){
		return loginserve.getallUsers();
		
	}

}
