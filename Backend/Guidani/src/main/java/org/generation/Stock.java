package org.generation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_stock;
	private Integer count;
	private Integer id_product;
	public Integer getId_stock() {
		return id_stock;
	}
	public void setId_stock(Integer id_stock) {
		this.id_stock = id_stock;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getId_product() {
		return id_product;
	}
	public void setId_product(Integer id_product) {
		this.id_product = id_product;
	}
	
	

}
