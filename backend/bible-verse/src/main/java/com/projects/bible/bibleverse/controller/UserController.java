package com.projects.bible.bibleverse.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projects.bible.bibleverse.model.User;
import com.projects.bible.bibleverse.services.UserServiceImpl;

import jakarta.xml.bind.DatatypeConverter;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserServiceImpl service;
	
	@GetMapping("getPass/{password}")
	public String getPass(@PathVariable("password") String password) {
		return encryptPassword(password);
	}
	
	@PostMapping("login")
	public ResponseEntity<Optional<User>> login(@RequestParam String username, @RequestParam String password) {
		return new ResponseEntity<Optional<User>>(service.loginUser(username, password), HttpStatus.OK);
	}
	
	private String encryptPassword(String password) {
		//MD5 Encryption
		String myHash = null;
		//String hash = "35454B055CC325EA1AF2126E27707052";
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("MD5");
			 md.update(password.getBytes());
			    byte[] digest = md.digest();
			    myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return myHash;
	   
	}

}
