import Image from "next/image";
import "../../styles/globals.css";
import "../../styles/type.css";

export default function SelfIntroduction() {
  return (
    <div className="container flex flex-row justify-center mx-[10%] w-full min-h-screen">
      <div className="z-10 flex flex-col justify-start items-start pb-8 text-gray-800 font-light mx-[10%] overflow-ellipsis">
        <div className="flex items-center justify-center">
          <Image
            src="/images/3devices.png"
            alt="３デバイス使用見本"
            width={540}
            height={250}
            className="opacity-100"
          />
        </div>
        <span className="font-medium text-sm text-left">
          <h3 className="font-bold text-2xl">自己紹介</h3> <br />
        </span>
        <p>川本 雅之</p>
        兵庫→大阪→京都→東京→京都
        <br />
        現在は大阪を中心に活動しています。
        <br />
      </div>
    </div>
  );
}
