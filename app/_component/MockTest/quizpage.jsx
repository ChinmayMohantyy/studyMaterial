'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import QuestionAnswer from './questionAnswer';
import question from '../MockTest/question.json'
import Result from './result';
import Header from '../Header';
import Footer from '../Footer';
import Timer from './timer';
const Quizpage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [timerDone, setTimerDone] = useState(false);



    const handleNext = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswer([...userAnswer, isCorrect])
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswer([]);
    }
    const handleTimerFinish = () => {
        setTimerDone(true) // Replace this with your desired action
      };
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10 ml-5 mr-5">
                <div className="h-32 rounded-lg bg-gray-100">how many done</div>
                {/* question */}
                {currentQuestion < question.length && timerDone === false &&
                    (<QuestionAnswer question={question[currentQuestion]} onAnswerClick={handleNext} />)
                }
                {currentQuestion === question.length||timerDone && (<Result
                    userAnswer={userAnswer}
                    question={question}
                    resetQuiz={resetQuiz}
                />)}

                {/* end question */}
                <div className="h-32 rounded-lg bg-gray-100">
                    <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
                    <Timer duration={1 * 60} onFinish={handleTimerFinish} />
                    </div>
                </div>
            </div >
            <Footer/>
        </>

    )
}

export default Quizpage