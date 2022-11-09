package org.generation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Order_item {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_sub_order;
	private Integer id_product;
	private Integer quantity;
	private Float total;
	private Integer id_order;
	
	
	public Integer getId_sub_order() {
		return id_sub_order;
	}
	public void setId_sub_order(Integer id_sub_order) {
		this.id_sub_order = id_sub_order;
	}
	public Integer getId_product() {
		return id_product;
	}
	public void setId_product(Integer id_product) {
		this.id_product = id_product;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Float getTotal() {
		return total;
	}
	public void setTotal(Float total) {
		this.total = total;
	}
	public Integer getId_order() {
		return id_order;
	}
	public void setId_order(Integer id_order) {
		this.id_order = id_order;
	}
	
	
	

}
