import styled from 'styled-components'
import p1 from '../../img/p1.jpeg'
import  p3  from '../../img/p3.jpg'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'

import Button from '../ui/Button'


const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`
const StyledImageOne = styled.img`
  
  width: 1430px; 
  height: auto; 
  margin: 0 auto;
  display: block; 
  margin-bottom:30px;
  margin-top:30px;
`;

const StyledImageTwo = styled.img`
  width: 150px; 
  height: auto; 
  border-radius: 20px; 
  margin-top: 20px; 
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  active: boolean
  disabled?: boolean
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`



const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
        <StyledImageTwo src={p3} alt="logo" />
        </LogoContainer>
        <Heading>
          Želite da igrate Escape Room, ali ne znate koja je igra prava za vas? <HighlightedText> NA PRAVOM STE MESTU!</HighlightedText>
        </Heading>
        <DetailText>Odgovorite na nekoliko pitanja i odabraćemo sobu umesto vas</DetailText>
        <StyledImageOne src={p1} alt="escape room picture" />
        <Button text="Počni" onClick={goToQuestionScreen} bold />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen
