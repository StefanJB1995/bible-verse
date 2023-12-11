package com.projects.bible.bibleverse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projects.bible.bibleverse.model.Pill;
import com.projects.bible.bibleverse.services.PillServiceImpl;

@RestController
@RequestMapping("pills")
@CrossOrigin(origins = "http://localhost:4200")
public class PillController {

	@Autowired
	private PillServiceImpl service;
	
	@GetMapping("findAll")
	public List<Pill> getAllPills(){
		return service.getAllPills();
	}
}
