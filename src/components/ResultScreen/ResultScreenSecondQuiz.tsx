import React, { FC, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useQuiz } from '../../context/QuizContext';
import { device } from '../../styles/BreakPoints';
import { Flex, LogoContainer } from '../../styles/Global';
import { refreshPage } from '../../utils/helpers';
import p3 from '../../img/p3.jpg';
import Button from '../ui/Button';
import QuizImage from '../ui/QuizImage';
import RecommendedRoomsSecondQuiz from '../RecommendedRooms/RecommendedRoomsSecondQuiz';
import { Room } from '../../types';
import { Refresh, Next } from '../../config/icons';

const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`;

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`;

const QuestionNumber = styled.h6`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const QuestionStyle = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`;

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
`;

const StyledImageTwo = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
  margin-top: 20px;
`;

const ResultScreenSecondQuiz: FC = () => {
  const { result } = useQuiz();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const onClickRetry = () => {
    refreshPage();
  };

  const showRooms = async () => {
    console.log("showRooms function called");

    let numOfRoomsOnLoc;

    const playersAnswer2 = result[1]?.selectedAnswer[0];
    if (playersAnswer2) {
      switch (playersAnswer2) {
        case '7-12':
          numOfRoomsOnLoc = 2;
          break;
        case '13-18':
          numOfRoomsOnLoc = 3;
          break;
        case '19-24':
          numOfRoomsOnLoc = 4;
          break;
        case 'više od 24':
          numOfRoomsOnLoc = 5;
          break;
        default:
          console.log('Unexpected number of players');
      }
    }

    console.log("broj soba na lok:", numOfRoomsOnLoc);

    try {
      const response = await axios.get('http://localhost:8085/rooms-by-numOnLoc', {
        params: { numOfRoomsOnLoc },
      });

      console.log("Rooms data:", response.data);

      
      const roomsData = response.data;
      if (Array.isArray(roomsData)) {
        setRooms(roomsData);
        setShowRecommendations(true);
      } else {
        console.error('Invalid rooms data:', roomsData);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  if (showRecommendations) {
    console.log("Rendering RecommendedRoomsSecondQuiz with rooms:", rooms);
    return <RecommendedRoomsSecondQuiz rooms={rooms} />;
  }

  return (
    <ResultScreenContainer>
      <LogoContainer>
        <StyledImageTwo src={p3} alt="logo" />
      </LogoContainer>
      <InnerContainer>
        <h2>
          Ovo su odgovori na pitanja koje ste dali. Klikom na dugme pogledajte naše predloge Escape
          room igre za vas!
        </h2>
        {result.map(({ question, choices, image, selectedAnswer }, index: number) => {
          return (
            <QuestionContainer key={question}>
              <Flex gap="4px">
                <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                <QuestionStyle>{question}</QuestionStyle>
              </Flex>
              <div>
                {image && <QuizImage image={image} />}
                <ul>
                  {choices.map((ans: string, index: number) => {
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
            </QuestionContainer>
          );
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
        <div style={{ width: '1800px' }}></div>
        <Button
          text="Vidi preporuku"
          onClick={() => showRooms()}
          icon={<Next />}
          iconPosition="right"
          bold
        />
      </Flex>
    </ResultScreenContainer>
  );
};

export default ResultScreenSecondQuiz;

