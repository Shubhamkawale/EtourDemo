package com.GRP13.ETour.Models;

import javax.persistence.*;

@Entity
@Table(name="passenger")
public class Passenger {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pid;
	private String pname;
	private int age;
	private int bookingid;
	private String email;
	private String address;
	private int phoneno;
	private int sessionid;
	private int uid;
	
	

	
	
	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	public Passenger(int pid, String pname, int age, int bookingid, String email, String address, int phoneno,
			int sessionid, int uid) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.age = age;
		this.bookingid = bookingid;
		this.email = email;
		this.address = address;
		this.phoneno = phoneno;
		this.sessionid = sessionid;
		this.uid = uid;
	}



	public int getUid() {
		return uid;
	}



	public void setUid(int uid) {
		this.uid = uid;
	}



	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public int getSessionid() {
		return sessionid;
	}

	public void setSessionid(int sessionid) {
		this.sessionid = sessionid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(int phoneno) {
		this.phoneno = phoneno;
	}

	
	
	

}