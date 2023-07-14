"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
function Profile({params}:any) {
  const [data,setData] = useState("")
  const router = useRouter()
  const userDetails = async ()=>{
      const user = await axios.get("/api/users/me");
      const userdata:any = await user.data.data;
      console.log(userdata)
      setData(userdata);

  }
  const logout = async ()=>{
    try{
         axios.get("/api/users/logout");
        toast.success("log out successfully");
        router.push("/login")
        // console.log(response)

    }catch(err:any){
      console.log(err.message);
      toast.error("could not log out")
    }

  }
  return (
    <div className='flex flex-col min-h-screen w-full bg-purple-600 text-white justify-center items-center gap-5'>Profile {params.id}
     <button  onClick={logout}> log out</button>
     <button  onClick={userDetails}> getData</button>
    <b>{data.username}</b></div>

  )
}

export default Profile