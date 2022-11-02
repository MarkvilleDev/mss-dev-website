import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-start md:px-32 py-10">
      <Head>
        <title>Markville CS</title>
        <meta
          name="description"
          content="CS Clubs at Markville Secondary School!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center md:h-1/4 h-1/5 pt-5 pb-10">
        <h1 className="md:text-5xl font-bold uppercase tracking-widest">
          CS at Markville
        </h1>
        <h2 className="md:text-xl my-4">
          Explore the CS Clubs offered at Markville Secondary School!
        </h2>
      </header>
      <section className="w-full flex md:h-3/4 h-4/5 flex-col pb-10">
        <ul className="w-full flex flex-col md:flex-row md:h-1/2 h-2/5">
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/2">
            <Link
              href="/webapp"
              className="flex rounded-lg w-full h-full text-lg text-center font-bold bg-[url('/assets/img/webapp.png')] bg-cover"
            >
              <span className="w-full h-full flex text-center items-center justify-center py-4 px-8 opacity-90 backdrop-blur-lg rounded-lg ring-1 ring-slate-50 bg-black hover:bg-zinc-800/70 hover:backdrop-blur-none duration-700">
                Web/App Development
              </span>
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/2 ">
            <Link
              href="/csec"
              className="flex rounded-lg w-full h-full text-lg text-center font-bold bg-[url('/assets/img/csec.png')] bg-cover"
            >
              <span className="w-full h-full flex text-center items-center justify-center py-4 px-8 opacity-90 backdrop-blur-lg rounded-lg ring-1 ring-slate-50 bg-black hover:bg-zinc-800/70 hover:backdrop-blur-none duration-700">
                Computer Science Education
              </span>
            </Link>
          </li>
        </ul>
        <ul className="w-full flex flex-col md:flex-row md:h-1/2 h-3/5">
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/cybersec"
              className="flex rounded-lg w-full h-full text-lg text-center font-bold bg-[url('/assets/img/cybersecurity.png')] bg-cover"
            >
              <span className="w-full h-full flex text-center items-center justify-center py-4 px-8 opacity-90 backdrop-blur-lg rounded-lg ring-1 ring-slate-50 bg-black hover:bg-zinc-800/70 hover:backdrop-blur-none duration-700">
                Cybersecurity
              </span>
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/gamedev"
              className="flex rounded-lg w-full h-full text-lg text-center font-bold bg-[url('/assets/img/gamedev.png')] bg-cover"
            >
              <span className="w-full h-full flex text-center items-center justify-center py-4 px-8 opacity-90 backdrop-blur-lg rounded-lg ring-1 ring-slate-50 bg-black hover:bg-zinc-800/70 hover:backdrop-blur-none duration-700">
                Game Development
              </span>
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/robotics"
              className="flex rounded-lg w-full h-full text-lg text-center font-bold bg-[url('/assets/img/robotics.png')] bg-cover"
            >
              <span className="w-full h-full flex text-center items-center justify-center py-4 px-8 opacity-90 backdrop-blur-lg rounded-lg ring-1 ring-slate-50 bg-black hover:bg-zinc-800/70 hover:backdrop-blur-none duration-700">
                Robotics
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
