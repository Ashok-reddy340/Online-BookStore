package com.bookstore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
