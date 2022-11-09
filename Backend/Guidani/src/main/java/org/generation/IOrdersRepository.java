package org.generation;

import org.springframework.data.repository.CrudRepository;

import org.generation.Orders;

public interface IOrdersRepository extends CrudRepository<Orders, Integer> {

}
