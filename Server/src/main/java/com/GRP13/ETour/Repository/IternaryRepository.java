package com.GRP13.ETour.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Iternary;
import com.GRP13.ETour.Models.Tours;


@Repository
public interface IternaryRepository extends JpaRepository<Iternary,Integer>{

}