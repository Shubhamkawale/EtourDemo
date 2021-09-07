package com.GRP13.ETour.Models;

import javax.persistence.*;

@Entity
@Table(name="login")
public class Login {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int user_id;
	private String password;
	private String user_name;
	private String email;
	

	public Login(int user_id, String password, String user_name,String email) {
		super();
		this.user_id = user_id;
		this.password = password;
		this.user_name = user_name;
		this.email=email;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}