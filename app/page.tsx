import { Navbar } from "@/components/navbar";
import { Images } from "@/components/images";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-slate-100">
      <section className="w-full h-full justify-evenly p-24 pb-[115px]">
        <Navbar />
        <div className="flex items-center gap-10 justify-between h-full w-full">
          <div className="flex flex-col items-centre gap-2 justify-center h-full w-full">
            <p className="text-5xl font-semibold text-teal-800">
              Unlock{" "}
              <span className="text-teal-500 text italic opacity-50">Your</span>
            </p>
            <p className="text-5xl font-semibold text-teal-800">
              career potential
              <span className="text-teal-500 text opacity-50 font-extrabold">
                .
              </span>
            </p>
            <div className="flex-col flex items-start mt-10">
              <button className="flex items-center gap-1 text-white font-medium border-2 border-teal-800 rounded-full px-[70px] py-2 hover:text-teal-800 hover:bg-slate-100 bg-teal-800">
                Create CV now
              </button>
            </div>
            <div className="items-end flex gap-[120px] mt-10">
              <div className="h-[25px] w-[25px] items-end flex gap-[0.5px]">
                <img src="/images/star.png" />
                <img src="/images/star.png" />
                <img src="/images/star.png" />
                <img src="/images/star.png" />
                <img src="/images/star.png" />
              </div>
              <p className="text-sm text-black font-medium">
                TrustScore 4.8 | 347 reviews
              </p>
            </div>
          </div>
          <Images />
        </div>
      </section>

      <div className="h-[70px] w-full items-end bg-teal-800"></div>
    </main>
  );
}
