package org.generation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Costumers {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  
	private Integer id_costumer;
	private String name;
	private String lastname;
	private String address;
	private String email;

	
	public Integer getId_costumer() {
		return id_costumer;
	}
	public void setId_costumer(Integer id_costumer) {
		this.id_costumer = id_costumer;
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
	
	
	

}
