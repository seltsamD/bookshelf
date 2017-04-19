package com.nakhod.dto;

import com.nakhod.entity.Genre;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class GenreDto {
    private long id;
    private String name;
    private Set<BookDto> bookDto;
    int countBook;

    public GenreDto() {
    }

    public GenreDto(long id, String name, int countBook, Set<BookDto> books) {
        this.id = id;
        this.name = name;
        this.countBook = countBook;
        this.bookDto = books;
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

    public static GenreDto createToDto(Genre genre) {
        GenreDto dto = new GenreDto();
        dto.setId(genre.getId());
        dto.setName(genre.getName());
        dto.setCountBook(genre.getBooks().size());
        dto.setBookDto(genre.getBooks().stream().map(BookDto::createToDto).collect(Collectors.toSet()));

        return dto;
    }

    public Set<BookDto> getBookDto() {
        return bookDto;
    }

    public void setBookDto(Set<BookDto> bookDto) {
        this.bookDto = bookDto;
    }

    public int getCountBook() {
        return countBook;
    }

    public void setCountBook(int countBook) {
        this.countBook = countBook;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GenreDto genreDto = (GenreDto) o;
        return id == genreDto.id &&
                countBook == genreDto.countBook &&
                Objects.equals(name, genreDto.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, countBook);
    }
}
