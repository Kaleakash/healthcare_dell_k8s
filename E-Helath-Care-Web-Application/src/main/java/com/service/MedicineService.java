package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.MedicianDao;
import com.entity.Medicine;

@Service
public class MedicineService {

	@Autowired
	MedicianDao medicianDao;
	
	public String storeMedicianDetails(Medicine medician) {
			Medicine mm=  medicianDao.save(medician);
			if(mm==null) {
					return "Mediciain record didn't store";
			}else {
				return "Medician record stored successfully";
			}
	}
	
	public String updateMedicianDetails(Medicine medician) {
		int result=medicianDao.updateMedicianDetails(medician.getMedicinename(),medician.getCompanyname(),
				medician.getPrice(), medician.getQuantity(),medician.getExpireDate(),medician.getMid());
		if(result>0) {
			return "updated";
		}else {
			return "didn' update";
		}
		}
	
	public List<Medicine> getAllMedicineDetails() {
		return medicianDao.findAll();
	}
	
	public 	String	deleteMedicine(int mid) {
		if(medicianDao.existsById(mid)) {
			medicianDao.deleteById(mid);
			return "Record deleted successfully";
		}else {
			return "Record didn't delete";
		}
		
	}
	
	public List<Medicine> searchMedicine(String uses){
		System.out.println(uses);
		return medicianDao.searchMedicine(uses);
	}
	
	public Medicine getMedicineById(int mid) {
		Optional<Medicine> op = medicianDao.findById(mid);
		if(op.isPresent()) {
				return op.get();
		}else {
			return null;
		}
		 
	}
}
