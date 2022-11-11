package org.generation.entity;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Orders {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  
	private Integer id_order;
	  
	@Column(name = "created_at", insertable=false,  updatable=false , columnDefinition = "timestamp default CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar date;
	
	private Double total;
	
	@ManyToOne
	@JoinColumn(name="id_customer")
	private Customers id_customer;
	
	
	@ManyToOne
	@JoinColumn(name="id_status")
	private Order_status id_status;


	public Integer getId_order() {
		return id_order;
	}


	public void setId_order(Integer id_order) {
		this.id_order = id_order;
	}


	public Calendar getDate() {
		return date;
	}


	public void setDate(Calendar date) {
		this.date = date;
	}


	public Double getTotal() {
		return total;
	}


	public void setTotal(Double total) {
		this.total = total;
	}


	public Customers getId_customer() {
		return id_customer;
	}


	public void setId_customer(Customers id_customer) {
		this.id_customer = id_customer;
	}


	public Order_status getId_status() {
		return id_status;
	}


	public void setId_status(Order_status id_status) {
		this.id_status = id_status;
	}
	
	
	

}
