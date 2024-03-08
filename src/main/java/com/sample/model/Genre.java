package com.sample.model;

public class Genre {
//ovo su postojeci zanrovi soba
	int horror;
	int thematic;
	int ambiental;
	int mysterious;
	int detective;
	int specific;
	
//atributi na osnovu kojih se odredjuje zanr
	Movie movie;
	Book book;
	Picture picture;
	DebateTopic debateTopic;
	
	public int getHorror() {
		return horror;
	}
	public void setHorror(int horror) {
		this.horror = horror;
	}
	public int getThematic() {
		return thematic;
	}
	public void setThematic(int thematic) {
		this.thematic = thematic;
	}
	public int getAmbiental() {
		return ambiental;
	}
	public void setAmbiental(int ambiental) {
		this.ambiental = ambiental;
	}
	public int getMysterious() {
		return mysterious;
	}
	public void setMysterious(int mysterious) {
		this.mysterious = mysterious;
	}
	public int getDetective() {
		return detective;
	}
	public void setDetective(int detective) {
		this.detective = detective;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public Picture getPicture() {
		return picture;
	}
	public void setPicture(Picture picture) {
		this.picture = picture;
	}
	public DebateTopic getDebateTopic() {
		return debateTopic;
	}
	public void setDebateTopic(DebateTopic debateTopic) {
		this.debateTopic = debateTopic;
	}
	public int getSpecific() {
		return specific;
	}
	public void setSpecific(int specific) {
		this.specific = specific;
	}
	@Override
	public String toString() {
		return "Genre [horror=" + horror + ", thematic=" + thematic + ", ambiental=" + ambiental + ", mysterious="
				+ mysterious + ", detective=" + detective + ", specific=" + specific + "]";
	}
	public Movie getMovie() {
		return movie;
	}
	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	
	
}
