import { ReactNode } from 'react'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'


type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'secondQuiz',
    icon: <JavaScript />,
  },
  
  
]
