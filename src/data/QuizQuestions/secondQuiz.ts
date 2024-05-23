// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import p2 from '../../img/p2.jpeg'

export const secondQuiz: Topic = {
  topic: 'secondQuiz',
  level: 'Intermediate',
  totalQuestions: 14,
  questions: [
    {
      question: 'Koliko imate godina (većina tima/prosek)?',
      choices: [
        '8-15',
        '16-25',
        '25+'
      ],
      type: 'MCQs',
     
      
    },
    {
      question: 'Koliko vas hoće da igra sobu?',
      choices: ['7-12','13-18','19-24','vise od 24'],
      type: 'MCQs',
     
    
    },
    {
      question: 'Koji je dogadjaj u pitanju?',
     choices: [
        'Rođendan',
        'Teambuilding',
        'Proslava firme',
        'Neki drugi događaj koji uključuje veći broj ljudi',
      ],
      type: 'MCQs',   
    },
    {
      question:
        'Da li je vecina ucesnika vec igrala escape room?',
      choices: [
        'niko nije',
        'poneko',
        'pola pola',
        'vecina', 'svi' , 'ne znam'
      ],
      type: 'MCQs',
    },

    
    {
      question: 'Koliko želite da traje celo iskustvo?',
      image: p2,
      choices: ['1-2h', 'više od toga'],
      type: 'MCQs',
 
     
    },
    
    {
      question: 'Da niste odlučili da odigrate Escape room, koju od sledećih aktivnosti biste najradije odabrali da radite kao tim?',
      choices: [
        'Paintball',
        'Pab_kviz',
        'Klub_drustvenih_igara',
        'Karaoke'
      ],
      type: 'MCQs',
   
    
    },
    {
      question: 'Koju od tih aktivnosti biste preskočili radije?',
      choices: [
        'Paintball',
        'Pab_kviz',
        'Klub_drustvenih_igara',
        'Karaoke'
      ],
      type: 'MCQs',
   
    
    },
  ],
}