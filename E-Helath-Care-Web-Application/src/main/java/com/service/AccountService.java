package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.AccountDao;
import com.entity.Account;

@Service
public class AccountService {

	@Autowired
	AccountDao accountDao;
	public Account getAccountDetails(String email) {
		return accountDao.getAccountDetails(email);
	}
	
	public String addFunds(Account acc) {
		if(acc.getAmount()<0) {
			return "Amount must be +ve";
		}else if(accountDao.addFunds(acc.getAccnumber(), acc.getAmount())>0){
			return "Amount added successfully";
		}else {
			return "Amount did' added";
		}
	}
}
