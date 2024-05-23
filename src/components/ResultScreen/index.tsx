import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import ResultScreenFirstQuiz from './ResultScreenFirstQuiz';
import ResultScreenSecondQuiz from './ResultScreenSecondQuiz';

const ResultScreen: React.FC = () => {
  const { quizTopic } = useQuiz();

  if (quizTopic === 'React') {
    return <ResultScreenFirstQuiz />;
  } else if (quizTopic === 'SecondQuiz') {
    return <ResultScreenSecondQuiz />;
  } else {
    return <div>Invalid quiz topic</div>;
  }
};

export default ResultScreen;




