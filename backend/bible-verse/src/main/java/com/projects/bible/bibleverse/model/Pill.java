package com.projects.bible.bibleverse.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Pill")
public class Pill {
	@Id
	@GeneratedValue
	private int id;
	private String username;
	private Date dateTaken;
	
	public Pill() {
		
	}

	public Pill(int id, String username, Date dateTaken) {
		super();
		this.id = id;
		this.username = username;
		this.dateTaken = dateTaken;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getDateTaken() {
		return dateTaken;
	}

	public void setDateTaken(Date dateTaken) {
		this.dateTaken = dateTaken;
	}

	@Override
	public String toString() {
		return "Pill [id=" + id + ", username=" + username + ", dateTaken=" + dateTaken + "]";
	}

}
