package com.projects.bible.bibleverse.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.bible.bibleverse.model.User;
import com.projects.bible.bibleverse.repository.UserRepository;

@Service
public class UserServiceImpl {
	
	@Autowired
	private UserRepository repository;
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public Optional<User> getUser(String username) {
		return repository.findByUsername(username);
	}
	
	public Optional<User> loginUser(String username, String password) {
		
		return repository.findByUsernameAndPassword(username, password);
	}

}
