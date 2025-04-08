import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col justify-center items-center">
        <h1
          className="text-center text-black/70 text-9xl mb-12"
          style={{ fontFamily: "var(--font-jersey)" }}
        >
          GAS Engine
        </h1>
        <div>
          <p className="text-center">find your next game!</p>
          <div className="relative">
            <input
              className="bg-[#B98DE7] shadow-lg w-[45vw] pl-3 h-11 my-5 rounded-full text-white font-bold text-lg focus:outline-0"
              style={{ boxShadow: "3px 6px 0px rgb(110, 56, 165)" }}
              type="text"
            ></input>
            <Search
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              strokeWidth={3}
              color="white"
            />
          </div>
          <p className="text-center">search by filter</p>
        </div>
      </div>
    </div>
  );
}
