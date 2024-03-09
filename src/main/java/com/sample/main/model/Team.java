package com.sample.main.model;


public class Team {
	boolean teamwork;
 Type type;
 int years;
 int numberOfPlayers;
 int gamesPlayed;
 int gamesSolved;
 Status status;
 Goal goal;
 Activity activityToLike;
 Activity activityToHate;
public boolean isTeamwork() {
	return teamwork;
}
public void setTeamwork(boolean teamwork) {
	this.teamwork = teamwork;
}
public Type getType() {
	return type;
}
public void setType(Type type) {
	this.type = type;
}
public Status getStatus() {
	return status;
}
public void setStatus(Status status) {
	this.status = status;
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
public Goal getGoal() {
	return goal;
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
public void setGoal(Goal goal) {
	this.goal = goal;
}
public Activity getActivityToLike() {
	return activityToLike;
}
public void setActivityToLike(Activity activityToLike) {
	this.activityToLike = activityToLike;
}
public Activity getActivityToHate() {
	return activityToHate;
}
public void setActivityToHate(Activity activityToHate) {
	this.activityToHate = activityToHate;
}
@Override
public String toString() {
	return "Team [teamwork=" + teamwork + ", type=" + type + ", years=" + years + ", numberOfPlayers=" + numberOfPlayers
			+ ", gamesPlayed=" + gamesPlayed + ", gamesSolved=" + gamesSolved + ", status=" + status + ", goal=" + goal
			+ ", activityToLike=" + activityToLike + ", activityToHate=" + activityToHate + "]";
}


 
 
 
}
