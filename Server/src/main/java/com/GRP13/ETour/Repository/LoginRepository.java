package com.GRP13.ETour.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GRP13.ETour.Models.Login;



@Repository
public interface LoginRepository extends JpaRepository<Login,Integer>{

}