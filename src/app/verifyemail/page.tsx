"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      toast.success("verify email successfully");
    } catch (error: any) {
      setError(true);
      // console.log(error.reponse.data);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken.replace("%", "$") || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col  w-full lg:w-[30%] mx-auto py-10 px-4 md:px-12 gap-6 bg-white shadow-lg rounded-md shadow-gray-500">
        <h1 className="text-center text-slate-900 text-3xl font-bold font-serif">
          Verify Email
        </h1>
        <h2 className="text-center text-slate-900 text-3xl font-bold font-serif">
          {token ? `${token}` : "no token"}
        </h2>

        {verified && (
          <div>
            <h2 className="text-center text-slate-900 text-3xl font-bold font-serif">
              Email Verified
            </h2>
            <Link
              href="/login"
              className="w-full mt-4 px-4 py-4 font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </Link>
          </div>
        )}
        {error && (
          <div         className="w-full mt-4 px-4 py-4 font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <h2 className="w-full mt-4 px-4 py-4 font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Error
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
