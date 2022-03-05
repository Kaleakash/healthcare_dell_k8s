package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Account;
import com.service.AccountService;

@RestController
@RequestMapping(value = "api/user")
@CrossOrigin()
public class AccountController {

	@Autowired
	AccountService accountService;
	
	@GetMapping(value ="accountInfo/{email}")
	public Account getAccountDetails(@PathVariable("email") String email) {
		return accountService.getAccountDetails(email);
	}
	@PutMapping(value = "addFunds")
	public String addFunds(@RequestBody Account account) {
			return accountService.addFunds(account);
	}
}
