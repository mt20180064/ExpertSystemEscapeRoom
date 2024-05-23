import { react } from './react'
import { secondQuiz } from './secondQuiz'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  React: react,
  SecondQuiz: secondQuiz
}

