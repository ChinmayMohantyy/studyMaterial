'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Slider } from '@mui/material';


const QuestionAnswer = ({ question, onAnswerClick }) => {

    return (
        <div className="h-fit rounded-lg bg-gray-100 lg:col-span-2">
            <div className='mr-2 ml-2 mt-2'>
                <p className="text-xs font-medium text-gray-500">{question.id}/10 - Questions</p>

                <Slider
                    value={question.id}
                    aria-labelledby="non-linear-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    sx={{
                        color: 'rgb(225, 229, 135)'
                      }}
                />
            </div>
            <fieldset className="space-y-4 mb-6 mt-6">
                <legend className="text-3xl font-medium text-gray-900 text-center mb-4">Q{question.id}: {question.question}</legend>

                {question.answerOptions.length > 0 && question.answerOptions.map((option) => {
                    return <div className='mx-auto max-w-md'>
                        <label class="flex cursor-pointer justify-between items-center rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 hover:ring-1 hover:bg-primary">
                            <span class="text-gray-700">{option.text}</span>
                            <input type="radio" name="DeliveryOption" value={option.id} id={option.id} class="size-5 border-gray-300 bg-primary" onClick={() => onAnswerClick(option.isCorrect)} />
                        </label>
                    </div>
                })

                }

            </fieldset>


        </div>
    )
}

export default QuestionAnswer