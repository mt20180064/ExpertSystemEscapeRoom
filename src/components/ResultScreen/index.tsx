import { FC } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useState } from 'react';
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { Flex, LogoContainer, ResizableBox } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'
import  p3  from '../../img/p3.jpg'
import Button from '../ui/Button'
import CodeSnippet from '../ui/CodeSnippet'
import QuizImage from '../ui/QuizImage'


const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`

const QuestionNumber = styled.h6`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`

const QuestionStyle = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`

const Answer = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 90%;
  @media ${device.md} {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.answerBg};
  border-radius: 16px;
  font-size: clamp(16px, 5vw, 18px);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
`
interface Room {
  id: number;
  name: string;
  
}
const ResultScreen: FC = () => {
  const { result } = useQuiz();
  const [rooms, setRooms] = useState<Room[]>([]);

  const onClickRetry = () => {
    refreshPage()
  }

  const showRooms= async()=>{
     
  let team = {
    years: 0,
    numberOfPlayers: 0,
    gamesPlayed:0,
    gamesSolved:0,
    teamwork: false,
    goal:"",
    activityToLike:"",
    activityToHate:""
  };
 let room ={
  event: false,
  duration: "HOUR"
 }
let genre ={
  movie:"",
  book:"",
  picture:"",
  debateTopic:""
}
  const ageAnswer = result[0]?.selectedAnswer[0]; 
  if (ageAnswer) {
    team.years = ageAnswer === '8-15' ? 14 : 25;
  }

  
  const playersAnswer = result[1]?.selectedAnswer[0];
  if (playersAnswer) {
    switch(playersAnswer) {
      case '1':
      case '2-5':
        team.numberOfPlayers = 4;
        break;
      case '6':
        team.numberOfPlayers = 6;
        break;
      case '7-12':
        team.numberOfPlayers = 9;
        break;
      case '13-18':
        team.numberOfPlayers = 15;
        break;
      case '19-24':
        team.numberOfPlayers = 22;
        break;
      default:
        console.log("Unexpected number of players");
    }
  }
  const eventAnswer = result[2]?.selectedAnswer[0];
  if (eventAnswer) {
    room.event = eventAnswer !== 'Igram sa ekipom';
  }
  const gamesPlayedAnswer = result[3]?.selectedAnswer[0];
  if (gamesPlayedAnswer) {
    switch(gamesPlayedAnswer) {
      case 'nijednu':
        team.gamesPlayed = 0;
        break;
      case '1-5':
        team.gamesPlayed = 4;
        break;
      case '6-10':
        team.gamesPlayed = 8;
        break;
      case '11-15':
        team.gamesPlayed = 12;
        break;
      case '16+':
        team.gamesPlayed = 14;
        break;
      default:
        console.log("Unexpected number of games played");
    }
  }
  const gamesSolvedAnswer = result[4]?.selectedAnswer[0]; 
  if (gamesSolvedAnswer) {
    switch(gamesSolvedAnswer) {
      case 'nijednu':
        team.gamesSolved = 0;
        break;
      case '1-5':
        team.gamesSolved = 3;
        break;
      case '6-10':
        team.gamesSolved = 6;
        break;
      case '11-15':
        team.gamesSolved = 10;
        break;
      case '16+':
        team.gamesSolved = 12;
        break;
      default:
        console.log("Unexpected number of games solved");
    }
  }

  const durationAnswer = result[5]?.selectedAnswer[0]; 
  if (durationAnswer) {
    if (durationAnswer === 'više od toga') {
      room.duration = "HOURS"; 
    }
  }
  const teamworkAnswer = result[6]?.selectedAnswer[0]; 
  if (teamworkAnswer) {
    team.teamwork = teamworkAnswer === 'timski rad';
  }
  const movieGenreAnswer = result[7]?.selectedAnswer[0]; 
  if (movieGenreAnswer) {
    genre.movie = movieGenreAnswer;
  }
  const bookGenreAnswer = result[8]?.selectedAnswer[0]; 
  if (bookGenreAnswer) {
    genre.book = bookGenreAnswer;
  }
  const pictureGenreAnswer = result[9]?.selectedAnswer[0]; 
  if (pictureGenreAnswer) {
    genre.picture = pictureGenreAnswer;
  }
  const goalGenreAnswer = result[10]?.selectedAnswer[0]; 
  if (goalGenreAnswer) {
    team.goal = goalGenreAnswer;
  }
  const debateTopicAnswer = result[11]?.selectedAnswer[0]; 
  if (debateTopicAnswer ) {
    genre.debateTopic = debateTopicAnswer ;
  }
  const activityToLikeAnswer = result[12]?.selectedAnswer[0]; 
  if (activityToLikeAnswer) {
    team.activityToLike = activityToLikeAnswer;
  }
  const activityToHateAnswer = result[13]?.selectedAnswer[0]; 
  if (activityToHateAnswer) {
    team.activityToHate = activityToHateAnswer;
  }
  
  console.log(team);
  console.log(room);
  console.log(genre);
  try {
    
    const combinedDto = { 
  teamDto: team, 
  genreDto: genre, 
  roomDto: room 
}; 
const saveResponse = await axios.post('http://localhost:8085/save', combinedDto, {
  headers: {
    'Content-Type': 'application/json'
  }
});
const processedRoom = saveResponse.data;

    
    const findRoomsResponse = await axios.get('http://localhost:8085/find-rooms', {
      params: { ...processedRoom } // Adjust this based on how your backend expects to receive the room criteria
    });

    setRooms(findRoomsResponse.data);


    console.log(rooms);
  } catch (error) {
    console.error('There was an error processing your request:', error);
  }
  }
  const StyledImageTwo = styled.img`
  width: 150px; 
  height: auto; 
  border-radius: 20px; 
  margin-top: 20px; 
`;

  return (
    <ResultScreenContainer>
      <LogoContainer>
      <StyledImageTwo src={p3} alt="logo" />
     </LogoContainer>
      <InnerContainer>
        <h2>Ovo su odgovori na pitanja koje ste dali. Klikom na dugme pogledajte naše predloge Escape room igre za vas!</h2>
        {result.map(({ question, choices, image, selectedAnswer }, index: number) => {
          return (
            <QuestionContainer key={question}>
              <ResizableBox width="90%">
                <Flex gap="4px">
                  <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                  <QuestionStyle>{question}</QuestionStyle>
                </Flex>
                <div>
                
                  {image && <QuizImage image={image} />}
                  <ul>
                    {choices.map((ans: string, index: number) => {
                      // Convert index to alphabet character
                      const label = String.fromCharCode(65 + index);
                      const isSelected = selectedAnswer.includes(ans);

                      return isSelected ? (
                        <Answer key={ans}>
                          <span>{label}.</span>
                          {ans}
                        </Answer>
                      ) : null;
                    })}
                  </ul>
                </div>
              </ResizableBox>
            </QuestionContainer>
          )
        })}
      </InnerContainer>
      <Flex flxEnd>
        <Button
          text="Uradi ispočetka"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
         <Button
          text="Vidi preporuku"
          onClick={showRooms}
          icon={<Refresh />}
          iconPosition="right"
          bold
        />
      </Flex>
      {rooms.length > 0 && (
          <div>
            <h3>Recommended Rooms:</h3>
            <ul>
              {rooms.map((room) => (
                <li key={room.id}>{room.name}</li> // Displaying only the name of each room
              ))}
            </ul>
          </div>
        )}
    </ResultScreenContainer>
  )
}

export default ResultScreen

