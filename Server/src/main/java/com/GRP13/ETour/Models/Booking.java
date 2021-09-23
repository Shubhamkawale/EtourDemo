package com.GRP13.ETour.Models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.*;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
@Table(name="booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="booking_id")
	private int booking_id;
	private String cost;
	private int no_of_passenger;
	private int tid;
	private int uid;
	@Column(unique=true)
	private int sessionid;

	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="user_id")
	private Login login;
	
	
	
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="booking_id")
	private List<Passenger> passengers;

	
	
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Booking(int booking_id, String cost, int no_of_passenger, int tid, int uid, Login login, List<Passenger> passengers, int sessionid) {
		super();
		this.booking_id = booking_id;
		this.cost = cost;
		this.no_of_passenger = no_of_passenger;
		this.tid = tid;
		this.uid = uid;
		this.sessionid=sessionid;
		this.login = login;
		this.passengers = passengers;
	}

	

	public int getSessionid() {
		return sessionid;
	}


	public void setSessionid(int sessionid) {
		this.sessionid = sessionid;
	}


	public int getUid() {
		return uid;
	}


	public void setUid(int uid) {
		this.uid = uid;
	}


	public int getTid() {
		return tid;
	}


	public void setTid(int tid) {
		this.tid = tid;
	}


	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}



	public List<Passenger> getPassengers() {
		return passengers;
	}

	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}
	
	
	public int getNo_of_passenger() {
		return no_of_passenger;
	}

	public void setNo_of_passenger(int no_of_passenger) {
		this.no_of_passenger = no_of_passenger;
	}
	
	
	
}