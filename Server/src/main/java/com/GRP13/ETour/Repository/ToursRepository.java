package com.GRP13.ETour.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Tours;


@Repository
public interface ToursRepository extends JpaRepository<Tours,Integer>{

	//HQL to update no of seats in a tour
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("UPDATE Tours t SET filled_seats = filled_seats+ :seats WHERE t.tour_id= :tour_id")
	public void addSeat(@Param("seats") int seats , @Param("tour_id") int tour_id );
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("SELECT t FROM Tours t WHERE t.tour_type = :type ")
	public List<Tours> getToursByType(@Param("type") String type);
	
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("SELECT t FROM Tours t WHERE t.top_rated = :rate ")
	public List<Tours> getTourByRating(@Param("rate") String rate);
	
	@Transactional
	@Query(value="SELECT * FROM Tours t WHERE t.start_date>= :startingdate AND t.end_date<= :enddate", nativeQuery = true)
	public List<Tours> getTourByDate(@Param("startingdate") String start_date, @Param("enddate") String enddate);
	
	
	@Query(value="SELECT * FROM Tours t WHERE t.tour_span<= :span", nativeQuery = true)
	public List<Tours> getTourBySpan(@Param("span") int span);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value="SELECT * from Tours t WHERE t.package_cost>= :first AND t.package_cost<= :second", nativeQuery = true)
	public List<Tours> getTourByCost(@Param("first") int first, @Param("second") int second);
	
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("SELECT t FROM Tours t WHERE t.package_type = :packagetype ")
	public List<Tours> getToursByPackageType(@Param("packagetype") String type);
	
	
}



