package com.GRP13.ETour.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.GRP13.ETour.Models.Login;
import com.GRP13.ETour.Repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository loginRepo;
	
	public void addLogin(Login login) {
		loginRepo.save(login);
		
	}
	
	public Login getUserById(int user_id) {
		return loginRepo.findById(user_id).get();
	}
	
}
