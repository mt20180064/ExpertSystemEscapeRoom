package com.sample.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sample.main.model.Room;

public interface RoomRepository extends JpaRepository<Room, Long>{
	@Query("SELECT r FROM Room r WHERE r.level = :level AND r.genre = :genre")
	List<Room> findByLevelAndGenre(@Param("level") int level, @Param("genre") String genre);
	@Query("SELECT r FROM Room r WHERE r.level= :level AND r.numberOfRoomsOnLocation = :num_of_rooms_on_loc")
	 List<Room> findByLevelAndNumberOfRoomsOnLocation(@Param ("level") int level,@Param("num_of_rooms_on_loc") Long numberOfRoomsOnLocation);



}
