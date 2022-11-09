package org.generation;

import org.springframework.data.repository.CrudRepository;

import org.generation.Stock;

public interface IStockRepository extends CrudRepository<Stock, Integer>{

}
