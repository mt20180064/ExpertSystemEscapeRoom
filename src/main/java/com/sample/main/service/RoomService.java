package com.sample.main.service;

import java.util.List;

import com.sample.main.model.Room;

public interface RoomService {
	List<Room> findRoomsBasedOnCriteria(Room room);

	List<Room> roomsByNumOnLoc(Long numOfRoomsOnLoc);
}
