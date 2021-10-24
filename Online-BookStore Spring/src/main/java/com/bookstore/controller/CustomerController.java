package com.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@PostMapping("/add")
	public void createUser(@RequestBody Customer user) {
		CustomerRepository.save(user);
	}
	
	@DeleteMapping(path = { "/{id}" })
	public Customer deleteUser(@PathVariable("id") long id) {
		Customer user = CustomerRepository.getById(id);
		CustomerRepository.deleteById(id);
		return user;
	}



}

