import Image from "next/image";
import "../styles/globals.css";
import "../styles/type.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full bg-cover bg-center animate-fade animate-duration-20000 animate-ease-in">
        <Image
          src="/images/iss043e093710~medium.jpg"
          alt="背景画像"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 w-[90%] max-w-3xl">
        <div className="flex flex-col w-40">
          <div className="flex flex-col animate-fade-up animate-duration-900 animate-ease-out">
            <div className="inline-block font-thin text-6xl mb-0 leading-none tracking-tighter">
              MASA
            </div>
            <div className="flex flex-row justify-between text-center items-center bg-white w-40 h-1 mx-1 px-1.5">
              <div className="font-extralight text-[0.5rem] tracking-tighter text-gray-800">
                Y
              </div>
              <div className="font-extralight text-[0.5rem] tracking-tighter text-gray-800">
                U
              </div>
              <div className="font-extralight text-[0.5rem] tracking-tighter text-gray-800">
                K
              </div>
              <div className="font-extralight text-[0.5rem] tracking-tighter text-gray-800">
                I
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-0">
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1000 animate-ease-out">
              K
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1100 animate-ease-out">
              A
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1200 animate-ease-out">
              W
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1300 animate-ease-out">
              A
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1400 animate-ease-out">
              M
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1400 animate-ease-out">
              O
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1600 animate-ease-out">
              T
            </div>
            <div className="font-extralight ml-1 mt-0 leading-none animate-fade-up animate-duration-1700 animate-ease-out">
              O
            </div>
          </div>
        </div>
        <div className="font-black text-6xl animate-fade-up animate-duration-1400 animate-ease-out">
          PORTFOLIO
        </div>
        <div className="font-thin text-4xl animate-fade-up animate-duration-1900 animate-ease-out">
          <Link href="/prof">profile</Link>
        </div>
        <div className="hover:animate-color-change font-thin text-4xl animate-fade-up animate-duration-1900 animate-ease-out">
          <Link href="/app">app</Link>
        </div>
      </div>
    </>
  );
}
