package com.sample.main;

import org.apache.http.HttpStatus;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.main.dto.CombinedDto;
import com.sample.main.dto.GenreDto;
import com.sample.main.dto.RoomDto;
import com.sample.main.dto.TeamDto;
import com.sample.model.Activity;
import com.sample.model.Genre;
import com.sample.model.Goal;
import com.sample.model.Room;
import com.sample.model.Team;

@RestController
@RequestMapping("/")
public class Controller {

	
	 @GetMapping("/hello")
	    public String hello() {
	        return "Hello World";
	    }
	 
	 @PostMapping("save")
	 public ResponseEntity<Room> saveData(@RequestBody CombinedDto combinedDto) {
		System.out.println(combinedDto.getTeamDto());
		Team team = new Team();
		Genre genre = new Genre();
		Room room = new Room();
		
		KieServices ks = KieServices.Factory.get();
	    KieContainer kContainer = ks.getKieClasspathContainer();
    	KieSession kSession = kContainer.newKieSession("ksession-rules");
	    
		team.setActivityToHate(Enum.valueOf(Activity.class, combinedDto.getTeamDto().getActivityToHate().toUpperCase()));
	    team.setActivityToLike(Enum.valueOf(Activity.class, combinedDto.getTeamDto().getActivityToLike().toUpperCase()));
	    team.setGoal(Enum.valueOf(Goal.class, combinedDto.getTeamDto().getGoal().toUpperCase()));
	    team.setGamesPlayed(combinedDto.getTeamDto().getGamesPlayed());
	    team.setGamesSolved(combinedDto.getTeamDto().getGamesSolved());
	    team.setNumberOfPlayers(combinedDto.getTeamDto().getNumberOfPlayers());
	    team.setTeamwork(combinedDto.getTeamDto().isTeamwork());
	    team.setYears(combinedDto.getTeamDto().getYears());
	    
	    genre.setMovie(combinedDto.getGenreDto().getMovie());
	    genre.setBook(combinedDto.getGenreDto().getBook());
	    genre.setPicture(combinedDto.getGenreDto().getPicture());
	    genre.setDebateTopic(combinedDto.getGenreDto().getDebateTopic());
	    
	    
	    room.setDuration(combinedDto.getRoomDto().getDuration());
	    room.setEvent(combinedDto.getRoomDto().isEvent());
	    
	    System.out.println("pre es:");
	    System.out.println(team);
	    System.out.println(genre);
	    System.out.println(room);
	    
	    kSession.insert(team);
	    kSession.insert(genre);
	    kSession.insert(room);
	    kSession.fireAllRules();
	    
	    System.out.println("posle es:");
	    System.out.println(team);
	    System.out.println(genre);
	    System.out.println(room);
	    return ResponseEntity.status(HttpStatus.SC_ACCEPTED).body(room);
	 }
	 
	 @PostMapping("/genre")
	 public GenreDto saveGenre (@RequestBody GenreDto genreDto) {
		 System.out.println(genreDto);
		 return genreDto;
	 }
}