package com.projects.bible.bibleverse.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.bible.bibleverse.model.Pill;
import com.projects.bible.bibleverse.repository.PillRepository;

@Service
public class PillServiceImpl {
	
	@Autowired
	private PillRepository repository;
	
	public Pill savePill(Pill pill) {
		return repository.save(pill);
	}
	
	public List<Pill> getAllPills() {
		return repository.findAll();
	}
	
	public Optional<List<Pill>> getAllByUsername(String username){
		return repository.findByUsername(username);
	}

}
