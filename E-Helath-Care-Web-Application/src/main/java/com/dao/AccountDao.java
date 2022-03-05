package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.entity.Account;

@Repository
public interface AccountDao extends JpaRepository<Account, Integer>{

	@Query("select acc from Account acc where acc.email = :email")
	public Account getAccountDetails(@Param("email") String email);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update Account acc set acc.amount = acc.amount + :amount where acc.accnumber = :accno")
	public int addFunds(@Param("accno") int accno, @Param("amount") float amount);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update Account acc set acc.amount = acc.amount - :amount where acc.accnumber = :accno")
	public int amountDebits(@Param("accno") int accno, @Param("amount") float amount);
}
