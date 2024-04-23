"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();


  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""

  });
  const [bottonDisabled, setBottonDisabled] = useState(false);
  const signUp = async () => {
    try {
      setLoading(true);
      const result = await axios.post("api/admin/signup", user);
      router.push("/login");
    } catch (error) {
      console.log(error, "error signup failed...");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.firstName.length > 0 && user.lastName.length > 0 && user.email && user.password && user.confirmPassword) {
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
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

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

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  {bottonDisabled ?
                    <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-gray-300 px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-gray-300 focus:outline-none focus:ring active:text-gray-300 cursor-not-allowed"
                    >
                      Create an account

                    </button> :
                    <button
                      onClick={signUp}
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                      Create an account

                    </button>}


                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline">Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

  )
}

export default Signup;