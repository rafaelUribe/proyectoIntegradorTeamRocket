package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.Order_item;
import org.generation.repository.*;

@Service
public class OrderItemService {
	@Autowired
	IOrderItemRepository iOrderItemRepository;
	
	
	public Iterable<Order_item> getAllOrdersItem(){
		return iOrderItemRepository.findAll();
	}
	
}