export const Images = () => {
  return (
    <div className=" h-full flex items-center gap-10">
      <section className="h-[425px] w-[425px] items-center">
        <img
          src="/images/man1.jpg"
          className="object-cover h-full w-full rounded-xl overflow-y-clip"
        />
      </section>
      <section className="h-[425px] w-[150px] items-center">
        <img
          src="/images/man4.jpg"
          className="object-cover h-full w-full rounded-xl overflow-y-clip"
        />
      </section>
      <section className="h-[425px] w-[150px] items-center">
        <img
          src="/images/man5.jpg"
          className="object-cover h-full w-full rounded-xl overflow-y-clip"
        />
      </section>
    </div>
  );
};
