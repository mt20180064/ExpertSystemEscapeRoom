package com.sample.main.dto;

public class TeamDto {
  
	boolean teamwork;
	int years;
	int numberOfPlayers;
	int gamesPlayed;
	int gamesSolved;
	String goal;
	String activityToLike;
	String activityToHate;
	public TeamDto() {
		// TODO Auto-generated constructor stub
	}
	public boolean isTeamwork() {
		return teamwork;
	}
	public void setTeamwork(boolean teamwork) {
		this.teamwork = teamwork;
	}
	public int getYears() {
		return years;
	}
	public void setYears(int years) {
		this.years = years;
	}
	public int getNumberOfPlayers() {
		return numberOfPlayers;
	}
	public void setNumberOfPlayers(int numberOfPlayers) {
		this.numberOfPlayers = numberOfPlayers;
	}
	public int getGamesPlayed() {
		return gamesPlayed;
	}
	public void setGamesPlayed(int gamesPlayed) {
		this.gamesPlayed = gamesPlayed;
	}
	public int getGamesSolved() {
		return gamesSolved;
	}
	public void setGamesSolved(int gamesSolved) {
		this.gamesSolved = gamesSolved;
	}
	public String getGoal() {
		return goal;
	}
	public void setGoal(String goal) {
		this.goal = goal;
	}
	public String getActivityToLike() {
		return activityToLike;
	}
	public void setActivityToLike(String activityToLike) {
		this.activityToLike = activityToLike;
	}
	public String getActivityToHate() {
		return activityToHate;
	}
	public void setActivityToHate(String activityToHate) {
		this.activityToHate = activityToHate;
	}
	public TeamDto(boolean teamwork, int years, int numberOfPlayers, int gamesPlayed, int gamesSolved, String goal,
			String activityToLike, String activityToHate) {
		super();
		this.teamwork = teamwork;
		this.years = years;
		this.numberOfPlayers = numberOfPlayers;
		this.gamesPlayed = gamesPlayed;
		this.gamesSolved = gamesSolved;
		this.goal = goal;
		this.activityToLike = activityToLike;
		this.activityToHate = activityToHate;
	}
	
	
}
