import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const WebApp: NextPage = () => {
  return (
    <main className="relative w-screen flex flex-col items-center justify-start md:px-32 py-10">
      <div className="bg-[url('/assets/img/webapp.png')] -z-10 fixed w-screen h-screen bg-cover top-0 left-0 brightness-[20%] blur-sm" />
      <header className="flex flex-col items-center w-full py-12">
        <h1 className="lg:text-5xl text-center font-bold mb-5">
          Web/App Development Club
        </h1>
        <h2 className="lg:text-xl text-center">
          Learn how to build practical and industry-standard web and mobile
          applications!
        </h2>
        <div className="flex flex-row w-1/2 items-center justify-center pt-5">
          <a
            href="mailto:markvilleappdevelopment@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-3xl mx-2" />
          </a>
          <a
            href="https://github.com/MarkvilleAppDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl mx-2" />
          </a>
        </div>
      </header>
      <section className="flex-col w-full lg:px-10">
        <p className="text-center text-lg my-5 font-medium">
          Here at Markville's Web/App Development Club, we provide students with
          a unique opportunity to apply their programming skills and work
          together to create a real-world project.
        </p>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-3/5 lg:px-5">
            <p className="my-5 text-base text-slate-50">
              Our priority is to make web/app development accessible to all
              students of all experience levels, from beginner coders to
              programming wizards. We provide non-coding opportunities as well,
              such as graphic design, marketing, and project management.
            </p>
            <p className="my-5 text-base text-slate-50">
              Each student will have the opportunity to build their own website
              or mobile app using the skills they learn here at Markville's
              Web/App Development Club!
            </p>
          </div>
          <div className="lg:w-2/5 lg:px-10">
            <Image
              src="/assets/img/webapp.png"
              alt="Web/App Development"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>
      <section className="w-full lg:px-32 px-5 py-10">
        <div className="w-full bg-slate-200/30 ring-1 ring-slate-50/60 rounded-lg p-5 flex flex-col justify-center items-center">
          <h3 className="text-slate-50 font-bold text-xl mb-3">
            Students will learn:
          </h3>
          <ul className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 w-full">
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/html.png"
                alt="HTML"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/css.png"
                alt="CSS"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/js.png"
                alt="JavaScript"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/node.png"
                alt="Node.js"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/react.png"
                alt="React.js"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/tailwind.png"
                alt="TailwindCSS"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/git.png"
                alt="Git"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
            <li className="h-16 relative m-3">
              <Image
                src="/assets/logos/figma.png"
                alt="Figma"
                fill
                style={{ objectFit: "contain" }}
              />
            </li>
          </ul>
          <h3 className="text-slate-50 font-bold text-xl mb-3">and more!</h3>
        </div>
      </section>
      {/*<section>
        <h3 className="text-slate-50 font-bold text-xl mb-3">
          Projects we've worked on
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2">
          <li>Bo!nk</li>
          <li>Wolfpack App</li>
          <li>TeachAssist App</li>
          <li>Wordle Plus</li>
          <li>Markham Trails</li>
        </ul>
  </section>*/}
    </main>
  );
};

export default WebApp;
