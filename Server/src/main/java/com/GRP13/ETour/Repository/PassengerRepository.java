package com.GRP13.ETour.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Passenger;


@Repository
public interface PassengerRepository extends JpaRepository<Passenger,Integer>{

	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("SELECT p FROM Passenger p WHERE p.sessionid = :sessionid ")
	public List<Passenger> getallPassengerById(@Param("sessionid") int sessionid);
	
}
