package com.projects.bible.bibleverse.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projects.bible.bibleverse.model.Pill;

@Repository
public interface PillRepository extends JpaRepository<Pill, Integer> {
	
	public Optional<List<Pill>> findByUsername(String username);

}
