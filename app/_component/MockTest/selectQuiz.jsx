import { Avatar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import MockCourseData from "../MockTest/mockCoureData.json"
const SelectQuiz = () => {
   
    return (
        <div className='flex flex-wrap justify-center gap-4 mt-10'>
            {MockCourseData.map(data=> (
                <article className="hover:animate-background rounded-xl bg-gradient-to-r from-yellow-100 via-primary to-lime-300 p-4 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-xs">
                    <div className="bg-white rounded-[10px] p-6 h-full">

                        <time className="block text-xs text-gray-500 mb-2"><StarRateIcon /> {data.ratings} Rating</time>

                        <Link 
                        href={`/mocktest/${data.courseName}`} 
                        
                        className="flex items-center gap-2">
                            <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src={data.image}
                                    width={30}
                                    height={30}
                                    alt="HTML Free Mock Test"
                                />
                            </span>
                            <span className="text-lg font-medium text-gray-900">{data.courseName} Free Mock Test</span>
                        </Link>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-600">Total20 Question</span>
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-600">Time 5min</span>
                        </div>
                    </div>
                </article>
            ))}


        </div>
    )
}

export default SelectQuiz