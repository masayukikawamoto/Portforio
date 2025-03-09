import "../../styles/globals.css";
import SelfIntroduction from "@/components/contents/SelfIntroduction";

export default function Home() {
  return (
    <>
      <div className="relative inset-0 text-amber-300"></div>
      <div className="font-black text-6xl text-amber-400 animate-fade-up animate-duration-500 animate-ease-out">
        PROFILE
      </div>
      <div className="w-full h-full bg-amber-400">
        <SelfIntroduction />
      </div>
    </>
  );
}
