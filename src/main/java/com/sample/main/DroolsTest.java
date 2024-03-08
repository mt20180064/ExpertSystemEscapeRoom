package com.sample.main;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import com.sample.model.Activity;
import com.sample.model.Book;
import com.sample.model.DebateTopic;
import com.sample.model.Duration;
import com.sample.model.Genre;
import com.sample.model.Goal;
import com.sample.model.Movie;
import com.sample.model.Picture;
import com.sample.model.Room;
import com.sample.model.Team;

/**
 * This is a sample class to launch a rule.
 */
public class DroolsTest {

    public static final void main(String[] args) {
        try {
        	KieServices ks = KieServices.Factory.get();
    	    KieContainer kContainer = ks.getKieClasspathContainer();
        	KieSession kSession = kContainer.newKieSession("ksession-rules");

            
        	Room r = new Room();
        	Team t = new Team ();
        	Genre g = new Genre();
        	
        	
        	r.setEvent(false);
            r.setDuration(Duration.HOURS);
            
        	t.setGamesPlayed(4);
        	t.setGamesSolved(4);
        	t.setNumberOfPlayers(5);
        	t.setYears(45);
        	t.setTeamwork(true);
        	t.setGoal(Goal.ACTION);
        	t.setTeamwork(true);
        	t.setActivityToHate(Activity.PAINTBALL);
        	t.setActivityToLike(Activity.GAMESCLUB);
        	
        	g.setMovie(Movie.MYSTERY);
        	g.setBook(Book.PRIDE_AND_PREJUDICE);
        	g.setDebateTopic(DebateTopic.HISTORY);
        	g.setPicture(Picture.CREEPY);
        	
        	
        	if (t.getNumberOfPlayers()>6 && !r.isEvent()) {
        		throw new Exception("Maksimalan broj ljudi koji moze igrati jednu igru je 6. Ukoliko vas je vise i hocete da rezervisete dve, to se gleda kao dogadjaj.");
        	}
        	kSession.insert(g);
            kSession.insert(t);
            kSession.insert(r);
            
            kSession.fireAllRules();
            System.out.println(r);
            System.out.println(t);
            System.out.println(g);
            
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    
    

}
