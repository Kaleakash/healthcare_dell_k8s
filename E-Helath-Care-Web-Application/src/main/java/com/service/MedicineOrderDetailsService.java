package com.service;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.AccountDao;
import com.dao.MedicianDao;
import com.dao.MedicineOrderDetailsDao;
import com.dao.OrderDetailsDao;
import com.entity.Account;
import com.entity.Medicine;
import com.entity.Medicineorderdetails;
import com.entity.Orderdetails;

@Service
public class MedicineOrderDetailsService {

	
	@Autowired
	OrderDetailsDao orderDetailsDao;
	
	@Autowired
	MedicineOrderDetailsDao medicineOrderDetailsDao;
	
	@Autowired
	MedicianDao medicineDao;
	
	@Autowired
	AccountDao accountDao;
	public String placeOrderDetails(List<Medicine> listOfMedicine,String email, float total) {
			try {
			Account acc =  accountDao.getAccountDetails(email);
			System.out.println(acc.getAccnumber()+" "+acc.getAmount()+" Total "+total);
			if(total > acc.getAmount()) {
				return "Insufficient amount you can't place the order ";
			}else {
			Orderdetails od = new Orderdetails();
			od.setEmailid(email);
			od.setTotalamount(total);
		   Orderdetails odref	= orderDetailsDao.save(od);
		   System.out.println(odref);
		   System.out.println(odref.getOrderid());
			Iterator<Medicine> li = listOfMedicine.iterator();
			while(li.hasNext()) {
				Medicineorderdetails mod = new Medicineorderdetails();
				Medicine mm = li.next();
				mod.setMid(mm.getMid());
				mod.setMedicinename(mm.getMedicinename());
				mod.setPrice(mm.getPrice());
				mod.setQuantity(mm.getQuantity());
				mod.setOrderid(odref.getOrderid());
				mod.setEmailid(odref.getEmailid());
				mod.setOrderdate(LocalDateTime.now());
				medicineOrderDetailsDao.save(mod);
				medicineDao.updateOrderQuantity(mm.getMid(), mm.getQuantity());
				accountDao.amountDebits(acc.getAccnumber(), total);
			}
			return "Order placed successfully";
			}
			}catch(Exception e) {
				System.out.println(e);
				return "Order didn't place";
			}
	}
	
	public List<Medicineorderdetails> getAllMedicineDetails() {
			return medicineOrderDetailsDao.findAll();
	}
}
