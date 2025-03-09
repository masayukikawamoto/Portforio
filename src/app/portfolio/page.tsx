import Image from "next/image";
import "../../styles/globals.css";
import "../../styles/type.css";
import Apps from "../../components/contents/Apps";

export default function Portfolio() {
  return (
    <>
      <div className="relative inset-0 text-amber-300"></div>
      <div className="font-black text-6xl text-amber-400  animate-fade-up animate-duration-500 animate-ease-out">
        PORTFOLIO
      </div>
      <div className="w-full h-full bg-amber-400">
        <Apps />
      </div>
    </>
  );
}
