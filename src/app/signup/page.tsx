"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import  axios  from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast';

const Page = () => {
  const router = useRouter()
  const [buttonDisable, setButtonDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
    email: '',
    password:'',
    username: ''
  })

  const onSubmit = async (e :any) => {
    try {
      setLoading(true)
      const res = await axios.post('/api/users/signup', user)
      toast.success("User signed up");
      router.push("/checkoutemail");   
    } catch (err:any) {
      toast.error(err.response.data.error);
      if(err.response.data.error=="User already exists"){
        router.push("/login");
      }

    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }, [user])

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center flex-col px-3 text-blue-500'>
      <div className='flex flex-col  w-full lg:w-[30%] mx-auto py-10 px-4 md:px-12 gap-6 bg-white shadow-lg rounded-md shadow-gray-500'>
      <h1 className='text-center text-slate-900 text-3xl font-bold font-serif'>{loading ? 'loading' : 'Sign Up'}</h1>
      <input
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Enter your email address"
        className=" block shadow-lg my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        id="email"
      />
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        className=" block shadow-lg my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
     autoComplete='off'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        id="username"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        className=" block shadow-lg my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"

        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        id="password"
      />
      <button
        onClick={onSubmit}
        className="w-full mt-4 px-4 py-4 font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >{buttonDisable ? 'No Sign Up' : 'Sign Up'}</button>
      <Link href="/login" className='text-center text-[20px] font-semibold font-serif '>Login</Link>
      </div>
      </div>
    </>
  )
}

export default Page