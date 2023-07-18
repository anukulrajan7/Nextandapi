
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiOutlineFacebook} from "react-icons/ai"
import {TiSocialLinkedin} from "react-icons/ti"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
function page() {
  

  return (
    <div className="w-full m-0 min-h-screen flex flex-col bg-white relative ">
      <header className="w-full px-4 py-4 bg-purple-700  shadow-md shadow-gray-300 flex justify-evenly items-center">
        <div className="flex w-full lg:w-[80%] justify-between items-center mx-auto">
          <div className="logo bg-white w-fit px-3 py-2 rounded-sm shadw-md flex gap-2 font-semibold shadow-gray-200">
            <span className="text-purple-700 font-serif text-xl hidden md:block">
              Anukul <span className="text-slate-700">cv</span>
            </span>
          </div>
          <nav className="flex justify-center gap-5 capitalize text-white  lg:text-[22px]   items-center">
            <Link href={"/"}><AiOutlineHome/></Link>

            <Link
              href={"/login"}
              className="bg-slate-900 text-white w-fit px-4 py-2 shadow-md text-sm rounded-md"
            >
              signin
            </Link>
            <div className="profile flex justify-center items-center">
              <Link
                href={"/profile"}
                className="bg-gray-300 rounded-full w-[40px] h-[40px] flex justify-center items-center border-[2px] border-black "
              >
                {" "}
                <Image
                  alt="profile image"
                  src={"/userimage.png"}
                  width={50}
                  height={50}
                ></Image>{" "}
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-4 bg-gray-200">
          <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto w-full px-4 gap-6 items-center justify-center min-h-screen">
            <section className="px-4 py-2 lg:w-[50%] w-full mb-8 h-full flex flex-col text-start justify-center items-center gap-6 ">

              <h1 className="lg:text-8xl text-4xl leading-snug bg-clip-text bg-gradient-to-t bg-blue-600 font-bold mb-4 font-serif text-purple-700 text-transparent">Welcome to My Website</h1>
              <p className="text-3xl font-serif font-semibold text-purple-700">
                This is the first section of the home page.
              </p>
              <p className="text-sm font-bold font-serif text-indigo-600">
                How do you convince visitors your website is worth their time?
                There are so many elements that a top-notch landing page design
                needs, and making those elements the "best" they can be often
                depends on what your landing page goals are.
              </p>
            </section>
            <section className=" lg:w-[50%] w-full  flex justify-center items-center mx-auto h-full">
              <div className="relative w-full  shadow-md rounded-md p-1 shadow-white ">
                <Image
                  src="/image1.jpg"
                  alt="Image"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="container mx-auto px-4 bg-gray-700">
          <div className="flex md:flex-row-reverse py-8 px-4  gap-5 flex-col-reverse w-full lg:w-[80%] mx-auto items-center justify-center min-h-screen">
            <section className="flex flex-col gap-5 mx-4 justify-center items-center w-[50%]">
              <h1 className="text-5xl leading-normal font-bold text-indigo-100 font-serif ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h1>
              <p className="font-serif font-bold text-purple-300 text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, adipisci..
              </p>
            </section>
            <section className="w-[50%] flex flex-col justify-center items-center">
              <div className="relative w-full p-2 bg-white shadow-md shadow-gray-300">
                <Image
                  src="/image2.png"
                  alt="Image"
                  width={1000}
                  height={1000}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-md w-full py-5 px-4 justify-center flex flex-col gap-4 items-center mx-auto ">
        <div className="bg-purple-700 h-[2px] w-[80%] mx-auto "></div>
        <div className="flex gap-6 md:w-[80%] justify-between md:flex-row items-center  w-full flex-col">
          <p>@copyright 2003 reserved to anukul</p>
          <div className="flex gap-4 bg-purple-400 text-white py-2 text-3xl px-3"><AiOutlineFacebook/> <AiOutlineInstagram></AiOutlineInstagram> <TiSocialLinkedin></TiSocialLinkedin></div>
        </div>
      </footer>
    </div>
  );
}

export default page;
