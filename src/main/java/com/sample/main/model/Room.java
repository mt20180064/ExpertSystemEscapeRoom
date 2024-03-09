package com.sample.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;



@Entity
@Table(name="room")
public class Room {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
@Column(name="name_of_room")
  String name;
@Column (name="genre")
  String genre;
@Column (name="level")
  int level;
@Transient
  boolean event = false;
@Transient
  Age age = Age.ADULTS;
@Transient
  Duration duration = Duration.HOUR;
  @Column (name="num_of_rooms_on_loc")
  Long numberOfRoomsOnLocation;
  
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}



public int getLevel() {
	return level;
}
public void setLevel(int level) {
	this.level = level;
}
public Age getAge() {
	return age;
}
public void setAge(Age age) {
	this.age = age;
}
public boolean isEvent() {
	return event;
}
public void setEvent(boolean event) {
	this.event = event;
}
public Duration getDuration() {
	return duration;
}
public void setDuration(Duration duration) {
	this.duration = duration;
}
public Long getNumberOfRoomsOnLocation() {
	return numberOfRoomsOnLocation;
}
public void setNumberOfRoomsOnLocation(Long numberOfRoomsOnLocation) {
	this.numberOfRoomsOnLocation = numberOfRoomsOnLocation;
}



public String getGenre() {
	return genre;
}
public void setGenre(String genre) {
	this.genre = genre;
}
public String determineGenre(Genre genre) {
    int highest = Math.max(Math.max(Math.max(Math.max(Math.max(genre.getHorror(), genre.getThematic()), genre.getAmbiental()), genre.getMysterious()), genre.getDetective()), genre.getSpecific());
    
    if (highest == genre.getHorror()) return "HORROR";
    if (highest == genre.getThematic()) return "THEMATIC";
    if (highest == genre.getAmbiental()) return "AMBIENTAL";
    if (highest == genre.getMysterious()) return "MYSTERIOUS";
    if (highest == genre.getDetective()) return "DETECTIVE";
    if (highest == genre.getSpecific()) return "SPECIFIC";
    
    return "UNDETERMINED"; 
}
@Override
public String toString() {
	return "Room [id=" + id + ", name=" + name + ", genre=" + genre + ", level=" + level + ", event=" + event + ", age="
			+ age + ", duration=" + duration + ", numberOfRoomsOnLocation=" + numberOfRoomsOnLocation + "]";
}
  
}
