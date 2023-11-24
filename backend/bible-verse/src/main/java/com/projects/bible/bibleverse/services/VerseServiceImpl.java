package com.projects.bible.bibleverse.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.bible.bibleverse.model.Verse;
import com.projects.bible.bibleverse.repository.VerseRepository;

@Service
public class VerseServiceImpl {

	@Autowired
	private VerseRepository repository;
	
	public Verse saveVerse(Verse verse) {
		return repository.save(verse);
	}
	
	public Optional<Verse> getVerse(int id) {
		return repository.findById(id);
	}
}
