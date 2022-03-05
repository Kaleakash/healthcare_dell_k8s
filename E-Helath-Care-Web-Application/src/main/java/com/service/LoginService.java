package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.AccountDao;
import com.dao.LoginDao;
import com.dao.UserDao;
import com.entity.Account;
import com.entity.Login;
import com.entity.User;

@Service
public class LoginService {

	@Autowired
	LoginDao loginDao;
	
	@Autowired
	UserDao userDao;
	@Autowired
	AccountDao accountDao;
	public String createAccount(User user) {
						Login login = new Login();
						login.setEmail(user.getEmail());
						login.setPassword(user.getPassword());
						login.setTypeOfUser("user");
						Login ll = loginDao.save(login);
						User uu = userDao.save(user);
						Account ac = new Account();
						ac.setAmount(1000);
						ac.setEmail(user.getEmail());
						accountDao.save(ac);
						if(uu!=null) {
							return "Account created";
						}else {
							return "Account didn't create";
						}
					}
	public String checkUserLogin(Login login) {
			Login ll = loginDao.checkUserLogin(login.getEmail(), login.getPassword());
			if(ll==null) {
				return "Invalid credential details";
			}else {
				return "success";
			}
	}
}
