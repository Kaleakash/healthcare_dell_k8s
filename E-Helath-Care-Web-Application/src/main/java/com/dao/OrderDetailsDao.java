package com.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.entity.Orderdetails;

@Repository
public interface OrderDetailsDao extends JpaRepository<Orderdetails, Integer>{

	@Query("from Orderdetails o where o.emailid = :emailid")
	public List<Orderdetails> getOrderIdUsingEmail(@Param("emailid") String emailid);
}
