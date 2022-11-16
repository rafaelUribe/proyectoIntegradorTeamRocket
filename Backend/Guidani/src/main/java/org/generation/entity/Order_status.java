package org.generation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="shopping_order_status")
public class Order_status {
	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_status;
	private String order_status;
	
	
	public Integer getId_status() {
		return id_status;
	}
	public void setId_status(Integer id_status) {
		this.id_status = id_status;
	}
	public String getOrder_status() {
		return order_status;
	}
	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}
	
	

}
