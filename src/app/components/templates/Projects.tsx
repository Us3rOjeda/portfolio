import worksData from "../../../data/worksData.json";
import Project from "../atoms/Project";

const Projects = ({isEnglish}: {isEnglish: boolean}) => {
  const works = worksData.works;

  return (
    <section id="projects" className='h-full xl:h-screen p-6 md:p-8 xl:p-20'>
      <h2 className='text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[160px]
      font-semibold pb-4 mb-6 md:mb-8 lg select-none'>
        {isEnglish ? "Projects" : "Proyectos"}
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 xl:gap-10">
        {
          works.map(({title, sourceVideo, websiteLink, technologies}, index) => (
            <Project 
            key={index}
            title={title} 
            sourceVideo={sourceVideo}
            websiteLink={websiteLink}
            technologies={technologies}
            isEnglish={isEnglish}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects