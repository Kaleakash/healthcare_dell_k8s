create database healthcare;

use healthcare;
commit;

show tables;

drop table login;

create table login(
email varchar(25) primary key,
password varchar(25),
typeOfUser varchar(25));

insert into login values('admin@gmail.com','admin','admin');

select * from login;
delete from login where typeOfUser = 'user';

create table user(
email varchar(25) primary key references login(email),
password varchar(25),
firstname varchar(25) not null,
lastname varchar(25) not null,
dob date,
phonenumber varchar(10),
address varchar(10)
);
drop table user;
drop table login;

insert into login values('admin@gmail.com','admin','admin');

select * from login;
select * from user;

create table account(
accnumber int primary key auto_increment,
amount int default 1000,
email varchar(25),
constraint acc_fk foreign key(email) references user(email)
);
ALTER TABLE account AUTO_INCREMENT=1010;
drop table account;
select * from account;

drop table medician;

create table medicine(
mid int primary key auto_increment,
medicinename varchar(50) not null,
companyname varchar(50) not null,
price float not null,
quantity int not null, 
uses varchar(100),
expiredate date,
imageUrl blob
);

delete from medicine where mid=3;
drop table medicine;

select * from medicine where uses like '%fever%';

select  * from medicine;
commit;

create table OrderDetails(
orderId int primary key auto_increment,
emailId varchar(25),
totalamount float
);
drop table OrderDetails;

select * from orderDetails;
delete from orderdetails where orderId=3;

create table MedicineOrderDetails(
modid int primary key auto_increment,
mid int, 
medicinename varchar(25),
price float, 
quantity int,
orderId int, 
orderDate datetime,
emailId varchar(25),
constraint mod_fk foreign key(orderid) references OrderDetails(orderId)
);

drop table MedicineOrderDetails;

select * from MedicineOrderDetails;

select od.emailId,od.totalamount,meod.modid,meod.mid,meod.medicinename,meod.price,meod.quantity,meod.orderId,meod.orderDate from MedicineOrderDetails meod, OrderDetails od where meod.orderId=od.orderId;