import Link from "next/link";
import "../styles/globals.css";

export default function Navigation() {
  return (
    <header className="w-full bg-transparent">
      <nav className="w-screen flex items-center justify-between">
        <Link href={"/"} className="flex flex-col w-40">
          <div className="flex flex-col animate-fade-up animate-duration-900 animate-ease-out">
            <div className="inline-block font-thin text-6xl mb-0 leading-none tracking-tighter">
              MASA
            </div>
            <div className="flex flex-row justify-between text-center items-center bg-white w-36 h-1 ml-1 px-1.5">
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
          <div className="flex flex-row justify-between mt-0 w-[150px]">
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
        </Link>
        <div className="flex flex-row justify-end text-[15px] gap-11 ml-auto mr-11 animate-fade-up animate-duration-1900 animate-ease-out">
          <Link href={"/profile"} className="hover:text-cyan-200">
            profile
          </Link>
          <Link href={"/portfolio"} className="hover:text-cyan-200">
            portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
}
