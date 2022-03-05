package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.entity.Login;
import com.entity.User;

public interface LoginDao  extends JpaRepository<Login, String>{
	@Query("select l from Login l where l.email = :email and l.password = :password")
	public Login checkUserLogin(@Param("email") String email, @Param("password") String password);
	
}
