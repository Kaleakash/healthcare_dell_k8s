package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Medicineorderdetails;
import com.service.MedicineOrderDetailsService;
import com.service.OrderDetailsService;

@RestController
@RequestMapping(value = "api/Orders")
@CrossOrigin()
public class OrderDetailsController {

	@Autowired
	OrderDetailsService orderDetailsService;
	
	@GetMapping(value = "orderDetails/{email}")
	public List<Medicineorderdetails> getAllOrderDetails(@PathVariable("email") String email) {
							return orderDetailsService.getAllOrderDetails(email);
	}
	
	@Autowired
	MedicineOrderDetailsService medicineOrderDetailsService;
	@GetMapping(value = "allOrdersDetails")
	public List<Medicineorderdetails> getAllOrderDetails() {
		return medicineOrderDetailsService.getAllMedicineDetails();
	}
	
}
