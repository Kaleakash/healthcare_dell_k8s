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

import com.entity.Login;
import com.entity.User;
import com.service.LoginService;
import com.service.UserService;

@RestController
@RequestMapping(value="api/user")
@CrossOrigin()
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@Autowired
	UserService userService;
	
	@PostMapping(value  ="/login")
	public String checkUserLogin(@RequestBody Login login) {
			return  loginService.checkUserLogin(login);
	}
	
	@PostMapping(value="/signUp")
	public String createUserLOgin(@RequestBody User user) {
		return loginService.createAccount(user);
	}
	@GetMapping(value = "findUser/{email}")
	public User findUser(@PathVariable("email") String email) {
		return userService.findUser(email);
	}
	@PutMapping(value = "editUser")
	public String editUserDetails(@RequestBody User user) {
		return userService.editUser(user);
	}
}
