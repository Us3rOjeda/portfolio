import { Content } from "../../lib/constants/dynamicImports";

export default function Contact({isEnglish}: {isEnglish: boolean}) {
  return (
    <div
      id='contact' 
      className='relative h-[100vh] bg-[#090b0b] text-[#f6f4f4]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='relative h-[calc(100vh+100vh)] -top-[100vh]'>
        <div className='h-[100vh] sticky top-[calc(100vh-100vh)]'>
          <Content isEnglish={isEnglish}/>
        </div>
      </div>
    </div>
  )
}