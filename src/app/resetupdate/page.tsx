"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Page() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const resetUpdate = async () => {
    if (token.length > 0) {
      try {
        const response = await axios.post("/api/users/verifyupdate", {
          email,
          password,
          token,
        });
        console.log(response);
        setVerified(true);
        toast.success("password updated");
        setTimeout(() => {
          router.push("/login");
        }, 10000);
      } catch (error: any) {
        // console.error(error.message);
        toast.error(error.response.data.error);
        setError(error);
      }
    } else {
      // console.log("error occurred while");
      toast.error("token incorrect again try");
    }
  };
  useEffect(() => {
    const tokens = window.location.search.split("=")[1];
    setToken(tokens || "");
    console.log(tokens || " ");
  }, []);
  return (
    <div className="flex flex-col min-h-screen gap-7 w-full justify-center items-center ">
      <div className="w-full   lg:w-[30%] flex flex-col shadow-lg py-8 gap-10 px-7 rounded-md shadow-gray-500">
        <h1 className="font-bold font-serif text-center my-2">
          update your password
        </h1>
        <input
          type="email"
          name=""
          id=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="enter your email address"
          className=" block shadow-2xl my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className=" block shadow-2xl my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
        />
        <button
          onClick={() => {
            resetUpdate();
          }}
          className="w-full mt-4 px-4 py-4 text-center font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          save password
        </button>
        <div className="justify-center w-full first-letter:capitalize font-bold text-xl font-serif text-center flex gap-3">
          {" "}
          <span> {verified ? "reset done" : "wait now"}</span>
          <span> {error ? "error" + error.toString() : ""}</span>
        </div>
      </div>
    </div>
  );
}

export default Page;
