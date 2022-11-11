package org.generation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Customers {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  
	private Integer id_customer;
	private String name;
	private String lastname;
	private String address;
	private String email;
	
	@JsonIgnore
	private String password;
	
	
	public Integer getId_customer() {
		return id_customer;
	}
	public void setId_customers(Integer id_customer) {
		this.id_customer = id_customer;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
	
	