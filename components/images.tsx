export const Images = () => {
  return (
    <div className=" h-full flex items-center gap-10 relative">
      <section className="h-[425px] w-[425px] items-center">
        <div className="absolute inset-0 h-[425px] w-[425px]">
          <img
            src="/images/man1.jpg"
            className="object-cover h-full w-full rounded-xl overflow-y-clip"
          />
        </div>
        <div className="relative text-slate-100 pl-8 pr-8">
          <div className="pt-80">
            <div className="flex items-center justify-between">
              <div className="flex-col flex items-start">
                <h3 className="font-bold text-base">Shashwat Dimri</h3>
                <p className="text-sm">Google Intern</p>
              </div>
              <div className="flex-col flex w-[150px]">
                <p className="text-xs text-slate-100">
                  " I aspired to be at Google and switch.blabla helped me get
                  there "
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[425px] w-[150px] items-center">
        <div className="absolute ml-[460px] inset-0 h-[425px] w-[150px]">
          <img
            src="/images/man4.jpg"
            className="object-cover h-full w-full rounded-xl overflow-y-clip"
          />
        </div>
        <div className="relative text-slate-100">
          <div className="pt-72">
            <div className="flex items-center justify-between">
              <div className="flex-col flex items-start -rotate-90">
                <h3 className="font-bold text-base">Ishank Lalwani</h3>
                <p className="text-sm">Backend Developer at Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[425px] w-[150px] items-center">
        <div className="absolute ml-[660px] inset-0 h-[425px] w-[150px]">
          <img
            src="/images/man5.jpg"
            className="object-cover h-full w-full rounded-xl overflow-y-clip"
          />
        </div>
        <div className="relative text-slate-100">
          <div className="pt-72">
            <div className="flex items-center justify-between">
              <div className="flex-col flex items-start -rotate-90">
                <h3 className="font-bold text-base">Shubh Mehrotra</h3>
                <p className="text-sm">Frontend Designer at Paypal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
