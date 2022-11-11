package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class OrdersService {
	@Autowired
	IOrdersRepository iOrdersRepository;
	
	
	public Iterable<Orders> getAllOrders(){
		return iOrdersRepository.findAll();
	}
	
}