package org.generation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Products {
 
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private Integer id_product;
	  private String name;
	  private Double price;
	  
	  @JsonIgnore
	  private String img_1;
	  
	  @JsonIgnore
	  private String img_2;
	  
	  @JsonIgnore
	  private String img_3;
	  
	  @JsonIgnore
	  private String img_4;
	  
	  
	  private String description;
	  private Integer id_origin;
	  private Integer grams;
	  
	  
	  @ManyToOne
	  @JoinColumn(name="id_roast")
	  private Roast id_roast;
	  
	  
	  @ManyToOne
	  @JoinColumn(name="id_presentation")
	  private Presentation id_presentation;


	public Integer getId_product() {
		return id_product;
	}


	public void setId_product(Integer id_product) {
		this.id_product = id_product;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public String getImg_1() {
		return img_1;
	}


	public void setImg_1(String img_1) {
		this.img_1 = img_1;
	}


	public String getImg_2() {
		return img_2;
	}


	public void setImg_2(String img_2) {
		this.img_2 = img_2;
	}


	public String getImg_3() {
		return img_3;
	}


	public void setImg_3(String img_3) {
		this.img_3 = img_3;
	}


	public String getImg_4() {
		return img_4;
	}


	public void setImg_4(String img_4) {
		this.img_4 = img_4;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Integer getId_origin() {
		return id_origin;
	}


	public void setId_origin(Integer id_origin) {
		this.id_origin = id_origin;
	}


	public Integer getGrams() {
		return grams;
	}


	public void setGrams(Integer grams) {
		this.grams = grams;
	}


	public Roast getId_roast() {
		return id_roast;
	}


	public void setId_roast(Roast id_roast) {
		this.id_roast = id_roast;
	}


	public Presentation getId_presentation() {
		return id_presentation;
	}


	public void setId_presentation(Presentation id_presentation) {
		this.id_presentation = id_presentation;
	}


	
	
}
