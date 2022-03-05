package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UserDao;
import com.entity.User;

@Service
public class UserService {

	
	@Autowired
	UserDao userDao;
	
	public User findUser(String email) {
			Optional<User> op = userDao.findById(email);
			if(op.isPresent()) {
				return op.get();
			}else {
				return null;
			}
	}
	
	public String editUser(User user) {
		if(userDao.editUser(user.getPassword(), user.getPhonenumber(), user.getAddress(), user.getEmail())>0) {
			return "Profile updated succesfully";
		}else {
			return "Profile didn' update";
		}
	}
}
