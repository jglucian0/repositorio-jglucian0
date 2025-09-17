import React, { useEffect, useRef, useState } from "react";

export default function Index() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const offsetTop = el.getBoundingClientRect().top + window.scrollY;
    const onScroll = () => {
      setIsSticky(window.scrollY > offsetTop + 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to reveal elements on scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-animate]")) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      // add a small stagger
      el.style.setProperty("--delay", `${i * 0.06}s`);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#090e16] text-white font-raleway">
      {/* Topbar */}
      <header ref={headerRef} className="w-full">
        {/* Fixed bar when scrolled beyond header */}
        {isSticky && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(9,14,22,0.92)] backdrop-blur-sm" data-animate>
            <div className="max-w-[1640px] mx-auto px-[140px] py-3">
              <div className="w-full h-12 rounded-2xl bg-[rgba(65,127,111,0.03)] flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/1bec16ded1d87067830c6cb62c78f6f5db8f836b?width=73" alt="Logo" className="w-8 h-9" />
                  <span className="text-white font-semibold">João Gabriel Luciano</span>
                </div>
                <nav className="flex items-center gap-[14px]">
                  <a href="#about" className="text-[rgba(255,255,255,0.75)] text-sm hover:text-[#417F6F]">Sobre mim</a>
                  <a href="#portfolio" className="text-[rgba(255,255,255,0.75)] text-sm hover:text-[#417F6F]">Portfólio</a>
                  <a href="#contact" className="text-[rgba(255,255,255,0.75)] text-sm hover:text-[#417F6F]">Contato</a>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Original header area (keeps layout before sticky triggers) */}
        <div className="w-full max-w-[1640px] mx-auto px-[140px] pt-[38px]" data-animate>
          <div className="w-full h-16 rounded-2xl bg-[rgba(65,127,111,0.05)] relative flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1bec16ded1d87067830c6cb62c78f6f5db8f836b?width=73"
                alt="Logo"
                className="w-9 h-10"
              />
              <span className="hidden md:inline text-white font-semibold">João Gabriel Luciano</span>
            </div>

            <nav className="flex items-center gap-[17px]">
              <a href="#" className="text-[rgba(65,127,111,0.50)] font-bold text-lg hover:text-[#417F6F] transition-colors">Home</a>
              <a href="#about" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Sobre mim</a>
              <a href="#portfolio" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Portfólio</a>
              <a href="#skills" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Skills</a>
              <a href="#career" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Carreira</a>
              <a href="#recommendations" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Recomendações</a>
              <a href="#contact" className="text-white font-normal text-lg hover:text-[#417F6F] transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1920px] mx-auto relative">
        {/* Hero Section */}
        <section className="relative px-[140px] pt-[155px]">
          {/* Hero Text */}
          <div className="w-[411px]" data-animate>
            <div className="w-40 h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mb-6">
              <span className="text-[#417F6F] font-bold text-xl">👋 Saudações!</span>
            </div>
            <h1 className="text-[52px] font-black leading-[60px] text-white mb-4"> 
              João Gabriel<br />
              Luciano
            </h1>
            <p className="text-[rgba(255,255,255,0.50)] text-xl font-normal">Backend Developer (Python)</p>
          </div>

          {/* Social Media Icons */}
          <div className="absolute left-[140px] top-[566px]" data-animate>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">...</svg>
          </div>

          {/* Hero Image centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[115px]" data-animate>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b4205266a249c62f23ce261bb094114df636097f?width=1112"
              alt="Profile Avatar"
              className="w-[556px] h-[556px] rounded-full object-cover"
            />
          </div>

          {/* Action Buttons on the right */}
          <div className="absolute right-[140px] top-[260px] flex flex-col gap-4 items-end" data-animate>
            {/* Download CV Button */}
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-4">
                <svg width="253" height="25" viewBox="0 0 253 25"> <text fill="white" x="111" y="19" className="text-base font-semibold font-raleway">Baixar CV</text></svg>
              </a>
            </div>

            {/* Contact Button */}
            <button className="flex items-center gap-4 border border-[#417F6F] rounded-2xl px-8 py-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">...</svg>
              <span className="text-white font-semibold text-base">Vamos conversar</span>
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-[140px] pt-[270px]" data-animate>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/eae24e63868ccc02587c598ad86c73fe7b1a08d3?width=1842"
            alt="Skills and Technologies"
            className="w-[921px] mx-auto h-auto"
          />
        </section>

        {/* About Me Section */}
        <section id="about" className="px-[140px] pt-[166px]">
          <div className="max-w-[1640px] mx-auto text-center" data-animate>
            <div className="w-[283px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🧐 Sobre mim</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-[53px]">Washington Henrique Fernandes de Sousa</h2>
            <div className="text-2xl text-[rgba(255,255,255,0.50)] leading-[34px] max-w-[1640px] mx-auto">
              <p>👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique. Prazer!</p>
              <br />
              <p>👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.</p>
              <br />
              <p>🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos</p>
              <br />
              <p>💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.</p>
              <br />
              <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="px-[140px] pt-[194px]">
          <div className="mb-[90px]" data-animate>
            <div className="w-[144px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🔗 Portfólio</span>
            </div>
            <h2 className="text-5xl font-black text-white">Trabalhos e projetos</h2>
          </div>

          {/* Project Cards */}
          <div className="flex gap-14 max-w-[1608px] mx-auto mb-[90px]">
            {/* Project Card 1 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8" data-animate>
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(74,226,144,0.30)] text-[#4AE290] text-sm font-bold rounded">Online</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <div className="w-[300px] aspect-[3/2] overflow-hidden rounded-lg">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" alt="Move.it Project" className="w-full h-full object-contain"/>
              </div>
            </div>

            {/* Project Card 2 (Featured) */}
            <div className="w-[360px] h-[460px] rounded-2xl bg-[rgba(65,127,111,0.10)] p-8" data-animate>
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <div className="w-[300px] aspect-[3/2] overflow-hidden rounded-lg">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" alt="Move.it Project" className="w-full h-full object-contain"/>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8" data-animate>
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <div className="w-[300px] aspect-[3/2] overflow-hidden rounded-lg">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" alt="Move.it Project" className="w-full h-full object-contain"/>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8" data-animate>
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <div className="w-[300px] aspect-[3/2] overflow-hidden rounded-lg">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" alt="Move.it Project" className="w-full h-full object-contain"/>
              </div>
            </div>
          </div>

          {/* See More Link */}
          <div className="text-center" data-animate>
            <a href="#" className="text-[#417F6F] text-xl font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-4">
              Ver mais projetos na Behance
            </a>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="px-[140px] pt-[192px]" data-animate>
          <div className="max-w-[1640px] mx-auto">
            <div className="text-center mb-[64px]">
              <div className="w-[130px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
                <span className="text-[#417F6F] font-bold text-xl">💼 Carreira</span>
              </div>
              <h2 className="text-5xl font-black text-white">Trajetória até aqui</h2>
            </div>

            {/* Career Timeline Headers */}
            <div className="flex mb-[64px]">
              <div className="w-1/2 text-center">
                <h3 className="text-[32px] font-black text-white mb-2">Área profissional</h3>
                <p className="text-2xl text-[rgba(255,255,255,0.50)]">2016 · Atualmente</p>
              </div>
              <div className="w-1/2 text-center">
                <h3 className="text-[32px] font-black text-white mb-2">Acadêmica</h3>
                <p className="text-2xl text-[rgba(255,255,255,0.50)]">2014 · Atualmente</p>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="space-y-[64px]">
              {/* Row 1 */}
              <div className="flex gap-[85px]">
                {/* Professional */}
                <div className="w-[580px] h-[220px] rounded-2xl border border-[rgba(65,127,111,0.00)] bg-[rgba(65,127,111,0.10)] p-8" data-animate>
                  <h4 className="text-xl font-bold text-white mb-4">Desenvolvedor Front-end na Ensinio</h4>
                  <p className="text-base text-[rgba(255,255,255,0.50)] mb-8">Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#417F6F]">1 ano e 7 meses</span>
                    <span className="text-lg text-[#417F6F]">Abril/2021 · Atualmente</span>
                  </div>
                </div>

                {/* Academic */}
                <div className="w-[580px] h-[220px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8" data-animate>
                  <h4 className="text-xl font-bold text-white mb-4">Superior, Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-base text-[rgba(255,255,255,0.50)] mb-8">Recém graduado pela FATEC de São José dos Campos no curso de Análise e Desenvolvimento de Sistemas.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#417F6F]">3 anos</span>
                    <span className="text-lg text-[#417F6F]">Agosto/2019 · Agosto/2022</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-[140px] pt-[192px]" data-animate>
          <div className="max-w-[663px] mx-auto text-center">
            <div className="w-[138px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">📬 Contatos</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-12">Vamos conversar!</h2>

            <div className="flex items-center justify-center gap-6 mb-6">
              <a href="mailto:henriquesousa.dev@gmail.com" className="text-xl text-[rgba(255,255,255,0.50)] hover:text-white transition-colors">henriquesousa.dev@gmail.com</a>
              <button className="w-[246px] h-[60px] border border-[rgba(65,127,111,0.50)] rounded-2xl flex items-center justify-center gap-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.7391 37.2737C19.971 34.2907 19.3526 30.7649 19.9999 27.3583C20.6471 23.9516 22.5156 20.8984 25.2545 18.7717C27.9934 16.6451 31.4144 15.5913 34.8752 15.8082C38.336 16.0251 41.5986 17.4977 44.0506 19.9497C46.5026 22.4016 47.9752 25.6643 48.1921 29.1251C48.409 32.5859 47.3552 36.0069 45.2285 38.7458C43.1019 41.4847 40.0487 43.3531 36.642 44.0004C33.2354 44.6477 29.7096 44.0292 26.7266 42.2612V42.2612L21.7985 43.6565C21.5966 43.7155 21.3825 43.7192 21.1787 43.6671C20.9749 43.6149 20.7888 43.5089 20.6401 43.3602C20.4913 43.2114 20.3853 43.0254 20.3332 42.8216C20.2811 42.6178 20.2847 42.4037 20.3438 42.2018L21.7391 37.2737Z" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-xl font-semibold text-[rgba(65,127,111,0.50)]">Vamos conversar</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <a href="#top" className="text-xl font-semibold text-[rgba(65,127,111,0.50)] hover:opacity-80 transition-opacity inline-flex items-center gap-4">Voltar ao topo</a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full h-[88px] bg-[rgba(65,127,111,0.1)] mt-[100px] flex items-center justify-between px-[140px]" data-animate>
        <p className="text-base text-[rgba(255,255,255,0.50)]">Copyright © João Gabriel Luciano · 2025</p>
        <div className="flex gap-4">
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">...</div>
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">...</div>
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">...</div>
        </div>
      </footer>
    </div>
  );
}
