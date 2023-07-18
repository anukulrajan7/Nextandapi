"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
function Profile() {
  const [data, setData] = useState({ });
  const [dataState, setDataState] = useState(false)
  const router = useRouter();
  const userDetails = async () => {
    const user = await axios.get("/api/users/me");
    const userdata = await user.data.data;
    console.log(userdata);

    setData(userdata);
    setDataState(true)
  };
  const logout = async () => {
    try {
      axios.get("/api/users/logout");
      toast.success("log out successfully");
      router.push("/login");
      // console.log(response)
    } catch (err) {
      console.log(err.message);
      toast.error("could not log out");
    }
  };
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-white justify-center items-center gap-5">
      <div className="flex flex-col h-[100vh] lg:h-fit lg:w-[30%] w-full py-8 mx-auto justify-center items-center gap-6 shadow-lg px-4 rounded-md bg-purple-500  shadow-purple-600">
          <h1 className="text-center font-bold text-2xl font-serif my-3">Profile Page</h1>
        <div className="flex justify-center gap-8 items-center w-full">
          <button onClick={logout} className='w-fit  bg-white rounded-md shadow-md shadow-gray-400 px-3 py-1 text-xl font-serif text-purple-700 first-letter:capitalize'> log out</button>
          <button
            className="w-fit  bg-white shadow-md shadow-gray-400 px-3 rounded-md py-1 text-xl text-purple-700 font-serif first-letter:capitalize"
            onClick={userDetails}
          >
            {" "}
            get Data
          </button>
        </div>
        <div className="w-[200px] h-[200px] rounded-full flex justify-center bg-white items-center border-indigo-600 border-[4px]">
          <Image src="/userimage.png" width="300" height="300" alt="User Image"/>
        </div>
        
        <>
             {dataState?"": <>
             <p className="bg-white text-purple-600 first-letter:capitalize w-full px-3 py-2 flex gap-4 font-serif text-sm font-semibold"> <span className="hidden lg:block">Email{" "} :</span>{data.email}</p>
        <p className="bg-white text-purple-600 first-letter:capitalize w-full px-3 py-2 flex gap-4 font-serif text-sm font-semibold"> <span      className="hidden lg:block">user name{" "} :</span>{data?.username}</p>
        <p className="bg-white text-purple-600 first-letter:capitalize w-full px-3 py-2 flex gap-4 font-serif text-sm font-semibold"> <span      className="hidden lg:block">user id{" "} :</span> {data?._id}</p>
    
             </>}
         </>

          </div>
    </div>
  );
}

export default Profile;
