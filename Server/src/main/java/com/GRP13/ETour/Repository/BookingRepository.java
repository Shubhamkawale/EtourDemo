package com.GRP13.ETour.Repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.GRP13.ETour.Models.Booking;


@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer>{
	
	
	@Transactional
	@Query("SELECT b FROM Booking b WHERE b.sessionid = :sessionid ")
	public Booking getBookingBySessionId(@Param("sessionid") int sessionid);

}

