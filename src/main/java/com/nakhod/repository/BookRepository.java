package com.nakhod.repository;


import com.nakhod.entity.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository  extends CrudRepository<Book, Long> {
}
