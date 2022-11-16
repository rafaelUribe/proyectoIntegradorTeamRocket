package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.Customers;
import org.generation.repository.*;

@Service
public class CostumersService {
	@Autowired
	ICustomersRepository iCustomersRepository;
	
	
	public Iterable<Customers> getAllCustomer(){
		return iCustomersRepository.findAll();
	}
	
	public void saveCustomer(Customers customer) {
		iCustomersRepository.save(customer);
	}

}
