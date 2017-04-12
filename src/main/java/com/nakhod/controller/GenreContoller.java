package com.nakhod.controller;

import com.nakhod.dto.GenreDto;
import com.nakhod.entity.Genre;
import com.nakhod.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/restful/genre")
public class GenreContoller {
    @Autowired
    GenreRepository genreRepository;

    @GetMapping
    public Iterable<Genre> findAll() {
        return genreRepository.findAll();
    }


    @GetMapping("/{id}")
    public Genre findOne(@PathVariable("id") Long id) {
        return genreRepository.findOne(id);
    }

    @PostMapping
    public Genre saveGenre(@RequestBody Genre genre) {
        return genreRepository.save(genre);
    }


    @DeleteMapping("/{id}")
    public void deleteGenre(@PathVariable("id") Long id) {
         genreRepository.delete(id);
    }
}
