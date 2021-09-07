package com.GRP13.ETour.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GRP13.ETour.Models.Iternary;
import com.GRP13.ETour.Repository.IternaryRepository;

@Service
public class IternaryService {

	@Autowired
	private IternaryRepository iternaryrepo;
	
	public Iternary getIternaryByTourid(int tour_id) {
		return iternaryrepo.getIternaryByTourid(tour_id);
	}
}
