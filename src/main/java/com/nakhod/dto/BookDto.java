package com.nakhod.dto;


import com.nakhod.entity.Book;

import java.io.Serializable;
import java.util.Objects;

public class BookDto implements Serializable {
    private long id;
    private String name;
    private long author_id;
    private long genre_id;
    private String isbn;
    private String description;
    private String genreName;
    private String authorName;

    public BookDto() {
    }

    public BookDto(long id, String name, long author_id, long genre_id, String isbn, String description) {
        this.id = id;
        this.name = name;
        this.author_id = author_id;
        this.genre_id = genre_id;
        this.isbn = isbn;
        this.description = description;
    }

    public Book createFromDto() {
        Book book = new Book();
        book.setId(this.getId());
        book.setName(this.getName());
        book.setIsbn(this.getIsbn());
        book.setDescription(this.getDescription());
        return book;
    }


    public static BookDto createToDto(Book book) {
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setName(book.getName());
        bookDto.setIsbn(book.getIsbn());
        bookDto.setDescription(book.getDescription());
        bookDto.setGenreName(book.getGenre().getName());
        bookDto.setAuthorName(book.getAuthor().getFirstname() + " " + book.getAuthor().getLastname());
        bookDto.setAuthor_id(book.getAuthor().getId());
        bookDto.setGenre_id(book.getGenre().getId());
        return bookDto;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(long author_id) {
        this.author_id = author_id;
    }

    public long getGenre_id() {
        return genre_id;
    }

    public void setGenre_id(long genre_id) {
        this.genre_id = genre_id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookDto bookDto = (BookDto) o;
        return id == bookDto.id &&
                Objects.equals(name, bookDto.name) &&
                Objects.equals(isbn, bookDto.isbn) &&
                Objects.equals(description, bookDto.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, isbn, description);
    }
}
