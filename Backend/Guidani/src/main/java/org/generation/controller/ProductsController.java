package org.generation.controller;

import org.generation.entity.*;
import org.generation.repository.*;
import org.generation.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins="*")
public class ProductsController {
  @Autowired
  ProductsService productsService;


  @PostMapping(path="/add") 
  public @ResponseBody String addNewProduct (
		 @RequestParam String name,
		 @RequestParam Double price,
		 @RequestParam String img_1,
		 @RequestParam String img_2,
		 @RequestParam String img_3,
		 @RequestParam String img_4,
		 @RequestParam String description,
		 @RequestParam Integer id_origin,
		 @RequestParam Integer grams
		 ){

//MARIA REVELES ESTUVO AQUÍ
	  
  @GetMapping(path="/Products")
  public @ResponseBody Iterable<Products> getAllProducts() {
    // This returns a JSON or XML with the users
    return productsService.getAllProducts();
  }
}

