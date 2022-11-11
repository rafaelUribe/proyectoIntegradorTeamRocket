package org.generation.repository;

import org.generation.entity.Customers;
import org.springframework.data.repository.CrudRepository;

public interface ICustomersRepository extends CrudRepository<Customers, Integer> {

}
