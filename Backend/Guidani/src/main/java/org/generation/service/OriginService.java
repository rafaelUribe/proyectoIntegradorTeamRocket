package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class OriginService  {
	@Autowired
	IOriginRepository iOriginRepository;
	
	
	public Iterable<Origin> getAllOrigin(){
		return iOriginRepository.findAll();
	}
	
	public void saveOrigin(Origin origin) {
		iOriginRepository.save(origin);
	}
	
}