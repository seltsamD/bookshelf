package com.nakhod.repository;

import com.nakhod.entity.Author;
import com.nakhod.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}
