package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.MedicineOrderDetailsDao;
import com.dao.OrderDetailsDao;
import com.entity.Medicineorderdetails;
import com.entity.Orderdetails;

@Service
public class OrderDetailsService {

	@Autowired
	OrderDetailsDao orderDetailsDao;
	@Autowired
	MedicineOrderDetailsDao medicineOrderDetailsDao;
	
	public List<Medicineorderdetails> getAllOrderDetails(String emailid) {
			List<Medicineorderdetails> listOfOrderDetails = new ArrayList<>();
			List<Orderdetails> orderDetails = orderDetailsDao.getOrderIdUsingEmail(emailid);
							for(Orderdetails od : orderDetails) {
								List<Medicineorderdetails>  medicineOrdersDetaails = medicineOrderDetailsDao.getAllMedicineOrderDetails(od.getOrderid());
												for(Medicineorderdetails morder:medicineOrdersDetaails) {
													listOfOrderDetails.add(morder);
												}
							}
			return listOfOrderDetails;
	}
}
