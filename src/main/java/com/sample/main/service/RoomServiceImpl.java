package com.sample.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sample.main.model.Room;
import com.sample.main.repository.RoomRepository;

@Service
public class RoomServiceImpl implements RoomService{

	@Autowired
	private RoomRepository roomRepository;
	
	@Override
	public List<Room> findRoomsBasedOnCriteria(Room room) {
		
	
		   if (room.isEvent()) {
			  
	            return roomRepository.findByNumberOfRoomsOnLocation(
	                    room.getNumberOfRoomsOnLocation());
	        } else {
	            return roomRepository.findByLevelAndGenre(
	            		room.getLevel(), room.getGenre());
	        }
	}

	@Override
	public List<Room> roomsByNumOnLoc(Long numOfRoomsOnLoc) {
		
		return roomRepository.findByNumberOfRoomsOnLocation(
                numOfRoomsOnLoc);
		
	}

	

}
