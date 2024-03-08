package com.sample.main.dto;

public class CombinedDto {
	private TeamDto teamDto;
    private GenreDto genreDto;
    private RoomDto roomDto;
	public TeamDto getTeamDto() {
		return teamDto;
	}
	public void setTeamDto(TeamDto teamDto) {
		this.teamDto = teamDto;
	}
	public GenreDto getGenreDto() {
		return genreDto;
	}
	public void setGenreDto(GenreDto genreDto) {
		this.genreDto = genreDto;
	}
	public RoomDto getRoomDto() {
		return roomDto;
	}
	public void setRoomDto(RoomDto roomDto) {
		this.roomDto = roomDto;
	}
    
    public CombinedDto() {
		// TODO Auto-generated constructor stub
	}
	public CombinedDto(TeamDto teamDto, GenreDto genreDto, RoomDto roomDto) {
		super();
		this.teamDto = teamDto;
		this.genreDto = genreDto;
		this.roomDto = roomDto;
	}
}
