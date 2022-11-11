package org.generation.repository;

import org.generation.entity.Order_item;
import org.springframework.data.repository.CrudRepository;

public interface IOrderItemRepository extends CrudRepository<Order_item, Integer> {

}
