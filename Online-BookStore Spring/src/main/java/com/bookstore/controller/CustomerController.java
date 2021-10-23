package com.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.db.CustomerRepository;

import com.bookstore.model.Customer;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class CustomerController {

	@Autowired
	private CustomerRepository CustomerRepository;
	
	@GetMapping("/get")
	public List<Customer> getUsers() {
		return CustomerRepository.findAll();
	}

}

