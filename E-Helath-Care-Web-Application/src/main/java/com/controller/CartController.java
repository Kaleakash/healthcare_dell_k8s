package com.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Medicine;
import com.service.CartService;
import com.service.MedicineOrderDetailsService;

@RestController
@RequestMapping(value = "api/cart")
@CrossOrigin()
public class CartController {

	@Autowired
	CartService cartService;
	
	@Autowired
	MedicineOrderDetailsService medicineOrderDetailsService;
	
		@PostMapping(value = "getMedicine",consumes = MediaType.APPLICATION_JSON_VALUE)
		public List<Medicine> getCartMedicine(@RequestBody Map<?,?> cart) {
			return cartService.cartDetails(cart);
		}
		@PostMapping(value="placeOrder/{email}/{total}")
		public String placeOrder(@RequestBody List<Medicine> listOfMedicine, @PathVariable("email") String email, @PathVariable("total") float total) {
			
			System.out.println(listOfMedicine);
			return medicineOrderDetailsService.placeOrderDetails(listOfMedicine, email, total);
		
		}
}
