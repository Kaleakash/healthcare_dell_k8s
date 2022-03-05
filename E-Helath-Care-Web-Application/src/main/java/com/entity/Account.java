package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Account {
@Id
@Column(name="accnumber")
private int accnumber;
@Column(name="amount")
private float amount;
@Column(name="email")
private String email;
public float getAmount() {
	return amount;
}

public int getAccnumber() {
	return accnumber;
}

public void setAccnumber(int accnumber) {
	this.accnumber = accnumber;
}

public void setAmount(float amount) {
	this.amount = amount;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}

}
