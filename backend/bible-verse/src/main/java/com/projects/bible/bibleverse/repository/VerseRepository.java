package com.projects.bible.bibleverse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projects.bible.bibleverse.model.Verse;

@Repository
public interface VerseRepository extends JpaRepository<Verse, Integer> {

}
