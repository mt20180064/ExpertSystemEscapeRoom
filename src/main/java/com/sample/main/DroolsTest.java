package com.sample.main;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import com.sample.main.model.Activity;
import com.sample.main.model.Book;
import com.sample.main.model.DebateTopic;
import com.sample.main.model.Duration;
import com.sample.main.model.Genre;
import com.sample.main.model.Goal;
import com.sample.main.model.Movie;
import com.sample.main.model.Picture;
import com.sample.main.model.Room;
import com.sample.main.model.Team;

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
        	
        	
        	r.setEvent(true);
           // r.setDuration(Duration.HOURS);
            
        	t.setGamesPlayed(4);
        	t.setGamesSolved(4);
        	t.setNumberOfPlayers(5);
        	t.setYears(45);
        	//t.setTeamwork(true);
        	//t.setGoal(Goal.Akcija);
        	t.setActivityToHate(Activity.Paintball);
        	t.setActivityToLike(Activity.Klub_drustvenih_igara);
        	
        	g.setMovie(Movie.Misterija);
        	g.setBook(Book.Gordost_i_predrasude);
        	g.setDebateTopic(DebateTopic.Istorija);
        	g.setPicture(Picture.Jeza);
        	
        	
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
