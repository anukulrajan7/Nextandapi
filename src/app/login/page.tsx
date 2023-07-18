"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 py-2">
      <div className=" flex flex-col h-full lg:h-fit md:w-[80%] w-full lg:w-[30%] gap-6 px-10 py-10 bg-white shadow-lg shadow-gray-300 items-center justify-between">
        <h1 className="text-slate-900 text-3xl font-bold text-center my-2">
          {loading ? "Processing" : "Login"}
        </h1>

        <input
          className=" block shadow-lg my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
          id="email "
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email address"
        />

        <input
          autoComplete="off"
          className=" block shadow-lg my-2 placeholder:text-black text-black font-semibold font-serif outline-none text-xl px-3 py-4 border-gray-300 rounded-md w-full mx-auto text-center bg-white shadow-gray-300"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />
        <button
          onClick={onLogin}
          className="w-full mt-4 px-4 py-4 font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login here
        </button>
        <Link
          href="/signup"
          className="w-full mt-4 px-4 my-2 text-center font-serif text-xl font-bold text-slate-900"
        >
          Visit Signup page
        </Link>
        <Link
          href="/resetpassword"
          className="w-full mt-4 px-4 py-4 text-center font-semibold font-serif first-letter:capitalize text-white bg-indigo-600 border border-transparent rounded-md text-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

>
          reset password
        </Link>
      </div>
    </div>
  );
}
