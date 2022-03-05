package com.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Medicineorderdetails {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="modid")
private int modid;
@Column(name="mid")
private int mid;
@Column(name="medicinename")
private String medicinename;
@Column(name="price")
private float price;
@Column(name="quantity")
private int quantity;
@Column(name="orderid")
private int orderid;
@Column(name = "emailid")
private String emailid;
@Column(name="orderdate")
private LocalDateTime orderdate;
public int getModid() {
	return modid;
}
public void setModid(int modid) {
	this.modid = modid;
}
public int getMid() {
	return mid;
}

public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public void setMid(int mid) {
	this.mid = mid;
}
public String getMedicinename() {
	return medicinename;
}
public void setMedicinename(String medicinename) {
	this.medicinename = medicinename;
}
public float getPrice() {
	return price;
}
public void setPrice(float price) {
	this.price = price;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
public int getOrderid() {
	return orderid;
}
public void setOrderid(int orderId) {
	this.orderid = orderId;
}
public LocalDateTime getOrderdate() {
	return orderdate;
}
public void setOrderdate(LocalDateTime orderdate) {
	this.orderdate = orderdate;
}

}
