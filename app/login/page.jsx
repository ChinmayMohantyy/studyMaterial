"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""

    });
    const [bottonDisabled, setBottonDisabled] = useState(false);
    const login = async () => {
        try {
            setLoading(true);
            const result = await axios.post("api/admin/login", user);
            toast.success("Login Sucess");
            console.log(result,"---result");
            router.push("/admin/dashboard");
        } catch (error) {
            console.log(error, "error signup failed...");
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email && user.password) {
            setBottonDisabled(false);
        } else {
            setBottonDisabled(true);
        }

    }, [user]);
    return loading ? <div class="lds-hourglass"></div> : (
        <section className="bg-white flex justify-center items-center h-screen" >
            <div className="lg:grid  lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 rounded-lg">
                    <img
                        alt=""
                        src="/images/signupimage.avif"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                href="#"
                            >
                                <Image src="/images/studyMaterial.png" alt='logo' width={50} height={100} />

                            </a>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to StudyMaterial
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Discover a world of coding expertise with our online material hub. Join us for an immersive learning experience and unlock your full potential today!
                            </p>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 ">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    onClick={login}
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    LogIn
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    New Account
                                    <a href="/signup" className="text-gray-700 underline">Sign up</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Login