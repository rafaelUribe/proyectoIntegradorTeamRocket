package org.generation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.entity.*;
import org.generation.repository.*;

@Service
public class PresentationService  {
	@Autowired
	IPresentationRepository iPresentationRepository;
	
	
	public Iterable<Presentation> getAllPresentation(){
		return iPresentationRepository.findAll();
	}
	
	public void savePresentation(Presentation presentation) {
		iPresentationRepository.save(presentation);
	}
}