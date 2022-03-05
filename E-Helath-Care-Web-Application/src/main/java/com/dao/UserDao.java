package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.entity.User;

public interface UserDao extends JpaRepository<User, String>{

	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update User user set user.password = :password,user.phonenumber =:phonenumber, user.address=:address where user.email = :email")
	public int editUser(@Param("password") String password, @Param("phonenumber") String phonenumber,@Param("address") String address, @Param("email") String email);
	
}
