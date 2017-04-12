package com.nakhod.repository;


import com.nakhod.dto.GenreDto;
import com.nakhod.entity.Genre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.HashMap;
import java.util.List;

public interface GenreRepository extends CrudRepository<Genre, Long> {
//    @Query("SELECT genre.id as id, genre.name as name, count(book.id) as countBook FROM Genre genre" +
//            " left join genre.books book")
//    List<Object> getGenreWithcount();
}
