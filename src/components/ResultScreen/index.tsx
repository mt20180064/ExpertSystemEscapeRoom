import { FC } from 'react'
import styled from 'styled-components'

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

const ResultScreen: FC = () => {
  const { result } = useQuiz()

  const onClickRetry = () => {
    refreshPage()
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
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="right"
          bold
        />
      </Flex>
    </ResultScreenContainer>
  )
}

export default ResultScreen

