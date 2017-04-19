package com.nakhod.controller;

import com.nakhod.entity.Author;
import com.nakhod.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restful/author")
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping
    public Iterable<Author> findAll() {
        return authorRepository.findAll();
    }


    @GetMapping("/{id}")
    public Author findOne(@PathVariable("id") Long id) {
        return authorRepository.findOne(id);
    }

    @PostMapping
    public Author saveAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable("id") Long id) {
        authorRepository.delete(id);
    }

    @PutMapping
    public Author updateAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }
}
