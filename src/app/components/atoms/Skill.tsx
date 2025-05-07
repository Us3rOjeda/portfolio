import { SkillProps } from "../../lib/types/types"

const Skill = ({ title, svgComponent }: SkillProps) => {
  return (
    <li className="bg-[#dcdbdc] p-6 flex flex-col 
    gap-6 items-center justify-center xl:h-80 xl:w-80">
      <h3 className="font-semibold lg:text-lg">{title}</h3>
      {svgComponent}
    </li>
  )
}

export default Skill