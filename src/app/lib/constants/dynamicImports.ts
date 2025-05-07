import dynamic from "next/dynamic";

// COMPONENTS
export const Navbar = dynamic(() => import('../../components/templates/Navbar'), { ssr: true });
export const Home = dynamic(() => import('../../components/templates/Home'), { ssr: true });
export const Projects = dynamic(() => import('../../components/templates/Projects'), { ssr: true });
export const Skills = dynamic(() => import('../../components/templates/Skills'), { ssr: true });
export const Contact = dynamic(() => import('../../components/templates/Contact'), { ssr: true });
export const Content = dynamic(() => import('../../components/atoms/ContactContent'), { ssr: true });

// ICONS
export const HtmlSvg = dynamic(() => import('../../components/atoms/icons/HtmlSvg'), { ssr: true });
export const CssSvg = dynamic(() => import('../../components/atoms/icons/CssSvg'), { ssr: true });
export const TailwindSvg = dynamic(() => import('../../components/atoms/icons/TailwindSvg'), { ssr: true });
export const JavasScriptSvg = dynamic(() => import('../../components/atoms/icons/JavasScriptSvg'), { ssr: true });
export const TypeScriptSvg = dynamic(() => import('../../components/atoms/icons/TypeScriptSvg'), { ssr: true });
export const ReactSvg = dynamic(() => import('../../components/atoms/icons/ReactSvg'), { ssr: true });
export const ReduxSvg = dynamic(() => import('../../components/atoms/icons/ReduxSvg'), { ssr: true });
export const NextJsSvg = dynamic(() => import('../../components/atoms/icons/NextJsSvg'), { ssr: true });
export const GitSvg = dynamic(() => import('../../components/atoms/icons/GitSvg'), { ssr: true });
export const VueSvg = dynamic(() => import('../../components/atoms/icons/VueSvg'), { ssr: true });
