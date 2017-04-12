package com.nakhod.controller;

import com.nakhod.entity.Author;
import com.nakhod.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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

    @DeleteMapping
    public void deleteAuthor(@PathVariable("id") Long id){
        authorRepository.delete(id);
    }


}
