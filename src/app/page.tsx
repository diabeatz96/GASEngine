// import Form from "next/form";

export default function Home() {
  return (
    <div className="flex-1 justify-center items-center h-[100vh]">
      <h1 className="text-center text-black text-7xl mt-5">GAS</h1>
      <div className="flex justify-center">
        <input className="bg-[#B98DE7] w-[50%] pl-3 h-11 rounded-full mt-10 text-black text-lg focus:outline-0" type="text"></input>
      </div>
    </div>
  );
}
