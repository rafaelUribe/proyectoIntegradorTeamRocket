package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class RoastService {
	@Autowired
	IRoastRepository iRoastRepository;
	
	
	public Iterable<Roast> getAllRoast(){
		return iRoastRepository.findAll();
	}
	
	public void saveRoast(Roast roast) {
		iRoastRepository.save(roast);
	}
	
}