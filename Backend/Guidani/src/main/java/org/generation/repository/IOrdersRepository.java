package org.generation.repository;

import org.generation.entity.Orders;
import org.springframework.data.repository.CrudRepository;

public interface IOrdersRepository extends CrudRepository<Orders, Integer> {

}
