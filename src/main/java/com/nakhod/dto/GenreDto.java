package com.nakhod.dto;

import java.util.Objects;

public class GenreDto {
    private long id;
    private String name;
    int countBook;

    public GenreDto() {
    }

    public GenreDto(long id, String name, int countBook) {
        this.id = id;
        this.name = name;
        this.countBook = countBook;
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

    public int getCount() {
        return countBook;
    }

    public void setCount(int countBook) {
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
