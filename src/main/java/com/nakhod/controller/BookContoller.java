package com.nakhod.controller;

import com.nakhod.dto.BookDto;
import com.nakhod.entity.Book;
import com.nakhod.repository.AuthorRepository;
import com.nakhod.repository.BookRepository;
import com.nakhod.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/restful/book")
public class BookContoller {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    GenreRepository genreRepository;

    @GetMapping
    public Iterable<BookDto> findAll() {
        List<BookDto> listDto = new ArrayList<BookDto>();
        for (Book book : bookRepository.findAll()) {
            listDto.add(BookDto.createToDto((book)));
        }
        return listDto;
    }


    @GetMapping("/{id}")
    public BookDto findOne(@PathVariable("id") Long id) {
        return BookDto.createToDto(bookRepository.findOne(id));
    }

    @PostMapping
    public Book saveBook(@RequestBody BookDto bookDto) {
        Book newBook = bookDto.createFromDto();
        newBook.setAuthor(authorRepository.findOne(bookDto.getAuthor_id()));
        newBook.setGenre(genreRepository.findOne(bookDto.getGenre_id()));
        return bookRepository.save(newBook);
    }

    @PutMapping
    public Book updateBook(@RequestBody BookDto bookDto) {
        Book newBook = bookRepository.findOne(bookDto.getId());
        newBook.setName(bookDto.getName());
        newBook.setIsbn(bookDto.getIsbn());
        newBook.setDescription(bookDto.getDescription());
        newBook.setAuthor(authorRepository.findOne(bookDto.getAuthor_id()));
        newBook.setGenre(genreRepository.findOne(bookDto.getGenre_id()));
        return bookRepository.save(newBook);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        bookRepository.delete(id);
    }
}
