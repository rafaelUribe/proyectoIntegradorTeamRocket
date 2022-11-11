package org.generation.repository;

import org.generation.entity.Stock;
import org.springframework.data.repository.CrudRepository;

public interface IStockRepository extends CrudRepository<Stock, Integer>{

}
