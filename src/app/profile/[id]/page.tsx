"use client"
import React from 'react'
import axios from 'axios'
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
function Profile({params}:any) {
  const router = useRouter()
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
    <div>Profile 
     <button  onClick={logout}> log out</button>
    <b></b></div>

  )
}

export default Profile