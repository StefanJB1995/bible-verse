package com.projects.bible.bibleverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projects.bible.bibleverse.model.Verse;
import com.projects.bible.bibleverse.services.VerseServiceImpl;

@RestController
@RequestMapping("verse")
@CrossOrigin(origins = "http://localhost:4200")
public class VerseController {

	@Autowired
	private VerseServiceImpl service;
	
	@GetMapping("find/{id}")
	public Verse getVerseById(@PathVariable("id") int id){
		Verse verse = service.getVerse(id).get();
		
		return verse;
	}
}
