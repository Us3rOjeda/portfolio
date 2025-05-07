import { NavbarProps } from "../../lib/types/types";

const Navbar = ({ isEnglish, toggleLanguage }: NavbarProps) => {
  const navItems = isEnglish
    ? ["HOME", "PROJECTS", "SKILLS", "CONTACT"]
    : ["INICIO", "PROYECTOS", "SKILLS", "CONTACTO"];

  const navLinks = ["home", "projects", "skills", "contact"];

  return (
    <header className="hidden md:fixed w-full p-8 pr-20 md:flex items-center justify-end">
      <nav className="flex items-center gap-12">
        <ul className="flex gap-6 xl:gap-12 font-semibold text-sm xl:text-md">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${navLinks[index]}`}
                className="cursor-pointer group relative"
              >
                <span className="relative z-10">{item}</span>
                <span
                  className="absolute left-0 -bottom-0.5 
                  h-0.5 w-0 bg-current transition-all duration-300 
                  group-hover:w-full"
                ></span>
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleLanguage}
          className="bg-white text-black font-semibold px-4 
          py-1 text-sm rounded hover:bg-gray-200 transition-all
          cursor-pointer"
        >
          {isEnglish ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
