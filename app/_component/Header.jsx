"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl shadow-sm items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link href="/">
                    <Image src="/images/studyMaterial.png" alt='logo' width={50} height={100} />
                </Link>
                <button
                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* </a> */}

                <div className="flex flex-1 items-center justify-end md:justify-between">

                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
                            </li>

                            <li style={{marginTop: "3px"}}>
                                <span className="text-gray-500 transition hover:text-gray-500/75" 
                                    onClick={() => setIsHovered(!isHovered)}
                                > Course <ArrowDropDownIcon/></span>
                                {isHovered && (
                                    <div className="dropdown-box absolute bg-white border border-gray-200 p-4 rounded-md shadow-md mt-2">
                                        <ul class="mt-2 space-y-1 px-4">
                                        <li>
                                            <Link
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                Banned Users
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                Calendar
                                            </Link>
                                        </li>
                                    </ul>
                                    </div>
                                )}
                            </li>
                           


                            <li>
                                <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> Training </Link>
                            </li>

                            <li>
                                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/services"> Services </Link>
                            </li>

                            <li>
                                <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> Editor </Link>
                            </li>

                            <li>
                                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/contact"> Contact </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="hidden sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-black transition hover:bg-teal-700 sm:block"
                                href="#"
                            >
                                Free Demo
                            </a>

                            <a
                                className="rounded-sm bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-teal-600/75 sm:block"
                                href="#"
                            >
                                Buy
                            </a>

                            <a
                                className="sm:block"
                                href="https://api.whatsapp.com/send?phone=8984568383"
                            >
                                <Image src="/images/wapp.png" alt='logo' width={40} height={100} />
                            </a>
                        </div>

                        <a
                            className="block sm:hidden"
                            href="#"
                            style={{ marginTop: "10px" }}
                        >
                            <Image src="/images/freedemo.png" alt='logo' width={50} height={100} />
                        </a>
                        <a
                            className="block sm:hidden"
                            href="#"
                        >
                            <Image src="/images/webuy.png" alt='logo' width={50} height={100} />
                        </a>


                        <a
                            className="block sm:hidden"
                            href="https://api.whatsapp.com/send?phone=8984568383"
                        >
                            <Image src="/images/wapp.png" alt='logo' width={40} height={100} />
                        </a>

                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute right-0 top-16 bg-white w-full py-2 rounded-lg shadow-lg z-10">
                    <ul class="space-y-1">
                        <li>
                            <Link href="/"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                Home
                            </Link>
                        </li>

                        <li>
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span class="text-sm font-medium"> Course </span>

                                    <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul class="mt-2 space-y-1 px-4">
                                    <li>
                                        <Link
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Banned Users
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Calendar
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <Link
                                href="#"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Training
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/services"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Editor
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header