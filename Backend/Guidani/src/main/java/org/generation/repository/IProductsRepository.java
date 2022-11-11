package org.generation.repository;

import org.generation.entity.Products;
import org.springframework.data.repository.CrudRepository;

public interface IProductsRepository extends CrudRepository<Products, Integer>{

}
