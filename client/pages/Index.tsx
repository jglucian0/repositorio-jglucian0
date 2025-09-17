export default function Index() {
  return (
    <div className="min-h-screen bg-[#090e16] text-white font-raleway">
      {/* Topbar */}
      <header className="w-full max-w-[1640px] mx-auto px-[140px] pt-[38px]">
        <div className="w-full h-16 rounded-2xl bg-[rgba(65,127,111,0.05)] relative flex items-center justify-between px-6">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1bec16ded1d87067830c6cb62c78f6f5db8f836b?width=73" 
            alt="Logo" 
            className="w-9 h-10"
          />
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
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1920px] mx-auto relative">
        {/* Hero Section */}
        <section className="relative px-[140px] pt-[155px]">
          {/* Hero Text */}
          <div className="w-[411px]">
            <div className="w-40 h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mb-6">
              <span className="text-[#417F6F] font-bold text-xl">👋 Saudações!</span>
            </div>
            <h1 className="text-[52px] font-black leading-[60px] text-white mb-4">
              João Gabriel<br />
              Luciano
            </h1>
            <p className="text-[rgba(255,255,255,0.50)] text-xl font-normal">
              Backend Developer (Python)
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="absolute left-[140px] top-[566px]">
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <g clipPath="url(#clip0_30_56)">
                <path d="M15.9999 0C24.837 0 32 7.164 32 16.0001C32 24.8361 24.837 32 15.9999 32C7.1629 32 0 24.836 0 16.0001C0 7.16411 7.16301 0 15.9999 0Z" fill="white" fillOpacity="0.5"/>
                <path d="M9.01599 21.984H12.012V11.998H9.01599V21.984ZM20.688 11.6521C19.234 11.6521 17.933 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.4211 18.0591 14.304 19.3731 14.304C20.687 14.304 21.0111 15.4211 21.0111 16.5381V21.9831H24.0071V16.3151C24.007 12.378 22.143 11.6521 20.688 11.6521ZM10.5 11C11.328 11 12 10.328 12 9.49997C12 8.67195 11.328 8.00003 10.5 8.00003C9.67199 8.00003 8.99995 8.67206 8.99995 9.50008C8.99995 10.3281 9.67199 11 10.5 11Z" fill="#090E16"/>
              </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M64.7381 0.333344C55.6745 0.333344 48.3334 7.67445 48.3334 16.738C48.3334 23.9971 53.0292 30.1284 59.5501 32.302C60.3703 32.4455 60.6779 31.9534 60.6779 31.5228C60.6779 31.1332 60.6574 29.8413 60.6574 28.4674C56.5357 29.2261 55.4694 27.4626 55.1413 26.5399C54.9568 26.0682 54.157 24.6123 53.4598 24.2227C52.8857 23.9151 52.0654 23.1564 53.4393 23.1359C54.7312 23.1154 55.654 24.3252 55.9616 24.8174C57.438 27.2986 59.7962 26.6014 60.7394 26.1707C60.883 25.1044 61.3136 24.3867 61.7852 23.9766C58.1352 23.5665 54.3211 22.1516 54.3211 15.8768C54.3211 14.0928 54.9568 12.6164 56.0026 11.468C55.8385 11.0579 55.2644 9.37644 56.1666 7.12079C56.1666 7.12079 57.5405 6.69017 60.6779 8.80227C61.9903 8.43317 63.3847 8.24861 64.7791 8.24861C66.1735 8.24861 67.5679 8.43317 68.8803 8.80227C72.0177 6.66966 73.3916 7.12079 73.3916 7.12079C74.2938 9.37644 73.7197 11.0579 73.5556 11.468C74.6014 12.6164 75.2371 14.0723 75.2371 15.8768C75.2371 22.1721 71.4025 23.5665 67.7524 23.9766C68.3471 24.4893 68.8598 25.4735 68.8598 27.0115C68.8598 29.2056 68.8393 30.9691 68.8393 31.5228C68.8393 31.9534 69.1468 32.466 69.9671 32.302C76.4469 30.1284 81.1428 23.9766 81.1428 16.738C81.1428 7.67445 73.8017 0.333344 64.7381 0.333344Z" fill="white" fillOpacity="0.5"/>
              <path d="M118.416 16.704C118.193 16.7031 117.973 16.7487 117.768 16.838C117.564 16.9272 117.381 17.0581 117.23 17.2223C117.08 17.3865 116.965 17.5803 116.894 17.7914C116.822 18.0024 116.796 18.2261 116.816 18.448H120.112C120.133 18.2177 120.104 17.9856 120.027 17.7676C119.95 17.5497 119.827 17.3509 119.666 17.1852C119.505 17.0194 119.309 16.8906 119.094 16.8075C118.878 16.7244 118.647 16.6891 118.416 16.704Z" fill="white" fillOpacity="0.5"/>
              <defs>
                <clipPath id="clip0_30_56">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Hero Image and Action Buttons */}
          <div className="absolute right-[374px] top-[115px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b4205266a249c62f23ce261bb094114df636097f?width=1112" 
              alt="Profile Avatar" 
              className="w-[556px] h-[517px]"
            />
          </div>

          {/* Action Buttons */}
          <div className="absolute left-[140px] top-[615px] flex flex-col gap-4">
            {/* Download CV Button */}
            <div className="flex items-center gap-4">
              <svg width="253" height="25" viewBox="0 0 253 25">
                <text fill="white" x="111" y="19" className="text-base font-semibold font-raleway">Baixar CV</text>
                <path d="M223.384 5.15069V17.3836" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M217.589 11.589L223.384 17.3836L229.178 11.589" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M216.301 19.9589H230.466" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Contact Button */}
            <button className="flex items-center gap-4 border border-[#417F6F] rounded-2xl px-8 py-4 hover:bg-[rgba(65,127,111,0.1)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M26.6999 71.5865C25.262 69.1605 24.759 66.2931 25.2854 63.5226C25.8118 60.7521 27.3314 58.269 29.5588 56.5395C31.7863 54.8099 34.5685 53.9529 37.383 54.1293C40.1976 54.3057 42.851 55.5034 44.8451 57.4975C46.8392 59.4915 48.0368 62.1449 48.2132 64.9595C48.3896 67.7741 47.5326 70.5562 45.803 72.7837C44.0735 75.0111 41.5904 76.5307 38.8199 77.0571C36.0494 77.5835 33.182 77.0805 30.756 75.6426V75.6426L26.7482 76.7774C26.584 76.8254 26.4099 76.8284 26.2441 76.786C26.0784 76.7436 25.9271 76.6574 25.8061 76.5364C25.6851 76.4154 25.5989 76.2642 25.5565 76.0984C25.5141 75.9327 25.5171 75.7586 25.5651 75.5943L26.6999 71.5865Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M39.5806 72.4315C38.3099 72.4347 37.0511 72.1868 35.8765 71.7019C34.7019 71.2171 33.6346 70.505 32.7361 69.6064C31.8376 68.7079 31.1254 67.6407 30.6406 66.4661C30.1558 65.2915 29.9079 64.0326 29.911 62.7619C29.9142 61.8675 30.2718 61.0109 30.9053 60.3796C31.5389 59.7483 32.3968 59.3938 33.2912 59.3938V59.3938C33.4387 59.3927 33.5839 59.4313 33.7114 59.5056C33.8388 59.58 33.9439 59.6873 34.0155 59.8164L35.4279 62.279C35.5119 62.4287 35.555 62.5979 35.5529 62.7696C35.5508 62.9412 35.5035 63.1093 35.4158 63.2569L34.2811 65.1521C34.8623 66.4452 35.8974 67.4802 37.1904 68.0615L39.0857 66.9267C39.2333 66.839 39.4013 66.7918 39.573 66.7897C39.7446 66.7875 39.9138 66.8306 40.0635 66.9146L42.5262 68.3271C42.6552 68.3987 42.7626 68.5037 42.8369 68.6312C42.9113 68.7587 42.9499 68.9038 42.9487 69.0514C42.9456 69.9448 42.5901 70.8009 41.9595 71.4337C41.3289 72.0666 40.474 72.4252 39.5806 72.4315V72.4315Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white font-semibold text-base">Vamos conversar</span>
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-[140px] pt-[270px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/eae24e63868ccc02587c598ad86c73fe7b1a08d3?width=1842" 
            alt="Skills and Technologies" 
            className="w-[921px] h-[583px] mx-auto"
          />
        </section>

        {/* About Me Section */}
        <section id="about" className="px-[140px] pt-[166px]">
          <div className="max-w-[1640px] mx-auto text-center">
            <div className="w-[283px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🧐 Sobre mim</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-[53px]">Washington Henrique Fernandes de Sousa</h2>
            <div className="text-2xl text-[rgba(255,255,255,0.50)] leading-[34px] max-w-[1640px] mx-auto">
              <p>�� Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique. Prazer!</p>
              <br /><br />
              <p>👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.</p>
              <br />
              <p>🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos</p>
              <br />
              <p>💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.</p>
              <br /><br />
              <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="px-[140px] pt-[194px]">
          <div className="mb-[90px]">
            <div className="w-[144px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mb-6">
              <span className="text-[#417F6F] font-bold text-xl">🔗 Portfólio</span>
            </div>
            <h2 className="text-5xl font-black text-white">Trabalhos e projetos</h2>
          </div>

          {/* Project Cards */}
          <div className="flex gap-14 max-w-[1608px] mx-auto mb-[90px]">
            {/* Project Card 1 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">
                Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(74,226,144,0.30)] text-[#4AE290] text-sm font-bold rounded">Online</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" 
                alt="Move.it Project" 
                className="w-[300px] h-[200px] rounded-lg"
              />
            </div>

            {/* Project Card 2 (Featured) */}
            <div className="w-[360px] h-[460px] rounded-2xl bg-[rgba(65,127,111,0.10)] p-8">
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">
                Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" 
                alt="Move.it Project" 
                className="w-[300px] h-[200px] rounded-lg"
              />
            </div>

            {/* Project Card 3 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">
                Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" 
                alt="Move.it Project" 
                className="w-[300px] h-[200px] rounded-lg"
              />
            </div>

            {/* Project Card 4 */}
            <div className="w-[360px] h-[460px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
              <h3 className="text-xl font-bold text-white mb-4">Move.it</h3>
              <p className="text-sm text-[rgba(255,255,255,0.50)] mb-8 h-[100px]">
                Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">React JS</span>
                <span className="px-2 py-1 bg-[rgba(65,127,111,0.10)] text-[#417F6F] text-sm font-bold rounded">Typescript</span>
              </div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e0ea53426b0946a47b8f71c83a3da68be14cbe8?width=600" 
                alt="Move.it Project" 
                className="w-[300px] h-[200px] rounded-lg"
              />
            </div>
          </div>

          {/* See More Link */}
          <div className="text-center">
            <a href="#" className="text-[#417F6F] text-xl font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-4">
              Ver mais projetos na Behance
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
                <path d="M296.75 19H313.25" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M306.5 12.25L313.25 19L306.5 25.75" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="px-[140px] pt-[192px]">
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
                <div className="w-[580px] h-[220px] rounded-2xl border border-[rgba(65,127,111,0.00)] bg-[rgba(65,127,111,0.10)] p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Desenvolvedor Front-end na Ensinio</h4>
                  <p className="text-base text-[rgba(255,255,255,0.50)] mb-8">
                    Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#417F6F]">1 ano e 7 meses</span>
                    <span className="text-lg text-[#417F6F]">Abril/2021 · Atualmente</span>
                  </div>
                </div>

                {/* Academic */}
                <div className="w-[580px] h-[220px] rounded-2xl border border-[rgba(65,127,111,0.50)] p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Superior, Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-base text-[rgba(255,255,255,0.50)] mb-8">
                    Recém graduado pela FATEC de São José dos Campos no curso de Análise e Desenvolvimento de Sistemas.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#417F6F]">3 anos</span>
                    <span className="text-lg text-[#417F6F]">Agosto/2019 · Agosto/2022</span>
                  </div>
                </div>
              </div>

              {/* Continue with more timeline entries... */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-[140px] pt-[192px]">
          <div className="max-w-[663px] mx-auto text-center">
            <div className="w-[138px] h-[45px] rounded-2xl bg-[rgba(65,127,111,0.10)] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#417F6F] font-bold text-xl">📬 Contatos</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-12">Vamos conversar!</h2>
            
            <div className="mb-8">
              <p className="text-xl text-[#417F6F] mb-4">E-mail:</p>
              <a href="mailto:henriquesousa.dev@gmail.com" className="text-xl text-[rgba(255,255,255,0.50)] hover:text-white transition-colors">
                henriquesousa.dev@gmail.com
              </a>
            </div>

            <button className="w-[246px] h-[60px] border border-[rgba(65,127,111,0.50)] rounded-2xl flex items-center justify-center gap-4 mx-auto hover:bg-[rgba(65,127,111,0.1)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.7391 37.2737C19.971 34.2907 19.3526 30.7649 19.9999 27.3583C20.6471 23.9516 22.5156 20.8984 25.2545 18.7717C27.9934 16.6451 31.4144 15.5913 34.8752 15.8082C38.336 16.0251 41.5986 17.4977 44.0506 19.9497C46.5026 22.4016 47.9752 25.6643 48.1921 29.1251C48.409 32.5859 47.3552 36.0069 45.2285 38.7458C43.1019 41.4847 40.0487 43.3531 36.642 44.0004C33.2354 44.6477 29.7096 44.0292 26.7266 42.2612V42.2612L21.7985 43.6565C21.5966 43.7155 21.3825 43.7192 21.1787 43.6671C20.9749 43.6149 20.7888 43.5089 20.6401 43.3602C20.4913 43.2114 20.3853 43.0254 20.3332 42.8216C20.2811 42.6178 20.2847 42.4037 20.3438 42.2018L21.7391 37.2737Z" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold text-[rgba(65,127,111,0.50)]">Vamos conversar</span>
            </button>

            <div className="mt-12">
              <a href="#" className="text-xl font-semibold text-[rgba(65,127,111,0.50)] hover:opacity-80 transition-opacity inline-flex items-center gap-4">
                Voltar ao topo
                <svg width="20" height="29" viewBox="0 0 20 29" fill="none">
                  <path d="M159 30V8" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M150 17L159 8L168 17" stroke="#417F6F" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full h-[88px] bg-[rgba(65,127,111,0.1)] mt-[100px] flex items-center justify-between px-[140px]">
        <p className="text-base text-[rgba(255,255,255,0.50)]">Copyright © João Gabriel Luciano · 2025</p>
        
        {/* Social Media Icons in Footer */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9.01599 21.984H12.012V11.998H9.01599V21.984ZM20.688 11.6521C19.234 11.6521 17.933 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.4211 18.0591 14.304 19.3731 14.304C20.687 14.304 21.0111 15.4211 21.0111 16.5381V21.9831H24.0071V16.3151C24.007 12.378 22.143 11.6521 20.688 11.6521ZM10.5 11C11.328 11 12 10.328 12 9.49997C12 8.67195 11.328 8.00003 10.5 8.00003C9.67199 8.00003 8.99995 8.67206 8.99995 9.50008C8.99995 10.3281 9.67199 11 10.5 11Z" fill="#090E16"/>
            </svg>
          </div>

          {/* GitHub */}
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M64.7381 0.333344C55.6745 0.333344 48.3334 7.67445 48.3334 16.738C48.3334 23.9971 53.0292 30.1284 59.5501 32.302C60.3703 32.4455 60.6779 31.9534 60.6779 31.5228C60.6779 31.1332 60.6574 29.8413 60.6574 28.4674C56.5357 29.2261 55.4694 27.4626 55.1413 26.5399C54.9568 26.0682 54.157 24.6123 53.4598 24.2227C52.8857 23.9151 52.0654 23.1564 53.4393 23.1359C54.7312 23.1154 55.654 24.3252 55.9616 24.8174C57.438 27.2986 59.7962 26.6014 60.7394 26.1707C60.883 25.1044 61.3136 24.3867 61.7852 23.9766C58.1352 23.5665 54.3211 22.1516 54.3211 15.8768C54.3211 14.0928 54.9568 12.6164 56.0026 11.468C55.8385 11.0579 55.2644 9.37644 56.1666 7.12079C56.1666 7.12079 57.5405 6.69017 60.6779 8.80227C61.9903 8.43317 63.3847 8.24861 64.7791 8.24861C66.1735 8.24861 67.5679 8.43317 68.8803 8.80227C72.0177 6.66966 73.3916 7.12079 73.3916 7.12079C74.2938 9.37644 73.7197 11.0579 73.5556 11.468C74.6014 12.6164 75.2371 14.0723 75.2371 15.8768C75.2371 22.1721 71.4025 23.5665 67.7524 23.9766C68.3471 24.4893 68.8598 25.4735 68.8598 27.0115C68.8598 29.2056 68.8393 30.9691 68.8393 31.5228C68.8393 31.9534 69.1468 32.466 69.9671 32.302C76.4469 30.1284 81.1428 23.9766 81.1428 16.738C81.1428 7.67445 73.8017 0.333344 64.7381 0.333344Z" fill="white" fillOpacity="0.5"/>
            </svg>
          </div>

          {/* Behance */}
          <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1018.47 25.4111C1014.66 25.4111 1010.93 26.5427 1007.75 28.6628C1004.58 30.7829 1002.11 33.7963 1000.65 37.3218C999.186 40.8474 998.804 44.7269 999.549 48.4696C1000.29 52.2123 1002.13 55.6502 1004.83 58.3486C1007.53 61.047 1010.97 62.8846 1014.71 63.6291C1018.45 64.3735 1022.33 63.9914 1025.86 62.5311C1029.38 61.0708 1032.39 58.5978 1034.51 55.4248C1036.63 52.2519 1037.77 48.5215 1037.77 44.7055Z" fill="white" fillOpacity="0.5"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
