package com.sample.main;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.main.dto.TeamDto;
import com.sample.model.Activity;
import com.sample.model.Goal;
import com.sample.model.Team;

@RestController
@RequestMapping("/team")
public class TeamController {

	
	 @GetMapping("/hello")
	    public String hello() {
	        return "Hello World";
	    }
	 
	 @PostMapping("/save")
	 public Team saveTeam (@RequestBody TeamDto teamDto) {
		System.out.println(teamDto);
		Team team = new Team();
		
		KieServices ks = KieServices.Factory.get();
	    KieContainer kContainer = ks.getKieClasspathContainer();
    	KieSession kSession = kContainer.newKieSession("ksession-rules");
	    
		team.setActivityToHate(Enum.valueOf(Activity.class, teamDto.getActivityToHate().toUpperCase()));
	    team.setActivityToLike(Enum.valueOf(Activity.class, teamDto.getActivityToLike().toUpperCase()));
	    team.setGoal(Enum.valueOf(Goal.class, teamDto.getGoal().toUpperCase()));
	    team.setGamesPlayed(teamDto.getGamesPlayed());
	    team.setGamesSolved(teamDto.getGamesSolved());
	    team.setNumberOfPlayers(teamDto.getNumberOfPlayers());
	    team.setTeamwork(teamDto.isTeamwork());
	    team.setYears(teamDto.getYears());
	    System.out.println(team);
	    kSession.insert(team);
	    kSession.fireAllRules();
	    System.out.println(team);
		return team;
	 }
}
