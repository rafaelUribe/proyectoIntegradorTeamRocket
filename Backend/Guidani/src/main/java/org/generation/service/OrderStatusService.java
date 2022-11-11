package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class OrderStatusService {
	@Autowired
	IOrderStatusRepository iOrderStatusRepository;
	
	
	public Iterable<Order_status> getAllOrdersStatus(){
		return iOrderStatusRepository.findAll();
	}
	
}