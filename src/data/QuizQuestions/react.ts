// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import p2 from '../../img/p2.jpeg'

export const react: Topic = {
  topic: 'React',
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
      choices: ['1','2-5','6','7-12','13-18', '19-24'],
      type: 'MCQs',
     
    
    },
    {
      question: 'Da li je u pitanju organizacija nekog događaja ili samo dolazite da igrate sa svojom ekipom?',
      choices: [
        'Rođendan',
        'Teambuilding',
        'Igram sa ekipom',
        'Neki treći događaj koji uključuje veći broj ljudi',
      ],
      type: 'boolean',
      
      
    },
    {
      question:
        'Koliko escape room igara ste do sada odigrali?',
      choices: [
        'nijednu',
        '1-5',
        '5-10',
        '10-15', '15+'
      ],
      type: 'MAQs',
    
      
    },

    {
      question:
        'Koliko ste ih od toga rešili bez pomoći Game master-a i u roku od sat vremena?',
      choices: [ 'nijednu',
      '1-5',
      '5-10',
      '10-15', '15+'],
      type: 'MCQs',
      
     
    },
    {
      question: 'Koliko želite da traje celo iskustvo?',
      image: p2,
      choices: ['1-2h', 'više od toga'],
      type: 'MCQs',
 
     
    },
    {
      question:
        'Da li se unutar tima često nadmećete i izazivate jedni druge ili se fokusirate na timski rad?',
      choices: [
        'nadmećemo se',
        'timski rad'
      ],
      type: 'boolean',
     
     
    },
    {
      question: 'Za koji biste se filmski žanr opredelili kada biste svi zajedno (tim) gledali film?',
      choices: [
        'Horor',
        'Misterija',
        'Naucna fantastika',
        'Komedija', 'Drama', 'Istorijski', 'Dokumentarni', 'Akcija'
      ],
      type: 'MCQs',
   
    
    },

    {
      question: 'Za koju biste se knjigu od ponuđenih opredelili kao tim? (ako niste čitali birajte na osnovu žanra, slike i kratkog opisa)',
      choices: ['True', 'False'],
      type: 'boolean',
   
     
    },
    {
      question: 'Koja slika najbolje opisuje ambijent u kom biste voleli da se nađete svi zajedno?',
      choices: [
        'Horor',
        'Misterija',
        'Naucna fantastika',
        'Komedija', 'Drama', 'Istorijski', 'Dokumentarni', 'Akcija'
      ],
      type: 'MCQs',
   
    
    },
    {
      question: 'Šta je vaš cilj kada igrate bilo koju društvenu igru ',
      choices: [
        'Pobeda',
        'Zabava',
        'Uzbudjenje',
        'Akcija'
      ],
      type: 'MCQs',
   
    
    },
    {
      question: 'O čemu biste najradije debatovali u timu?',
      choices: [
        'Politika',
        'Umetnost',
        'Filozofija',
        'Istorija'
      ],
      type: 'MCQs',
   
    
    },
    {
      question: 'Da niste odlučili da odigrate Escape room, koju od sledećih aktivnosti biste najradije odabrali da radite kao tim?',
      choices: [
        'Paintball',
        'Pab kviz',
        'Klub društvenih igara',
        'Karaoke'
      ],
      type: 'MCQs',
   
    
    },
    {
      question: 'Koju od tih aktivnosti biste preskočili radije?',
      choices: [
        'Paintball',
        'Pab kviz',
        'Klub društvenih igara',
        'Karaoke'
      ],
      type: 'MCQs',
   
    
    },
  ],
}
