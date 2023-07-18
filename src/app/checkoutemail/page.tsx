import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="w-full h-[100vh] flex justify-center px-4 items-center">
      <div className="w-full flex flex-col lg:w-[30%] justify-center items-center gap-6 py-8 px-4 shadow-md shadow-gray-500">
          <p className="text-2xl text-slate-900 first-letter:capitalize font-bold font-serif text-center">check your email</p>
         <Image src={"/chekoutemail.jpg"} width="300"  height="300" alt="chekout email" />
          <Link href="/" className="w-full bg-indigo-600 text-white text-xl rounded-md shadow-md text-center capitalize py-2" >return home</Link>
      </div>
    </div>
  );
}

export default Page;
