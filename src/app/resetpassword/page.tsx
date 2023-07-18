"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
 export const  page=()=> {
  const [email, setEmail] = useState("");
  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault();
    resetPassword(email);
  };
  const resetPassword = async (email: any) => {
    try {
      const response = await axios.post("/api/users/resetpassword", {
        email: email,
      });
      toast.success("Reset password was sent successfully")
      router.push("/checkoutemail");
      // console.log(response);
    } catch (error: any) {
      // console.log(error.message);
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className=" w-full   lg:w-[30%] flex flex-col shadow-lg py-8 gap-10 px-7 rounded-md shadow-gray-500 ">
        <h1 className="text-2xl font-bold font-serif text-center my-2">
          Reset Password
        </h1>
        <input
          type="email"
          autoComplete="off"
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=" block shadow-2xl my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
        />
        <button
          className="w-full mt-4 px-4 py-4 text-center font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleClick}
        >
          reset password
        </button>{" "}
      </div>
    </div>
  );
}

export default page;
