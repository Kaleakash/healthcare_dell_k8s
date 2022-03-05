package com.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Orderdetails {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="orderid")
private int orderid;
@Column(name="emailid")
private String emailid;
@Column(name="totalamount")
private float totalamount;

public int getOrderid() {
	return orderid;
}
public void setOrderid(int orderid) {
	this.orderid = orderid;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public float getTotalamount() {
	return totalamount;
}
public void setTotalamount(float totalamount) {
	this.totalamount = totalamount;
}

@Override
public String toString() {
	return "Orderdetails [orderid=" + orderid + ", emailid=" + emailid + ", totalamount=" + totalamount + "]";
}

}
