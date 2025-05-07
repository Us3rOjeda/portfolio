"use client"

import Skill from '../atoms/Skill';
import { 
  HtmlSvg,
  CssSvg,
  TailwindSvg,
  JavasScriptSvg,
  TypeScriptSvg,
  VueSvg,
  ReactSvg,
  ReduxSvg,
  NextJsSvg,
  GitSvg
} from "../../lib/constants/dynamicImports";
import useIsMobile from '@/app/lib/hooks/useIsMobile';

const Skills = () => {
  const isMobile = useIsMobile();
  const isXl = useIsMobile(1280);
  
  return (
    <section id='skills' className='h-full p-6 md:p-8 xl:p-20'>
      <h2 className='text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[160px]
      font-semibold pb-4 mb-6 md:mb-8 lg select-none'>
        Skills
      </h2>

      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      gap-8 xl:gap-12'>
        <Skill title="HTML/HTML5" svgComponent={<HtmlSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="CSS/CSS3" svgComponent={<CssSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="Tailwind CSS" svgComponent={<TailwindSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="JavaScript" svgComponent={<JavasScriptSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="TypeScript" svgComponent={<TypeScriptSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="Vue.js" svgComponent={<VueSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="React" svgComponent={<ReactSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="Redux" svgComponent={<ReduxSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="Next.js" svgComponent={<NextJsSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <Skill title="Git" svgComponent={<GitSvg width={isMobile ? 67 : isXl ? 100 : 150} />} />
        <li className="bg-[#dcdbdc] p-6 flex flex-col 
        gap-6 items-center justify-center h-[200px] xl:h-80 xl:w-80">
          <h3 className='text-3xl md:text-5xl font-bold text-[#9c9797]'>
            GSAP
          </h3>
        </li>
      </ul>
    </section>
  )
}

export default Skills