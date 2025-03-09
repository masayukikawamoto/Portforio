import Image from "next/image";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="relative inset-0 h-screen w-full bg-cover bg-center animate-fade animate-duration-10000 animate-ease-in">
        <Image
          src="/images/iss043e093710~medium.jpg"
          alt="背景画像"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute"></div>
    </>
  );
}
