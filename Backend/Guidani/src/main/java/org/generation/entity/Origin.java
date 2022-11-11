package org.generation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Origin {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_origin;
	private String name;
	
	
	public Integer getId_origin() {
		return id_origin;
	}
	public void setId_origin(Integer id_origin) {
		this.id_origin = id_origin;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	
}
