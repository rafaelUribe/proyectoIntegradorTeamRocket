package org.generation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_order;
	private String date;
	private Float total;
	private Integer id_customer;
	
	
	public Integer getId_order() {
		return id_order;
	}
	public void setId_order(Integer id_order) {
		this.id_order = id_order;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Float getTotal() {
		return total;
	}
	public void setTotal(Float total) {
		this.total = total;
	}
	public Integer getId_customer() {
		return id_customer;
	}
	public void setId_customer(Integer id_customer) {
		this.id_customer = id_customer;
	}
	
	

}
