package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class StockService {
	@Autowired
	IStockRepository iStockRepository;
	
	
	public Iterable<Stock> getAllStock(){
		return iStockRepository.findAll();
	}
	
}