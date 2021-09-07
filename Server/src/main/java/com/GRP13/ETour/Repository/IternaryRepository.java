package com.GRP13.ETour.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Iternary;
import com.GRP13.ETour.Models.Tours;


@Repository
public interface IternaryRepository extends JpaRepository<Iternary,Integer>{

	
	@Transactional
	@Query(value="SELECT * FROM Iternary i WHERE i.tour_id= :tid", nativeQuery = true)
	public Iternary getIternaryByTourid(@Param("tid") int tour_id);
}