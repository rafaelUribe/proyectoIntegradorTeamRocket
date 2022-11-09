package org.generation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Roast {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_roast;
	private String name;
	
	public Integer getId_roast() {
		return id_roast;
	}
	public void setId_roast(Integer id_roast) {
		this.id_roast = id_roast;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
