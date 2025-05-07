const Home = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <section id="home" className="p-6 md:p-8 xl:p-20 xl:h-screen">
      <div>
        <h1 className="text-5xl md:text-[5.1em] lg:text-8xl xl:text-9xl 2xl:text-[160px]
          font-bold mb-2 lg:mb-4 2xl:mb-8 lg:leading-[1.1] xl:font-semibold select-none">
          {isEnglish ? (
            <>
              {`Hi, I'm a`} <br />
              Frontend <br />
              Developer.
            </>
          ) : (
            <>
              Soy un <br />
              Desarrollador <br />
              Frontend.
            </>
          )}
        </h1>

        <p className="text-sm md:text-lg lg:text-xl xl:text-3xl select-none
          w-[280px] md:w-[500px] font-semibold xl:font-[500] xl:w-[700px] 2xl:w-[800px]">
          {isEnglish
            ? `I'm Máximo Ojeda and I build
              responsive and user-friendly web
              applications.`
            : `Soy Máximo Ojeda y creo aplicaciones web 
              responsivas y fáciles de usar.`}
        </p>
      </div>
    </section>
  );
};

export default Home;
