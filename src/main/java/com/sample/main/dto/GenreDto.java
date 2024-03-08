package com.sample.main.dto;

import com.sample.model.Book;
import com.sample.model.DebateTopic;
import com.sample.model.Movie;
import com.sample.model.Picture;

public class GenreDto {
	Movie movie;
	Book book;
	Picture picture;
	DebateTopic debateTopic;
	public Movie getMovie() {
		return movie;
	}
	public void setMovie(Movie movie) {
		this.movie = movie;
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
	
	public GenreDto() {
		// TODO Auto-generated constructor stub
	}
	public GenreDto(Movie movie, Book book, Picture picture, DebateTopic debateTopic) {
		super();
		this.movie = movie;
		this.book = book;
		this.picture = picture;
		this.debateTopic = debateTopic;
	}
	
}
