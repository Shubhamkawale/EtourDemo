package com.GRP13.ETour.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Passenger;


@Repository
public interface PassengerRepository extends JpaRepository<Passenger,Integer>{

}
