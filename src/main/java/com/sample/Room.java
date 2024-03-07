package com.sample;

public class Room {
  Long id;
  String name;
  String genre;
  Level level;
  boolean event = false;
  Age age = Age.ADULTS;
  Duration duration = Duration.HOUR;
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

public Level getLevel() {
	return level;
}
public void setLevel(Level level) {
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
