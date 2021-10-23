package com.bookstore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
