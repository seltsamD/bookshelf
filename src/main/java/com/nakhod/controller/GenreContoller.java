package com.nakhod.controller;

import com.nakhod.dto.GenreDto;
import com.nakhod.entity.Genre;
import com.nakhod.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/restful/genre")
public class GenreContoller {
    @Autowired
    GenreRepository genreRepository;

    @GetMapping
    public Iterable<GenreDto> findAll() {
        Set<GenreDto> genreDto = new HashSet<>();
        for (Genre genre : genreRepository.findAll()) {
            genreDto.add(GenreDto.createToDto((genre)));
        }
        return genreDto;
    }


    @GetMapping("/{id}")
    public Genre findOne(@PathVariable("id") Long id) {
        return genreRepository.findOne(id);
    }

    @PutMapping
    public Genre updateGenre(@RequestBody Genre genre) {
        return genreRepository.save(genre);
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
