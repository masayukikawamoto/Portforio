import Image from "next/image";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full bg-cover bg-center">
        <Image
          src="/images/iss043e093710~medium.jpg"
          alt="背景画像"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 w-[90%] max-w-3xl">
        <div className="font-thin text-6xl">MASA</div>
        <div className="font-black text-6xl">PORTFOLIO</div>
        <div className="font-thin text-4xl">profile</div>
        <div className="font-thin text-4xl">app</div>
        <div className="font-thin text-4xl">skill set</div>
      </div>

      <footer className="py-4 bg-gray-100 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </>
  );
}
