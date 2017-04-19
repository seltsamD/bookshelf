package com.nakhod.repository;


import com.nakhod.dto.GenreDto;
import com.nakhod.entity.Genre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.HashMap;
import java.util.List;

public interface GenreRepository extends CrudRepository<Genre, Long> {

}
