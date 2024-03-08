package com.sample.main.dto;

import com.sample.model.Age;
import com.sample.model.Duration;
import com.sample.model.Level;

public class RoomDto {
	 
	  
	  
	  boolean event = false;
	  Duration duration = Duration.HOUR;
	 public RoomDto() {
		// TODO Auto-generated constructor stub
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
	public RoomDto(boolean event, Duration duration) {
		super();
		this.event = event;
		this.duration = duration;
	}
	 
}
