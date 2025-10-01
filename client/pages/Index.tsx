import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import profileImg from "@/assets/profile.png";
import logoImg from "@/assets/logo.png";
import pythonImg from "@/assets/python.png";
import djangoImg from "@/assets/dj.png";
import sqlImg from "@/assets/post.png";
import skillsImg from "@/assets/hard_skills.png";
import skillsMobileImg from "@/assets/hard_skills_mobile.png";
import curriculoPdf from "@/assets/João_Gabriel_Luciano_Curriculo.pdf";
import projeto1_frenteImg from "@/assets/projeto1_frente.png";
import projeto1_versoImg from "@/assets/projeto1_verso.png";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCodeDownload } from "react-icons/io";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import { BsBrowserSafari } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../lib/custom-slick.css";

// ALTERAÇÃO: Adicionado ícone de menu
import { HiOutlineMenuAlt3 } from "react-icons/hi";


// Componente para o menu mobile
function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#090e16] text-white flex flex-col items-center justify-center space-y-8"
    >
      <button onClick={onClose} className="absolute top-8 right-8 text-white text-3xl">
        &times;
      </button>
      <a onClick={onClose} href="#home" className="text-3xl font-bold hover:text-[#417F6F]">Home</a>
      <a onClick={onClose} href="#skills" className="text-3xl font-bold hover:text-[#417F6F]">Hard skills</a>
      <a onClick={onClose} href="#about" className="text-3xl font-bold hover:text-[#417F6F]">Sobre mim</a>
      <a onClick={onClose} href="#portfolio" className="text-3xl font-bold hover:text-[#417F6F]">Portfólio</a>
      <a onClick={onClose} href="#career" className="text-3xl font-bold hover:text-[#417F6F]">Carreira</a>
      <a onClick={onClose} href="#contact" className="text-3xl font-bold hover:text-[#417F6F]">Contato</a>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  status: "Online" | "Offline";
  siteUrl: string;
  repoUrl: string;
  description: string;
  techs: string[];
  frontImg: string;
  backImg: string;
}

export function ProjectCard({
  title,
  status,
  siteUrl,
  repoUrl,
  description,
  techs,
  frontImg,
  backImg
}: ProjectCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* ALTERAÇÃO: w-full para se adaptar ao mobile */}
      <div
        className="w-full rounded-2xl border border-[#417f6f7f] p-4 sm:p-8 sm:w-[390px]"
        data-animate
      >
        {/* Título + Status */}
        <div className="flex justify-start items-center mb-4">
          {/* ALTERAÇÃO: Ajuste de font-size */}
          <h3 className="text-lg sm:text-[18px] mr-3 font-bold text-white">{title}</h3>
          <span
            className={`px-2 py-1 text-xs sm:text-[13px] rounded cursor-pointer ${status === "Online"
              ? "bg-[rgba(74,226,144,0.30)] text-[#4AE290]"
              : "bg-[#e24a4a4c] text-[#e24a4a]"
              }`}
          >
            <b>{status}</b>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col mb-4 gap-2">
          <div className="flex gap-2 text-[#ffffff]">
            <BsBrowserSafari className="mt-[1px]" />
            <a
              href={siteUrl}
              target="_blank"
              className="text-sm sm:text-[14px] underline text-[#417F6F]"
            >
              Clique para acessar o projeto
            </a>
          </div>
          <div className="flex gap-2">
            <FaGithub className="mt-[1px]" />
            <a
              href={repoUrl}
              target="_blank"
              className="text-sm sm:text-[14px] underline text-[#417F6F]"
            >
              Clique para acessar o repositório
            </a>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-[#ffffff7f] h-[100px]">{description}</p>

        {/* Techs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techs.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-[14px] font-bold rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Imagem com hover */}
        {/* ALTERAÇÃO: w-full e h-auto */}
        <img
          src={hover ? backImg : frontImg}
          alt={title}
          className="w-full h-auto rounded-lg object-cover transition duration-500"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    </motion.div>
  );
}

interface ProfessionalCardProps {
  title: string;
  description: string[];
  duration: string;
  period: string;
  borderColor?: string; // opcional para customizar a borda
  bgColor?: string; // opcional para background
  height?: string;
}

export function ProfessionalCard({
  title,
  description,
  duration,
  period,
  borderColor = "rgba(65,127,111,0.50)",
  bgColor = "rgba(65,127,111,0.10)",
  height = "500px"
}: ProfessionalCardProps) {
  return (
    <div
      className={`w-full max-w-sm mx-auto sm:w-[390px] md:w-[600px] h-auto rounded-2xl border p-4`}
      style={{ borderColor, backgroundColor: bgColor, height }}
    >
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4">{title}</h4>

      {description.map((desc, i) => (
        <p
          key={i}
          className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4"
        >
          {desc}
        </p>
      ))}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <span className="text-base sm:text-lg font-bold text-[#417F6F]">{duration}</span>
        <span className="text-base sm:text-lg text-[#417F6F]">{period}</span>
      </div>
    </div>
  );
}


export default function Index() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const offsetTop = el.offsetTop;

    const getOffset = () => {
      // Verifica a largura da tela
      return window.innerWidth <= 768 ? 65 : 20;
    };

    const onScroll = () => {
      const scrollOffset = getOffset();
      setIsSticky(window.scrollY > offsetTop + scrollOffset);
    };

    // Chama a função onScroll() ao carregar a página
    // e ao redimensionar a tela para garantir que o valor de offset seja atualizado
    const handleResize = () => {
      onScroll();
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Reduzi o threshold para 0.4 para uma detecção mais rápida no scroll
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-animate]")) as HTMLElement[];
    if (!els.length) return;

    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY;
      const dir = y > lastY ? "down" : y < lastY ? "up" : "none";
      lastY = y;

      if (dir === "up") {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top >= vh) {
            el.classList.remove("visible");
            el.removeAttribute("data-seen");
          }
        });
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("visible");
            el.setAttribute("data-seen", "true");
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el, i) => {
      el.style.setProperty("--delay", `${i * 0.00}s`);
      io.observe(el);
    });

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
        el.classList.add("visible");
        el.setAttribute("data-seen", "true");
      }
    });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Função auxiliar para determinar o estilo ativo - LÓGICA FINAL
  const getLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;

    // Condição especial para 'Home': Ativa se a rolagem estiver no topo (menos de 100px)
    const isHomeActiveOnTop = sectionId === "home" && window.scrollY < 100;

    // Classes de estilo:
    const baseClass = "text-sm hover:text-[#417F6F] transition-colors";
    const activeClass = (isActive || isHomeActiveOnTop) ? "text-[#417F6F] font-bold" : "text-white";

    return `${baseClass} ${activeClass}`;
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-[#090e16] text-white font-raleway">
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      <header ref={headerRef} className="w-full" >
        {isSticky && (
          <div className="fixed top-0 left-0 right-0 z-50 ">
            {/* ALTERAÇÃO: px e py para mobile */}
            <div className="mx-auto px-6 py-3 md:px-[140px]">
              {/* ALTERAÇÃO: Oculta a navegação no mobile e mostra botão */}
              <div className="w-full h-12 rounded-2xl bg-[#417f6f0d] backdrop-blur-lg flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                  <img src={logoImg} alt="Logo" className="w-6 h-6" />
                  <span className="text-white font-semibold hidden md:inline">João Gabriel Luciano</span>
                </div>
                <nav className="hidden md:flex items-center gap-[14px]">
                  <a href="#" className={`${getLinkClass("home")} text-sm hover:text-[#417F6F]`}>Home</a>
                  <a href="#skills" className={`${getLinkClass("skills")} text-sm hover:text-[#417F6F]`}>Hard skills</a>
                  <a href="#about" className={`${getLinkClass("about")} text-sm hover:text-[#417F6F]`}>Sobre mim</a>
                  <a href="#portfolio" className={`${getLinkClass("portfolio")} text-sm hover:text-[#417F6F]`}>Portfólio</a>
                  <a href="#career" className={`${getLinkClass("career")} text-sm hover:text-[#417F6F]`}>Carreira</a>
                  <a href="#contact" className={`${getLinkClass("contact")} text-sm hover:text-[#417F6F]`}>Contato</a>
                </nav>
                <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white text-2xl">
                  <HiOutlineMenuAlt3 />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Original header area */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <div className="w-full mx-auto px-6 pt-6 md:px-[140px] md:pt-[38px]" data-animate>
          <div className="w-full h-16 rounded-2xl bg-[rgba(65,127,111,0.05)] relative flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="hidden md:inline text-white font-semibold">João Gabriel Luciano</span>
            </div>

            {/* ALTERAÇÃO: Oculta a navegação no mobile e mostra botão */}
            <nav className="hidden md:flex items-center gap-[17px]">
              <a href="#" className={`text-sm font-bold text-[#417F6F]`}>Home</a>
              <a href="#skills" className={`text-sm hover:text-[#417F6F]`}>Hard skills</a>
              <a href="#about" className={`text-sm hover:text-[#417F6F]`}>Sobre mim</a>
              <a href="#portfolio" className={`text-sm hover:text-[#417F6F]`}>Portfólio</a>
              <a href="#career" className={`text-sm hover:text-[#417F6F]`}>Carreira</a>
              <a href="#contact" className={`text-sm hover:text-[#417F6F]`}>Contato</a>
            </nav>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white text-2xl">
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header >

      {/* Main Content */}
      < div className="w-full min-h-screen relative" >
        {/* Hero Section */}
        {/* ALTERAÇÃO: px, pt e flex-col para mobile, e centralização dos itens */}
        <section id="home" className="relative w-full max-w-[1920px] mt-5 mx-auto px-6 md:px-[140px] mb-[100px] md:pt-[150px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center text-center lg:text-left gap-6 md:gap-10 lg:gap-20">
          {/* Hero Text */}
          <div className="flex flex-col items-center lg:items-start order-2 lg:order-1" data-animate>
            <div className="w-40 h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mb-6">
              <span
                className="text-[#417F6F] font-bold"
                style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
              >
                👋 Saudações!
              </span>
            </div>

            {/* Nome */}
            <h1
              className="font-black leading-tight text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.25rem)" }}
              data-animate
            >
              <span className="hidden md:inline">
                João Gabriel<br />
                Luciano
              </span>
              <span className="md:hidden">
                João Gabriel Luciano
              </span>
            </h1>


            {/* Subtítulo */}
            <p
              className="text-[rgba(255,255,255,0.50)] font-normal mb-4"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              data-animate
            >
              Backend Developer (Python)
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center lg:justify-start" data-animate>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="https://www.linkedin.com/in/jgluciano/"
                  title="Acessar Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <LinkedinIcon width="38" height="38" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="https://github.com/jglucian0"
                  title="Acessar Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <GithubIcon width="38" height="38" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Hero Image and Action Buttons */}
          {/* ALTERAÇÃO: Centraliza a imagem e esconde as bolinhas */}
          <div className="relative flex items-center justify-center order-1 lg:order-2" data-animate>
            {/* ALTERAÇÃO: w-full e h-auto para se adaptar ao mobile */}
            <img
              src={profileImg}
              alt="Profile Avatar"
              className="w-full max-w-[330px] sm:max-w-[330px] lg:max-w-[450px] h-auto rounded-full object-contain"
            />
            {/* ALTERAÇÃO: Esconde as imagens flutuantes em telas menores */}
            <motion.img
              src={pythonImg}
              alt="Python"
              className="md:left-0 block absolute w-full max-w-[330px] sm:max-w-[330px] lg:max-w-[450px] h-auto rounded-full object-contain"
              animate={{ y: [-10, 0, -10], x: [+6, -6, +6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={djangoImg}
              alt="Django"
              className="md:left-0 block absolute w-full max-w-[330px] sm:max-w-[330px] lg:max-w-[450px] h-auto rounded-full object-contain"
              animate={{ y: [-5, +5, -5], x: [0, +5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={sqlImg}
              alt="PostgreSQL"
              className="md:left-0 block absolute w-full max-w-[330px] sm:max-w-[330px] lg:max-w-[450px] h-auto rounded-full object-contain"
              animate={{ y: [0, -10, 0], x: [-6, +6, -6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col mt-5 md:mt-0 gap-0 md:gap-4 items-center md:items-end justify-end order-3" data-animate>
            {/* Download CV Button */}
            <div className="flex mb-4 items-center gap-4 rounded-2xl px-8">
              <motion.div
                className="text-4xl font-bold text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={curriculoPdf}
                  target="_blank"
                  title="Ver Currículo"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <IoIosCodeDownload className="text-[#ffffff] w-9 h-9" />
                  <span className="flex text-center text-white font-semibold text-base">Ver Currículo</span>
                </a>
              </motion.div>
            </div>

            {/* Contact Button */}
            <button className="flex text-center items-center gap-4 border border-[#417F6F] border-[2px] rounded-2xl px-8 py-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
              <motion.span
                className="text-4xl font-bold text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className="flex items-center gap-4"
                  href="https://wa.me/5543996142131"
                  title="Acessar Whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-[#ffffff] w-6 h-6" />
                  <span className="text-white font-semibold text-base">Vamos conversar</span>
                </a>
              </motion.span>
            </button>
          </div>
        </section>

        {/* Skills Section */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <section id="skills" className="px-6 md:px-[140px] pt-20 md:pt-[120px] mb-[145px]" data-animate>
          <div className="max-w-[1640px] mx-auto text-center">
            <div className="w-[283px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">💻 Hard skills</span>
            </div>
            {/* ALTERAÇÃO: Ajuste de font-size */}
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 md:mb-[90px]">Tecnologias e habilidades</h2>
            <div className="text-base sm:text-2xl text-[rgba(255,255,255,0.50)] leading-normal sm:leading-[34px] max-w-[1640px] mx-auto">
              <p>Techs que uso no dia a dia</p>
              <br />
              {/* ALTERAÇÃO: w-full e h-auto para se adaptar ao mobile */}
              <img src={skillsImg} alt="Logo" className="hidden md:block w-full h-auto max-w-[1000px] flex items-center justify-center mx-auto" />
              {/* ALTERAÇÃO: Imagem para mobile */}
              <img src={skillsMobileImg} alt="Logo" className="md:hidden w-full h-auto max-w-[350px] flex items-center justify-center mx-auto" />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <section id="about" className="px-6 md:px-[140px] pt-20 md:pt-[100px] mb-[50px]" data-animate>
          <div className="max-w-[1640px] mx-auto text-center">
            <div className="w-[283px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🧐 Sobre mim</span>
            </div>
            {/* ALTERAÇÃO: Ajuste de font-size */}
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 md:mb-[90px]">João Gabriel Luciano</h2>
            <div className="text-base sm:text-2xl text-[rgba(255,255,255,0.50)] leading-normal sm:leading-[34px] max-w-[1100px] mx-auto">
              <p>
                Desenvolvedor Backend Python. Apaixonado por tecnologia e um bom café.<br />
                Atualmente estudando na EBAC com foco em desenvolvimento backend python. ☕
              </p>
              <br />
              <p>
                Tenho experiência prática com criação e manutenção de aplicações python, desenvolvimento de APIs RESTful com Django e Django REST Framework, aplicação de regras de negócio e integração com bancos de dados como PostgreSQL.
              </p>
              <br />
              <p>
                Utilizo Git para versionamento, tenho familiaridade com testes automatizados e estou em progresso nos estudos com Docker, CI/CD e arquitetura distribuída.
              </p>
              <br />
              <p>
                Busco atuar em projetos desafiadores, colaborando para entregar soluções escaláveis e bem estruturadas. Valorizo o aprendizado constante, visando melhorar meu código e seguir boas práticas no desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-6 md:px-[140px] md:pt-[150px] mb-[50px]" data-animate>
          <div className="mb-10 md:mb-[90px] max-w-[1640px] mx-auto text-center">
            <div className="w-[283px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🔗 Portfólio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white">Trabalhos e projetos</h2>
          </div>

          {/* Project Cards */}
          <div className="block md:hidden">
            {/* Carrossel visível apenas em telas pequenas */}
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              adaptiveHeight={true}
              arrows={false}
            // Ajuste essas opções conforme necessário
            >
              <div className="">
                <ProjectCard
                  title="HappyKids - Micro SaaS"
                  status="Online"
                  siteUrl="https://happykidsmr.netlify.app"
                  repoUrl="https://github.com/jglucian0/toy-rental-backend"
                  description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
                  techs={[
                    "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
                  ]}
                  frontImg={projeto1_frenteImg}
                  backImg={projeto1_versoImg}
                />
              </div>
              <div className="">
                <ProjectCard
                  title="HappyKids - Micro SaaS"
                  status="Offline"
                  siteUrl="https://happykidsmr.netlify"
                  repoUrl="https://github.com/jglucian0/toy-rental-backend"
                  description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
                  techs={[
                    "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
                  ]}
                  frontImg={projeto1_frenteImg}
                  backImg={projeto1_versoImg}
                />
              </div>
              <div className="">
                <ProjectCard
                  title="HappyKids - Micro SaaS"
                  status="Offline"
                  siteUrl="https://happykidsmr.netlify"
                  repoUrl="https://github.com/jglucian0/toy-rental-backend"
                  description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
                  techs={[
                    "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
                  ]}
                  frontImg={projeto1_frenteImg}
                  backImg={projeto1_versoImg}
                />
              </div>
            </Slider>
          </div>

          <div className="hidden md:flex md:flex-row md:flex-wrap md:gap-10 max-w-[1608px] justify-center mx-auto mb-10 md:mb-[90px]">
            {/* Layout original visível apenas em telas maiores */}
            <ProjectCard
              title="HappyKids - Micro SaaS"
              status="Online"
              siteUrl="https://happykidsmr.netlify.app"
              repoUrl="https://github.com/jglucian0/toy-rental-backend"
              description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
              techs={[
                "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
              ]}
              frontImg={projeto1_frenteImg}
              backImg={projeto1_versoImg}
            />
            <ProjectCard
              title="HappyKids - Micro SaaS"
              status="Offline"
              siteUrl="https://happykidsmr.netlify"
              repoUrl="https://github.com/jglucian0/toy-rental-backend"
              description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
              techs={[
                "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
              ]}
              frontImg={projeto1_frenteImg}
              backImg={projeto1_versoImg}
            />
            <ProjectCard
              title="HappyKids - Micro SaaS"
              status="Offline"
              siteUrl="https://happykidsmr.netlify"
              repoUrl="https://github.com/jglucian0/toy-rental-backend"
              description="Plataforma web (SaaS) para otimizar a gestão de locadoras de brinquedos..."
              techs={[
                "Python", "Django", "Axios", "Git", "PostgreSQL", "Javascript", "React", "Django REST Framework"
              ]}
              frontImg={projeto1_frenteImg}
              backImg={projeto1_versoImg}
            />
          </div>

          {/* See More Link */}
          <div className="text-center">
            <a href="https://github.com/jglucian0" title="Meu perfil no GitHub" target="_blank" className="text-[#417F6F] mt-10 md:mt-0 text-lg sm:text-xl font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-2">
              Ver mais projetos no Github
              <IoIosArrowForward />
            </a>
          </div>
        </section>

        {/* Career Section */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <section id="career" className="hidden md:flex px-6 md:px-[140px] md:pt-[150px] mb-[50px]" data-animate>
          <div className="max-w-[1640px] mx-auto">
            <div className="text-center mb-10 md:mb-[64px]">
              <div className="w-[130px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
                <span className="text-[#417F6F] font-bold text-xl">💼 Carreira</span>
              </div>
              {/* ALTERAÇÃO: Ajuste de font-size */}
              <h2 className="text-3xl md:text-5xl font-black text-white">Trajetória até aqui</h2>
            </div>

            {/* Career Timeline Headers */}
            {/* CORREÇÃO APLICADA: Mantido o text-center para centralizar o texto em ambas as colunas (mobile e desktop). */}
            <div className="flex flex-col md:flex-row mb-10 md:mb-[64px] items-center text-center">
              <div className="w-full ml-20">
                <h3 className="text-xl md:text-[32px] font-black text-white mb-2">Área profissional</h3>
                <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.50)]">2022 · Atualmente</p>
              </div>
              <div className="w-full mr-20">
                <h3 className="text-xl md:text-[32px] font-black text-white mb-2">Acadêmica</h3>
                <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.50)]">2021 · Atualmente</p>
              </div>
            </div>

            {/* Career Timeline */}
            {/* ALTERAÇÃO: flex-col e centraliza para mobile */}
            <div className="space-y-8 md:space-y-[64px] items-center flex flex-col">

              {/* Career Timeline */}
              {/* Novo contêiner principal para as duas colunas */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] items-start">

                {/* Coluna 1: Área Profissional */}
                <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-[64px]">

                  {/* Card 1 Profissional: Desenvolvedor Backend */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] bg-[rgba(65,127,111,0.10)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Desenvolvedor Backend - Freelancer</h4>
                    {/* ... (Conteúdo do Backend) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Desenvolvimento de APIs RESTful utilizando Django e Flask (Python), focadas na aplicação de regras de negócio.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Integração com bancos de dados PostgreSQL e arquitetura assíncrona com Redis e RabbitMQ (mensageria).
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Implantação de aplicações em ambiente Linux, aplicando práticas de CI/CD e utilizando Docker para conteinerização e Git para versionamento contínuo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">1 ano e 11 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Novembro/2023 · Atualmente</span>
                    </div>
                  </div>

                  {/* Card 2 Profissional: Exército Brasileiro */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Exército Brasileiro - 26º Grupo de Artilharia de Campanha</h4>
                    {/* ... (Conteúdo do Exército) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Integrei a equipe responsável pela Comunicação Social e Tecnologia da Informação do Batalhão, gerenciando a transparência institucional e a produção de conteúdo.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Atuação em TI focada na estilização e manutenção do front-end de páginas web internas (sistemas de gestão interna), otimizando a organização e acessibilidade da informação.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">1 ano e 11 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Março/2022 · Março/2023</span>
                    </div>
                  </div>

                </div>

                {/* Coluna 2: Área Acadêmica */}
                <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-[64px]">

                  {/* Card 1 Acadêmico: Graduação ADS */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] bg-[#417f6f19] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Graduação em Tecnologia em Análise e Desenvolvimento de Sistemas - Uninter</h4>
                    {/* ... (Conteúdo da Graduação) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-7">
                      Cursando formação superior orientada à análise de requisitos e modelagem de soluções de software de ponta a ponta.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Desenvolvimento de competências em gestão de projetos e na concepção de sistemas com foco em escalabilidade e padrões de mercado. Foco na aplicação de métodos para traduzir problemas de negócio em especificações técnicas, visando a alta performance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">9 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Janeiro/2024 · Atualmente</span>
                    </div>
                  </div>

                  {/* Card 2 Acadêmico: EBAC */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Formação Desenvolvedor Full Stack Python - EBAC</h4>
                    {/* ... (Conteúdo da EBAC) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-5">
                      Formação intensiva Full Stack, com foco na arquitetura Backend em Python (Django) e no desenvolvimento Frontend.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-6">
                      Aprendizado prático de bancos de dados (PostgreSQL), ambiente Linux, utilização de Git, metodologias para boas práticas e padrões de projeto.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Capacitação para desenvolver aplicações do zero, desde a interface do usuário até a estrutura interna e bancos de dados.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">3 anos</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Maio/2023 · Maio/2025</span>
                    </div>
                  </div>

                  {/* Card 3 Acadêmico: Inglês */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Inglês: Certificação EF SET (B1 Intermediário)</h4>
                    {/* ... (Conteúdo do Inglês) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      B1 Intermediário (41/100) obtido no teste de proficiência internacional EF SET, alinhado ao QECR.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Escrita no Nível B2 (Independente), ideal para comunicação técnica e documentação de projetos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">Certificado EF SET</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Julho/2025</span>
                    </div>
                  </div>

                  {/* Card 4 Acadêmico: Ensino Médio Técnico IFPR */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Ensino Médio Técnico em Eletrotécnica - IFPR</h4>
                    {/* ... (Conteúdo do IFPR) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Conclusão do Ensino Médio Técnico Integrado pelo Instituto Federal do Paraná (IFPR), em Ivaiporã, com foco em eletrônica e sistemas.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Formação sólida que inclui a análise de circuitos elétricos, sistemas de controle, e uso prático de ferramentas de automação e medição.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">5 anos</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Janeiro/2017 · Dezembro/2021</span>
                    </div>
                  </div>



                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Career Mobile Section */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <section id="career" className="md:hidden px-6 md:px-[140px] md:pt-[150px] mb-[50px]" data-animate>
          <div className="w-full max-w-sm mx-auto px-4">
            <div className="text-center mb-10 md:mb-[64px]">
              <div className="w-[130px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
                <span className="text-[#417F6F] font-bold text-xl">💼 Carreira</span>
              </div>
              {/* ALTERAÇÃO: Ajuste de font-size */}
              <h2 className="text-3xl md:text-5xl font-black text-white">Trajetória até aqui</h2>
            </div>

            {/* Career Timeline Headers */}
            {/* CORREÇÃO APLICADA: Mantido o text-center para centralizar o texto em ambas as colunas (mobile e desktop). */}
            <div className="flex flex-col md:flex-row mb-10 md:mb-[64px] items-center text-center">
              <div className="w-full ml-20">
                <h3 className="text-xl md:text-[32px] font-black text-white mb-2">Área profissional</h3>
                <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.50)]">2022 · Atualmente</p>
              </div>
              <div className="w-full mr-20">
                <h3 className="text-xl md:text-[32px] font-black text-white mb-2">Acadêmica</h3>
                <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.50)]">2021 · Atualmente</p>
              </div>
            </div>

            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              adaptiveHeight={true}
              arrows={false}
            // Ajuste essas opções conforme necessário
            >
              <ProfessionalCard
              
                title="Desenvolvedor Backend - Freelancer"
                description={[
                  "Desenvolvimento de APIs RESTful utilizando Django e Flask (Python), focadas na aplicação de regras de negócio.",
                  "Integração com bancos de dados PostgreSQL e arquitetura assíncrona com Redis e RabbitMQ (mensageria).",
                  "Implantação de aplicações em ambiente Linux, aplicando práticas de CI/CD e utilizando Docker para conteinerização e Git para versionamento contínuo."
                ]}
                duration="1 ano e 11 meses"
                period="Novembro/2023 · Atualmente"
              />

              <ProfessionalCard
                title="Exército Brasileiro - 26º Grupo de Artilharia de Campanha"
                description={[
                  "Integrei a equipe responsável pela Comunicação Social e Tecnologia da Informação do Batalhão, gerenciando a transparência institucional e a produção de conteúdo.",
                  "Atuação em TI focada na estilização e manutenção do front-end de páginas web internas (sistemas de gestão interna), otimizando a organização e acessibilidade da informação."
                ]}
                duration="1 ano e 11 meses"
                period="Março/2022 · Março/2023"
              />

            </Slider>


            {/* Career Timeline */}
            <div className="space-y-8 md:space-y-[64px] items-center flex flex-col">
              <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] items-start">

                {/* Coluna 1: Área Profissional */}
                <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-[64px]">

                  {/* Card 1 Profissional: Desenvolvedor Backend */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] bg-[rgba(65,127,111,0.10)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Desenvolvedor Backend - Freelancer</h4>
                    {/* ... (Conteúdo do Backend) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Desenvolvimento de APIs RESTful utilizando Django e Flask (Python), focadas na aplicação de regras de negócio.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Integração com bancos de dados PostgreSQL e arquitetura assíncrona com Redis e RabbitMQ (mensageria).
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Implantação de aplicações em ambiente Linux, aplicando práticas de CI/CD e utilizando Docker para conteinerização e Git para versionamento contínuo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">1 ano e 11 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Novembro/2023 · Atualmente</span>
                    </div>
                  </div>

                  {/* Card 2 Profissional: Exército Brasileiro */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Exército Brasileiro - 26º Grupo de Artilharia de Campanha</h4>
                    {/* ... (Conteúdo do Exército) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Integrei a equipe responsável pela Comunicação Social e Tecnologia da Informação do Batalhão, gerenciando a transparência institucional e a produção de conteúdo.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Atuação em TI focada na estilização e manutenção do front-end de páginas web internas (sistemas de gestão interna), otimizando a organização e acessibilidade da informação.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">1 ano e 11 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Março/2022 · Março/2023</span>
                    </div>
                  </div>

                </div>

                {/* Coluna 2: Área Acadêmica */}
                <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-[64px]">

                  {/* Card 1 Acadêmico: Graduação ADS */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] bg-[#417f6f19] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Graduação em Tecnologia em Análise e Desenvolvimento de Sistemas - Uninter</h4>
                    {/* ... (Conteúdo da Graduação) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-7">
                      Cursando formação superior orientada à análise de requisitos e modelagem de soluções de software de ponta a ponta.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Desenvolvimento de competências em gestão de projetos e na concepção de sistemas com foco em escalabilidade e padrões de mercado. Foco na aplicação de métodos para traduzir problemas de negócio em especificações técnicas, visando a alta performance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">9 meses</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Janeiro/2024 · Atualmente</span>
                    </div>
                  </div>

                  {/* Card 2 Acadêmico: EBAC */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Formação Desenvolvedor Full Stack Python - EBAC</h4>
                    {/* ... (Conteúdo da EBAC) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-5">
                      Formação intensiva Full Stack, com foco na arquitetura Backend em Python (Django) e no desenvolvimento Frontend.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-6">
                      Aprendizado prático de bancos de dados (PostgreSQL), ambiente Linux, utilização de Git, metodologias para boas práticas e padrões de projeto.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Capacitação para desenvolver aplicações do zero, desde a interface do usuário até a estrutura interna e bancos de dados.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">3 anos</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Maio/2023 · Maio/2025</span>
                    </div>
                  </div>

                  {/* Card 3 Acadêmico: Inglês */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Inglês: Certificação EF SET (B1 Intermediário)</h4>
                    {/* ... (Conteúdo do Inglês) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      B1 Intermediário (41/100) obtido no teste de proficiência internacional EF SET, alinhado ao QECR.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Escrita no Nível B2 (Independente), ideal para comunicação técnica e documentação de projetos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">Certificado EF SET</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Julho/2025</span>
                    </div>
                  </div>

                  {/* Card 4 Acadêmico: Ensino Médio Técnico IFPR */}
                  <div className="w-full md:w-[600px] h-auto rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Ensino Médio Técnico em Eletrotécnica - IFPR</h4>
                    {/* ... (Conteúdo do IFPR) ... */}
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Conclusão do Ensino Médio Técnico Integrado pelo Instituto Federal do Paraná (IFPR), em Ivaiporã, com foco em eletrônica e sistemas.
                    </p>
                    <p className="text-sm sm:text-base text-[rgba(255,255,255,0.50)] mb-4">
                      Formação sólida que inclui a análise de circuitos elétricos, sistemas de controle, e uso prático de ferramentas de automação e medição.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span className="text-base sm:text-lg font-bold text-[#417F6F]">5 anos</span>
                      <span className="text-base sm:text-lg text-[#417F6F]">Janeiro/2017 · Dezembro/2021</span>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* ALTERAÇÃO: px e pt para mobile */}
        <section id="contact" className="px-6 md:px-[140px] md:pt-[150px] mb-[150px]">
          <div className="max-w-[663px] mx-auto text-center">
            <div className="w-[138px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">📞 Contato</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Sua próxima solução de Back-end começa aqui.</h2>
            <p className="text-base sm:text-xl text-[rgba(255,255,255,0.50)] mb-10">
              Se você tem um projeto desafiador em mente ou está buscando um Desenvolvedor Back-end para consolidar sua equipe, entre em contato.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/5543996142131" title="Acessar Whatsapp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 border-[#417F6F] border-[2px] rounded-2xl px-8 py-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-[#ffffff] w-6 h-6" />
                  <span className="text-white font-semibold text-base">Vamos conversar</span>
                </div>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jgluciano@icloud.com" title="Enviar E-mail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-[#417F6F] justify-center border-[2px] rounded-2xl px-8 py-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
                <div className="flex items-center gap-4">
                  <MdOutlineAlternateEmail className="text-[#ffffff] w-6 h-6" />
                  <span className="text-white font-semibold text-base">Me envie um e-mail</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="px-6 md:px-[140px] border-t border-[rgba(255,255,255,0.1)] py-8">
          <div className="max-w-[1640px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">

            {/* 1. Direitos Autorais e Créditos (Alinhado à esquerda no desktop) */}
            <p className="text-sm text-[rgba(255,255,255,0.4)] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} João Gabriel Luciano - Todos os direitos reservados.
            </p>

            {/* 2. Links Sociais (Centralizado no meio da div) */}
            {/* Ajustei para que o link de E-mail seja um ícone, se desejar, para manter o visual limpo */}
            <div className="flex items-center space-x-6 text-2xl">

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center lg:justify-start" data-animate>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href="https://www.linkedin.com/in/jgluciano/"
                    title="Acessar Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <LinkedinIcon width="38" height="38" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href="https://github.com/jglucian0"
                    title="Acessar Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <GithubIcon width="38" height="38" />
                  </a>
                </motion.div>
              </div>

            </div>
          </div>
        </footer>

      </div >
    </div >
  );
}