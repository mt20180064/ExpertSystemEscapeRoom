package com.sample.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="location")
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 Long id;
	@Column (name="address")
	 String address;
	@Column (name="company")
	 String company;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	@Override
	public String toString() {
		return "Location [id=" + id + ", address=" + address + ", company=" + company + "]";
	}
	
	
	public Location(Long id, String address, String company) {
		super();
		this.id = id;
		this.address = address;
		this.company = company;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public Location() {
		// TODO Auto-generated constructor stub
	}
}
