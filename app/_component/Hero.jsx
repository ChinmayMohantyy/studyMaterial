import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Inspire. Create. Innovate.
                        <strong className="font-extrabold text-primary sm:block"> Get started now. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                    Elevate your coding game with our intuitive app. Let's create something extraordinary together!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="/mocktest"
                        >
                            <span
                                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                            >
                                Mock Test
                            </span>
                        </Link>

                        <a
                            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="#"
                        >
                            <span
                                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                            >
                                Learn More
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero