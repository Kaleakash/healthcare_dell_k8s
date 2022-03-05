package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.AdminDao;
import com.entity.Login;

@Service
public class AdminService {

	@Autowired
	AdminDao adminDao;	
	
			public String checkAdmin(Login login) {
						Login ll = adminDao.checkAdminLogin(login.getEmail(), login.getPassword());
						if(ll==null) {
							return "Invalid Admin credintial";
						}else {
							return "success";
						}
			}
}
