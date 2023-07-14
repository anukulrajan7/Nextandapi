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
      console.log(res)
      toast.success("User signed up");
      router.push("/login");

       
    } catch (err) {
      console.error(err)
      // toast.error("Error");
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
      <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-5 text-blue-500'>
      <h1>{loading ? 'loading' : 'Sign Up'}</h1>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        placeholder="email"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm w-fit text-4xl px-5 py-2 border-gray-300 rounded-md"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        id="email"
      />
      <label htmlFor="username" className="block text-3xl font-medium w-fit  text-white">Username</label>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="mt-1 focus:ring-indigo-500 w-fit text-4xl px-5 py-2 focus:border-indigo-500 block  shadow-sm  border-gray-300 rounded-md"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        id="username"
      />
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-fit text-4xl px-5 py-2 shadow-sm  border-gray-300 rounded-md"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        id="password"
      />
      <button
        onClick={onSubmit}
        className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >{buttonDisable ? 'No Sign Up' : 'Sign Up'}</button>
      <Link href="/login">Login</Link>
      </div>
    </>
  )
}

export default Page