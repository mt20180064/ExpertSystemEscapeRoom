import React, { useState } from 'react'
import styled from 'styled-components'
import p1 from '../../img/p1.jpeg'
import p3 from '../../img/p3.jpg'
import p4 from '../../img/p4.jpeg'
import p5 from '../../img/p5.jpeg'
import p10 from '../../img/p10.jpg'
import p11 from '../../img/p11.jpg'
import e from '../../img/e.png'
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

const BorderContainer = styled.div`
  border:8px solid transparent; 
  border-image: url(${e}) 60 fill round; 
  border-radius: 20px;
  padding: 0; 
  margin: 0;  
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  width: 100%;
  padding: 20px; /* Add padding here if needed */
`

const Watermark = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-style: italic;
  font-size: 24px;
  color: #ccc;
  opacity: 0.5;
`

const Heading = styled.h2`
  font-size: 32px;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
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
  width: 100%;
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
  color: ${({ theme }) => theme.colors.themeColor};
  font-size: 24px;
  text-align: center;
  padding: 20px;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
`

const OldPaperTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const OldPaperText = styled.p`
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-size: 24px;
  font-style: italic;
  background: url('/path/to/old-paper-background.png'); 
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  width: 49%; 
`

const MainContent = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
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
      <BorderContainer>
        <Watermark>Atikus</Watermark>
        <InnerContainer>
          <MainContent>
            <CenterCardContainer>
              <LogoContainer>
                <StyledImageTwo src={p3} alt="logo" />
              </LogoContainer>
              <Heading>
                Želite da igrate Escape Room, ali ne znate koja je igra prava za vas? 
              </Heading>
              <DetailText><HighlightedText>Odgovorite na nekoliko pitanja i Atikus će pronaći prave sobe za vas!</HighlightedText> Atikus je vaš lični vodič kroz svet Escape room igara. Koji god da je razlog iz kog ste odlučili da zavirite u ovaj svet, on će učiniti da iz njega nikada ne poželite da izađete!</DetailText>
              <OldPaperTextContainer>
                <OldPaperText>
                  Ako ste ekipa drugara koja želi kvalitetno druženje i čuli ste za escape room i ne znate od kog da krenete, ili iskusni eskejperi koji su već odigrali nekoliko soba, za nekoliko minuta znaćete koji sledeći escape room da posetite jer najviše odgovara vašoj ekipi i interesovanjima!
                </OldPaperText>
                <OldPaperText>
                  Ako hoćete da organizujete proslavu rođendana za svoje dete/društvo ili teambuilding, bilo kakvu vrstu proslave i čuli ste da je escape room mesto sa dobrom atmosferom u kojoj se razvija timski duh, ali ne znate koji odgovara potrebama vašeg događaja, pomoći ćemo vam!
                </OldPaperText>
              </OldPaperTextContainer>
              <StyledImageContainer>
                <ClickableImage
                  selected={selectedImage === 'React'}
                  onClick={() => handleImageClick('React')}
                >
                  <img src={p10} alt="Igra sa ekipom" />
                  <Overlay className="overlay">Igra sa ekipom</Overlay>
                </ClickableImage>
                <ClickableImage
                  selected={selectedImage === 'SecondQuiz'}
                  onClick={() => handleImageClick('SecondQuiz')}
                >
                  <img src={p11} alt="Organizacija dogadjaja" />
                  <Overlay className="overlay">Organizacija dogadjaja (Timbilding, rodjendan, proslava...)</Overlay>
                </ClickableImage>
              </StyledImageContainer>
              <Button text="Počni" onClick={goToQuestionScreen} bold />
            </CenterCardContainer>
          </MainContent>
        </InnerContainer>
      </BorderContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen





