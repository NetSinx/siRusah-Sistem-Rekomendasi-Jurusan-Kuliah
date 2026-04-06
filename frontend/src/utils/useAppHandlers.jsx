import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { QUESTIONS } from './constants';

export const useAppHandlers = () => {
  const [step, setStep] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(20).fill(null));
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleStart = () => {
    window.scrollTo(0, 0);
    setStep('quiz');
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (val) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = val;
    setAnswers(newAnswers);
  };

  const handleClearChoice = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const safeAnswers = answers.map(a => a === null ? 3 : a); 
      
      const response = await axios.post('http://localhost:5000/api/recommend', {
        scores: safeAnswers
      });
      
      setRecommendations(response.data.recommendations);
      setStep('result');
    } catch (error) {
      console.error(error);
      toast({
        title: 'Terjadi Kesalahan',
        description: 'Tidak dapat terhubung ke server.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setAnswers(Array(20).fill(null));
    setCurrentQuestionIndex(0);
    setRecommendations([]);
    window.scrollTo(0, 0);
    setStep('intro');
  };

  return {
    step,
    currentQuestionIndex,
    answers,
    recommendations,
    loading,
    handleStart,
    handleNext,
    handlePrev,
    handleAnswerChange,
    handleClearChoice,
    handleSubmit,
    handleReset
  };
};
