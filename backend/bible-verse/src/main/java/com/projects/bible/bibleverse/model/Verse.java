package com.projects.bible.bibleverse.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Verse")
public class Verse {
	@Id
	@GeneratedValue
	private int id;
	private String chapter;
	private String verse;
	
	public Verse() {
	
	}

	public Verse(int id, String chapter, String verse) {
		super();
		this.id = id;
		this.chapter = chapter;
		this.verse = verse;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getChapter() {
		return chapter;
	}

	public void setChapter(String chapter) {
		this.chapter = chapter;
	}

	public String getVerse() {
		return verse;
	}

	public void setVerse(String verse) {
		this.verse = verse;
	}

	@Override
	public String toString() {
		return "Verse [id=" + id + ", chapter=" + chapter + ", verse=" + verse + "]";
	}
	

}
