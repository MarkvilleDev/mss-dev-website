import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-start md:px-32">
      <Head>
        <title>Markville CS</title>
        <meta
          name="description"
          content="CS Clubs at Markville Secondary School!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center md:h-1/4 h-1/5 py-10">
        <h1 className="md:text-5xl">Markville CS</h1>
        <h2 className="md:text-2xl">
          Explore the CS Clubs offered at Markville Secondary School!
        </h2>
      </header>
      <section className="w-full flex md:h-3/4 h-4/5 flex-col pb-10">
        <ul className="w-full flex flex-col md:flex-row md:h-1/2 h-2/5">
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/2">
            <Link
              href="/webapp"
              className="flex flex-col w-full items-center justify-center rounded-lg ring-1 py-4 px-8 ring-slate-50 h-full text-lg text-center font-bold"
            >
              Web/App Development
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/2 ">
            <Link
              href="/csec"
              className="flex flex-col w-full items-center justify-center rounded-lg ring-1 py-4 px-8 ring-slate-50 h-full text-lg text-center font-bold"
            >
              Computer Science Education
            </Link>
          </li>
        </ul>
        <ul className="w-full flex flex-col md:flex-row md:h-1/2 h-3/5">
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/cybersec"
              className="flex flex-col w-full items-center justify-center rounded-lg ring-1 py-4 px-8 ring-slate-50 h-full text-lg text-center font-bold"
            >
              Cybersecurity
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/gamedev"
              className="flex flex-col w-full items-center justify-center rounded-lg ring-1 py-4 px-8 ring-slate-50 h-full text-lg text-center font-bold"
            >
              Game Development
            </Link>
          </li>
          <li className="p-2 flex items-center justify-center h-full w-full md:w-1/3">
            <Link
              href="/robotics"
              className="flex flex-col w-full items-center justify-center rounded-lg ring-1 py-4 px-8 ring-slate-50 h-full text-lg text-center font-bold"
            >
              Robotics
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
