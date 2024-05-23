import React, { useState } from 'react'
import styled from 'styled-components'
import p1 from '../../img/p1.jpeg'
import p3 from '../../img/p3.jpg'
import p4 from '../../img/p4.jpeg'
import p5 from '../../img/p5.jpeg'
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
const StyledImageTwo = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
  margin-top: 20px;
`

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 30px;
`

const ClickableImage = styled.div<{ selected: boolean }>`
  position: relative;
  width: 49%;
  cursor: pointer;
  border: ${({ selected, theme }) => (selected ? `2px solid ${theme.colors.themeColor}` : 'none')};

  img {
    width: 100%;
    height: auto;
  }

  &:hover .overlay {
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  color: white;
  font-size: 18px;
  text-align: center;
  padding: 20px;
`

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

const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`

const SideSection = styled.div`
  width: 20%;
  padding: 20px;
`

const MainContent = styled.div`
  width: 60%;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`

const QuizTopicsScreen: React.FC = () => {
  const { selectQuizTopic, setCurrentScreen } = useQuiz()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const goToQuestionScreen = () => {
    if (selectedImage) {
      setCurrentScreen(ScreenTypes.QuestionScreen)
    }
  }

  const handleImageClick = (topic: string) => {
    selectQuizTopic(topic)
    setSelectedImage(topic)
  }

  return (
    <PageCenter light justifyCenter>
      <LayoutContainer>
        <SideSection>
          <Image src={p1} alt="Side image 1" />
          <Image src={p1} alt="Side image 2" />
          <Image src={p1} alt="Side image 3" />
        </SideSection>
        <MainContent>
          <CenterCardContainer>
            <LogoContainer>
              <StyledImageTwo src={p3} alt="logo" />
            </LogoContainer>
            <Heading>
              Želite da igrate Escape Room, ali ne znate koja je igra prava za vas? <HighlightedText> NA PRAVOM STE MESTU!</HighlightedText>
            </Heading>
            <DetailText>Odgovorite na nekoliko pitanja i odabraćemo sobu umesto vas</DetailText>
            <StyledImageContainer>
              <ClickableImage
                selected={selectedImage === 'React'}
                onClick={() => handleImageClick('React')}
              >
                <img src={p4} alt="Igra sa ekipom" />
                <Overlay className="overlay">Igra sa ekipom</Overlay>
              </ClickableImage>
              <ClickableImage
                selected={selectedImage === 'SecondQuiz'}
                onClick={() => handleImageClick('SecondQuiz')}
              >
                <img src={p5} alt="Organizacija dogadjaja" />
                <Overlay className="overlay">Organizacija dogadjaja (Timbilding, rodjendan, proslava...)</Overlay>
              </ClickableImage>
            </StyledImageContainer>
            <Button text="Počni" onClick={goToQuestionScreen} bold />
          </CenterCardContainer>
        </MainContent>
        <SideSection>
          <Title>Title 1</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          <Title>Title 2</Title>
          <Paragraph>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
          <Title>Title 3</Title>
          <Paragraph>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Paragraph>
        </SideSection>
      </LayoutContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen

