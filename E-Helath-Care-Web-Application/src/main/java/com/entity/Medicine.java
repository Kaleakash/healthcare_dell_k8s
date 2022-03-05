package com.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medicine {
@Id
@Column(name = "mid")
private int mid;
@Column(name = "medicinename")
private String medicinename;
@Column(name = "companyname")
private String companyname;
@Column(name = "price")
private float price;
@Column(name = "quantity")
private int quantity;
@Column(name = "uses")
private String uses;
@Column(name = "expiredate")
private LocalDate expireDate;
@Column(name = "imageurl")
private String imageUrl;
public int getMid() {
	return mid;
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
public String getCompanyname() {
	return companyname;
}
public void setCompanyName(String companyname) {
	this.companyname = companyname;
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
public String getUses() {
	return uses;
}
public void setUses(String uses) {
	this.uses = uses;
}
public LocalDate getExpireDate() {
	return expireDate;
}
public void setExpireDate(LocalDate expireDate) {
	this.expireDate = expireDate;
}
public String getImageUrl() {
	return imageUrl;
}
public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
}
@Override
public String toString() {
	return "Medicine [mid=" + mid + ", medicinename=" + medicinename + ", companyname=" + companyname + ", price="
			+ price + ", quantity=" + quantity + ", uses=" + uses + ", expireDate=" + expireDate + ", imageUrl="
			+ imageUrl + "]";
}

}
