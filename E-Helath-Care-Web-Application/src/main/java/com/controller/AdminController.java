package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Login;
import com.entity.Medicine;
import com.service.AdminService;
import com.service.MedicineService;


@RestController
@RequestMapping(value = "api/admin")
@CrossOrigin()
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@Autowired
	MedicineService medicianService;
	
	@PostMapping(value  ="/login")
	public String checkAdminLogin(@RequestBody Login login) {
			System.out.println(login.getEmail()+" "+login.getPassword());
			return adminService.checkAdmin(login);
	}
	@PostMapping(value="/addMedicine")
	public String addMedicianDetails(@RequestBody Medicine medician) {
		System.out.println(medician);
				return medicianService.storeMedicianDetails(medician);
	}
	
	@PutMapping(value ="/updateMedicine")
	public String updateMedicianDetails(@RequestBody Medicine medician) {
		return medicianService.updateMedicianDetails(medician);
	}
	@GetMapping(value  ="/getAllMedicine")
	public List<Medicine> getAllMedicineDetails() {
			return medicianService.getAllMedicineDetails();
	}
	
	@DeleteMapping(value="/deleteMedicineById/{mid}")
	public String deleteMedicineById(@PathVariable("mid") int mid) {
		return medicianService.deleteMedicine(mid);
	}
	
	@GetMapping(value="/getMedicineById/{mid}")
	public Medicine getMedicineById(@PathVariable("mid") int mid) {
		System.out.println("Mid is "+mid);
		return medicianService.getMedicineById(mid);
	}
}
