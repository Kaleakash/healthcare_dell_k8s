package com.dao;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.entity.Medicine;

@Repository
public interface MedicianDao extends JpaRepository<Medicine, Integer>{

	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update Medicine mm set mm.medicinename = :medicinename, mm.companyname = :companyname, "
			+ "mm.price = :price, mm.quantity = :quantity, mm.expireDate = :expiredate where mm.mid = :mid")
	public int updateMedicianDetails(@Param("medicinename") String medicinename, @Param("companyname") String companyName, 
			@Param("price")  float price, @Param("quantity") int quantity, 
			@Param("expiredate") LocalDate expiredate, @Param("mid") int mid);

	@Query("from Medicine mm where mm.uses like %:uses% ")
	public List<Medicine> searchMedicine(@Param("uses") String uses);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update Medicine mm set mm.quantity = mm.quantity - :quantity where mm.mid = :mid")
	public int updateOrderQuantity(@Param("mid") int mid,@Param("quantity") int quantity);
}
