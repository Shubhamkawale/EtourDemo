package com.GRP13.ETour.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.GRP13.ETour.Models.Iternary;
import com.GRP13.ETour.Service.IternaryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IternaryController {
	
	@Autowired
	private IternaryService iternaryserv;

	@GetMapping(value="Tour/Iternary/{tour_id}")
	public Iternary getIternaryByTourid(@PathVariable int tour_id) {
		return iternaryserv.getIternaryByTourid(tour_id);
		
	}
}
