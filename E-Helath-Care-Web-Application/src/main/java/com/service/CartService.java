package com.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.MedicianDao;
import com.entity.Medicine;

@Service
public class CartService {

	@Autowired
	MedicianDao medicineDao;
	
	public List<Medicine> cartDetails( Map<?,?> cart) {
		List<Medicine> cartMedicine = new ArrayList<>();
		Set<?> ss =  cart.entrySet();
		Iterator<?> li = ss.iterator();
		while(li.hasNext()) {
			Map.Entry<?, ?> me = (Map.Entry<?, ?>)li.next();
			int mid = Integer.parseInt(me.getKey().toString());
			Optional<Medicine> op  = medicineDao.findById(mid);
			if(op.isPresent()) {
				Medicine medicine= op.get();
				medicine.setQuantity(Integer.parseInt(me.getValue().toString()));
				cartMedicine.add(medicine);
			}
		}
		return cartMedicine;
	}
}
