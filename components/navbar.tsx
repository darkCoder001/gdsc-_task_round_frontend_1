import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 flex justify-between items-center w-full h-[80px] px-24">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex items-end">
          <Image src="/images/arrow3.png" alt="" height={25} width={25} />
        </div>
        <div className="flex items-end font-bold mt-1.5 text-green-900 text-lg">
          Switch.blabla
        </div>
      </div>
      <div className="flex items-center gap-16">
        <p className="text-teal-800 font-medium hover:text-black hover:cursor-pointer">
          Benefits
        </p>
        <p className="text-teal-800 font-medium hover:text-black hover:cursor-pointer">
          Templates
        </p>
        <p className="text-teal-800 font-medium hover:text-black hover:cursor-pointer">
          About Us
        </p>
        <p className="text-teal-800 font-medium hover:text-black hover:cursor-pointer">
          Pricing
        </p>
      </div>
      <div className="flex items-center">
        <button className="flex items-center gap-1 text-white font-medium border-2 border-teal-800 rounded-full px-5 py-2 mr-7 group hover:text-teal-800 hover:bg-slate-100 bg-teal-800">
          Create CV now
        </button>
      </div>
    </nav>
  );
};
