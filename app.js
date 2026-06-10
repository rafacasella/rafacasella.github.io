// ==========================================
// PASSO 1: CENTRAL DE DADOS E CONTEÚDO (Dicionário de Idiomas)
// ==========================================
const portfolioData = {
    en: {
        nav: { home: "Home", about: "About", projects: "Projects", method: "Methodology", contact: "Contact" },
        hero: {
            title: 'Hello, I\'m <br><span class="highlight-name">Rafael Casella</span>',
            subtitle: "| DATA SCIENTIST | AUTOMATION SPECIALIST | PROFESSIONAL TRADER |",
            tagline: "CONVERT COMPLEX FINANCIAL DATA INTO STRATEGIC INSIGHTS",
            btn: 'ABOUT ME <i class="fas fa-chevron-down"></i>'
        },
        profile: {
            title: "PROFILE",
            desc: "I turn messy data into clear business decisions. Specialized in Python automation, SQL querying, and visual storytelling with dashboards that actually get used.",
            meta: { name: "NAME:", location: "LOCATION:", locationVal: "São Paulo, Brazil (Open to Remote)", education: "EDUCATION:", educationVal: "B.S. in Computer Engineering", special: "SPECIALIZATION:", specialVal: "Postgraduate in Data Science, Machine Learning & AI (In Progress)" },
            interestsTitle: "INTERESTS",
            interests: ["Analyzing financial markets & investment portfolios", "Intersection of AI and economics", "Macroeconomic trends & global financial markets"],
            btn: "LET'S TALK",
            stackTitle: "TECH STACK",
            stackDesc: "Core skills, frameworks, and libraries utilized in my daily development workflow:"
        },
        projectsTitle: "Featured Projects",
        projects: [
            { title: "Financial Dashboard Automation", prob: "Manual Excel reports taking 3h daily.", imp: "15h/week saved, real-time data instead of daily for the CFO.", link: "https://streamlit.app" },
            { title: "Customer Churn Predictor", prob: "High monthly churn with no early warning system.", imp: "Logistic regression model with 82.65% accuracy.", link: "https://github.com" },
            { title: "Web Scraping Monitor", prob: "Difficult manual tracking of global economic statements.", imp: "Stealth real-time pipeline to automatically monitor geopolitical mentions.", link: "https://github.com" }
        ],
        liveDemos: {
            tag: "LIVE INTERACTIVE DEMOS",
            title: "Explore My Analytics Dashboards Live",
            subtitle: "Select a tab below to launch and interact with different data applications directly from this interface.",
            tabs: [
                { id: "tab-app1", label: "CFO Dashboard", icon: "fa-chart-line", desc: "Financial Dashboard Automation: Real-time financial metrics tracking. Multi-filter architecture to convert raw operational values into executive insights.", src: "https://streamlit.app?embed=true" },
                { id: "tab-app2", label: "Quant Strategy", icon: "fa-robot", desc: "AI Quant Strategy: Real-time predictive trading dashboard", src: "https://quantumtradingg.streamlit.app/?embed=true&embed_options=disable_light_theme" },
                { id: "tab-app3", label: "Geopolitical Monitor (Desktop)", icon: "fa-desktop", desc: "<strong>OSINT Geopolitical Monitor:</strong> Multi-threaded desktop automation built with CustomTkinter and Playwright. Real-time API monitoring pipeline engineered to bypass web protections locally and deliver immediate notifications.", src: "MEDIA_PREVIEW"}
            ],
            footerLink: 'SEE ALL MY PROJECTS <i class="fas fa-arrow-right" style="font-size: 11px; margin-left: 5px;"></i>'
        },
        methodology: {
            tag: "METHODOLOGY",
            title: "How I Work",
            steps: [
                { icon: "fa-search", title: "1. Discover", desc: "Asking business questions before querying data." },
                { icon: "fa-broom", title: "2. Clean", desc: "Pandas and SQL to turn chaotic datasets into structures." },
                { icon: "fa-chart-line", title: "3. Analyze", desc: "Statistical testing and macro trend breakdowns." },
                { icon: "fa-chart-bar", title: "4. Visualize", desc: "Interactive reports built for C-level executives." },
                { icon: "fa-robot", title: "5. Automate", desc: "Developing and deploying robust Python ETL scripts that handle complete data processing pipelines seamlessly." }
            ]
        },
        contact: { title: "TALK TO ME!", subtitle: "Let's build something great together.", btn: '<i class="fas fa-envelope"></i> SEND AN EMAIL' }
    },
    pt: {
        nav: { home: "Início", about: "Sobre", projects: "Projetos", method: "Metodologia", contact: "Contato" },
        hero: {
            title: 'Olá, eu sou <br><span class="highlight-name">Rafael Casella</span>',
            subtitle: "| CIENTISTA DE DADOS | ESPECIALISTA EM AUTOMAÇÃO | TRADER PROFISSIONAL |",
            tagline: "CONVERTO DADOS FINANCEIROS COMPLEXOS EM INSIGHTS ESTRATÉGICOS",
            btn: 'SOBRE MIM <i class="fas fa-chevron-down"></i>'
        },
        profile: {
            title: "PERFIL",
            desc: "Converto dados brutos em inteligência competitiva e planos de ação claros. Especialista em automação com Python, consultas SQL e storytelling visual com dashboards que realmente geram valor.",
            meta: { name: "NOME:", location: "LOCALIZAÇÃO:", locationVal: "São Paulo, Brazil (Disponível para Remoto)", education: "FORMAÇÃO:", educationVal: "Bacharel em Engenharia de Computação", special: "ESPECIALIZAÇÃO:", specialVal: "Pós-Graduação em Data Science, Machine Learning & IA (Em Andamento)" },
            interestsTitle: "INTERESSES",
            interests: ["Análise de mercados financeiros e carteiras de investimento", "Interseção entre I.A. e dados econômicos", "Tendências macroeconômicas e mercados financeiros globais"],
            btn: "VAMOS CONVERSAR",
            stackTitle: "TECNOLOGIAS",
            stackDesc: "Principais habilidades, frameworks e bibliotecas utilizadas no meu fluxo de desenvolvimento diário:"
        },
        projectsTitle: "Projetos em Destaque",
        projects: [
            { title: "Automação de Dashboard Financeiro", prob: "Relatórios manuais de Excel que consumiam 3h diárias.", imp: "15h/semana economizadas e com os dados em tempo real para o CFO.", link: "https://streamlit.app" },
            { title: "Preditor de Churn de Clientes", prob: "Churn mensal alto e sem sistema de alerta precoce.", imp: "Modelo de regressão logística com acurácia de 82,65% atuando no problema.", link: "https://github.com" },
            { title: "Monitor de Noticias (Web Scraping)", prob: "Dificuldade no rastreamento manual de pronunciamentos econômicos globais.", imp: "Pipeline em tempo real para monitorar menções geopolíticas automaticamente.", link: "https://github.com" }
        ],
        liveDemos: {
            tag: "DEMONSTRAÇÕES INTERATIVAS",
            title: "Explore Meus Dashboards ao Vivo",
            subtitle: "Selecione uma aba abaixo para carregar e interagir com as aplicações de dados direto desta interface.",
            tabs: [
                { id: "tab-app1", label: "CFO Dashboard", icon: "fa-chart-line", desc: "Automação de Dashboard Financeiro: Acompanhamento de métricas financeiras em tempo real. Arquitetura multi-filtro para converter dados operacionais brutos em insights executivos.", src: "https://streamlit.app?embed=true" },
                { id: "tab-app2", label: "Churn Predictor", icon: "fa-users", desc: "Demonstração do Preditor de Churn: Portal interativo executando modelos preditivos. Insira variáveis de metadados do cliente para calcular a probabilidade de churn em tempo real.", src: "https://streamlit.app" },
                { id: "tab-app3", label: "Geopolitical Monitor (Desktop)", icon: "fa-desktop", desc: "<strong>Monitor Geopolítico OSINT:</strong> Automação desktop multithreading nativa construída com CustomTkinter e Playwright. Pipeline de monitoramento via interceptação de rede projetado para rodar localmente com máxima performance.", src: "MEDIA_PREVIEW" }
            ],
            footerLink: 'VER TODOS OS MEUS PROJETOS <i class="fas fa-arrow-right" style="font-size: 11px; margin-left: 5px;"></i>'
        },
        methodology: {
            tag: "METHODOLOGY",
            title: "Como Eu Trabalho",
            steps: [
                { icon: "fa-search", title: "1. Descobrir", desc: "Fazer as perguntas de negócios corretas antes de consultar os dados." },
                { icon: "fa-broom", title: "2. Limpar", desc: "Pandas e SQL para transformar conjuntos de dados caóticos em estruturas organizadas." },
                { icon: "fa-chart-line", title: "3. Analisar", desc: "Testes estatísticos e desdobramentos de tendências macroeconômicas." },
                { icon: "fa-chart-bar", title: "4. Visualizar", desc: "Dashboards interativos desenvolvidos para tomadores de decisão e executivos C-level." },
                { icon: "fa-robot", title: "5. Automatizar", desc: "Desenvolvimento e implantação de scripts ETL robustos em Python que gerenciam pipelines de processamento de ponta a ponta." }
            ]
        },
        contact: { title: "FALE COMIGO!", subtitle: "Vamos construir algo grande juntos.", btn: '<i class="fas fa-envelope"></i> ENVIAR UM E-MAIL' }
    }
};

// ==========================================
// PASSO 2: ESTADO DA APLICAÇÃO (Gerenciador de Idioma)
// ==========================================
let currentLang = localStorage.getItem('pref-lang') || 'en';

// ==========================================
// PASSO 3: O MOTOR DE RENDERIZAÇÃO (Injeção de HTML via DOM)
// ==========================================
function renderApp() {
    const d = portfolioData[currentLang];
    const app = document.getElementById('app');
    const activeTab = document.querySelector('input[name="project-tabs"]:checked')?.id || "tab-app1";

    app.innerHTML = `
        <input type="checkbox" id="menu-toggle" class="menu-checkbox">
        <button id="lang-switcher" class="lang-btn">${currentLang === 'en' ? 'PT-BR' : 'EN'}</button>
        <label for="menu-toggle" class="hamburger-button"><i class="fas fa-bars"></i></label>
        
        <nav class="sidebar">
            <div class="sidebar-logo">
                <label for="menu-toggle" class="close-btn">&times;</label>
                <h3>Rafael Casella</h3>
            </div>
            <ul class="nav-links">
                <li><a href="#home" class="active">${d.nav.home}</a></li>
                <li><a href="#perfil">${d.nav.about}</a></li>
                <li><a href="#portfolio">${d.nav.projects}</a></li>
                <li><a href="#servicos">${d.nav.method}</a></li>
                <li><a href="#contato">${d.nav.contact}</a></li>
            </ul>
        </nav>
        
        <main class="main-content">
            <!-- 1. HERO SECTION -->
            <section id="home" class="hero-section dark-bg">
                <div class="hero-content">
                    <h1>${d.hero.title}</h1>
                    <p class="subtitle">${d.hero.subtitle}</p>
                    <span class="tagline" style="margin-top: 25px; margin-bottom: 25px; display: block;">${d.hero.tagline}</span>
                    <a href="#perfil" class="btn-outline-white">${d.hero.btn}</a>
                    <div class="social-icons-hero">
                        <a href="mailto:rafacasella@gmail.com"><i class="fas fa-envelope"></i></a>
                        <a href="https://github.com/rafacasella" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/rafael-casella-490457368/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </section>
            
            <!-- 2. PROFILE & TECH STACK SECTION -->
            <section id="perfil" class="profile-section light-bg">
                <div class="columns-grid">
                    <div class="col">
                        <h2>${d.profile.title}</h2>
                        <p class="description">${d.profile.desc}</p>
                        <div class="info-meta">
                            <p><strong>${d.profile.meta.name}</strong><br><span>Rafael Casella</span></p>
                            <p><strong>${d.profile.meta.location}</strong><br><span>${d.profile.meta.locationVal}</span></p>
                            <p><strong>${d.profile.meta.education}</strong><br><span>${d.profile.meta.educationVal}</span></p>
                            <p><strong>${d.profile.meta.special}</strong><br><span>${d.profile.meta.specialVal}</span></p>
                        </div>
                        <h3 style="margin: 20px 0 10px 0; font-size: 16px;">${d.profile.interestsTitle}</h3>
                        <p class="description" style="font-size: 14px; margin-bottom: 20px;">
                            ${d.profile.interests.map(function(i) { return '• ' + i + '<br>'; }).join('')}
                        </p>
                        <a href="#contato" class="btn-dark-outline">${d.profile.btn}</a>
                    </div>
                    <div class="col">
                        <h2>${d.profile.stackTitle}</h2>
                        <p class="description">${d.profile.stackDesc}</p>
                        <div class="skill-bar-wrapper"><div class="skill-info"><span>PYTHON (Pandas, Matplotlib, Seaborn)</span><span class="badge">${currentLang === 'en' ? 'Core' : 'Principal'}</span></div><div class="bar"><div class="progress" style="width: 95%;"></div></div></div>
                        <div class="skill-bar-wrapper"><div class="skill-info"><span>SQL & DATABASES (PostgreSQL, MySQL)</span><span class="badge">${currentLang === 'en' ? 'Core' : 'Principal'}</span></div><div class="bar"><div class="progress" style="width: 90%;"></div></div></div>
                        <div class="skill-bar-wrapper"><div class="skill-info"><span>MACHINE LEARNING (Scikit-Learn, Statsmodels)</span><span class="badge">${currentLang === 'en' ? 'Advanced' : 'Avançado'}</span></div><div class="bar"><div class="progress" style="width: 85%;"></div></div></div>
                        <div class="skill-bar-wrapper"><div class="skill-info"><span>DEEP LEARNING (TensorFlow, Keras)</span><span class="badge grey">${currentLang === 'en' ? 'Intermediate' : 'Intermediário'}</span></div><div class="bar"><div class="progress" style="width: 65%;"></div></div></div>
                        <div class="skill-bar-wrapper"><div class="skill-info"><span>AUTOMATION & VISUALIZATION (Streamlit, Playwright)</span><span class="badge">${currentLang === 'en' ? 'Advanced' : 'Avançado'}</span></div><div class="bar"><div class="progress" style="width: 88%;"></div></div></div>
                        <a href="cv_2026.pdf" target="_blank" DOWNLOAD="cv_2026.pdf" class="btn-dark-filled">${currentLang === 'en' ? 'DOWNLOAD MY RESUME' : 'BAIXAR MEU CURRÍCULO'}</a>
                    </div>
                </div>
            </section>
            
            <!-- 3. PORTFOLIO SECTION -->
            <section id="portfolio" class="portfolio-section light-bg" style="border-top: 1px solid #eee;">
                <h2>${d.projectsTitle}</h2>
                <div class="projects-grid">
                    ${d.projects.map(p => `
                        <div class="project-card">
                            <div class="project-box">
                                <h3>${p.title}</h3>
                                <p><strong>${currentLang === 'en' ? 'Problem:' : 'Problema:'}</strong> ${p.prob}</p>
                                <p><strong>${currentLang === 'en' ? 'Impact:' : 'Impacto:'}</strong> ${p.imp}</p>
                                <a href="${p.link}" target="_blank" class="project-link">${currentLang === 'en' ? 'View Project' : 'Ver Projeto'} <i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="live-app-tabs-container" style="margin-top: 60px; text-align: left;">
                    <span class="section-tag" style="color: #00e676; font-weight: bold; font-size: 11px; letter-spacing: 2px; display: block; margin-bottom: 10px;">${d.liveDemos.tag}</span>
                    <h3 style="font-size: 20px; color: #111; margin-bottom: 10px;">${d.liveDemos.title}</h3>
                    <p style="margin-bottom: 25px; color: #666; font-size: 14px;">${d.liveDemos.subtitle}</p>
                    
                    ${d.liveDemos.tabs.map(t => `<input type="radio" id="${t.id}" name="project-tabs" class="tab-switch">`).join('')}
                    
                    <div class="tabs-nav">
                        ${d.liveDemos.tabs.map(t => `<label for="${t.id}" class="tab-label"><i class="fas ${t.icon}"></i> ${t.label}</label>`).join('')}
                    </div>
                    
                    <div class="tabs-content-wrapper">
                        ${d.liveDemos.tabs.map(t => `
                            <div class="tab-panel panel-${t.id.replace('tab-', '')}">
                                <p class="tab-panel-desc">${t.desc}</p>
				${t.src === "MEDIA_PREVIEW" ? `
                                    <!-- LAYOUT EXCLUSIVO DA APLICAÇÃO DESKTOP -->
				    <div class="desktop-app-preview" style="background: #0f172a; border: 1px solid rgba(0, 242, 254, 0.2); padding: 40px; text-align: center; border-radius: 8px; margin-top: 15px;">
    
   					 <!-- PLAYER DE VISUALIZAÇÃO: O GIF DO SOFTWARE EM AÇÃO -->
   					 <div style="max-width: 750px; margin: 0 auto 30px auto; border-radius: 6px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 242, 254, 0.15); border: 1px solid rgba(255,255,255,0.05);">
      					  <img src="monitor-demo.gif" alt="OSINT Monitor Demo" style="width: 100%; display: block; filter: brightness(0.95);">
   					 </div>

    					<i class="fas fa-desktop" style="font-size: 40px; color: #00f2fe; margin-bottom: 15px; display: block;"></i>
    					<h4 style="color: #fff; margin-bottom: 12px; font-size: 18px;">${currentLang === 'en' ? 'Standalone Production-Grade Desktop App' : 'Aplicação Executável Local de Alta Performance'}</h4>
   					 <p style="color: #94a3b8; font-size: 14px; max-width: 650px; margin: 0 auto 25px auto;">
        					${currentLang === 'en' 
           						 ? 'This intelligence component architecture runs fully decoupled from cloud containers to bypass heavy protection layers via native low-level multi-threading. Download the pre-compiled binary below.' 
          						 : 'Esta arquitetura de inteligência opera completamente desacoplada de contêineres em nuvem para burlar camadas de segurança complexas via multithreading nativo. Baixe o executável pré-compilado abaixo.'}
    					</p>
   					 <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
       						 <a href="https://github.com" target="_blank" class="btn-dark-filled" style="background: #00f2fe; color: #000; font-weight: bold; border: none; text-decoration: none; padding: 10px 24px; border-radius: 4px; font-size: 13px; display: inline-block; cursor: pointer;">
           						 <i class="fas fa-download"></i> ${currentLang === 'en' ? 'DOWNLOAD PRODUCTION .EXE' : 'BAIXAR EXECUTÁVEL .EXE'}
       						 </a>
      						  <a href="https://github.com" target="_blank" class="btn-dark-outline" style="border-color: #00f2fe; color: #00f2fe; font-weight: bold; text-decoration: none; padding: 10px 24px; border-radius: 4px; font-size: 13px; background: transparent; display: inline-block;">
           						 <i class="fab fa-github"></i> ${currentLang === 'en' ? 'VIEW SOURCE CODE' : 'VER CÓDIGO FONTE'}
       						 </a>
    					</div>
				    </div>

                                ` : `

                                <div class="iframe-responsive">
                                    <iframe src="${t.src}" style="width:100%; border:none;" allow="fullscreen"></iframe>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <span class="section-tag" style="display: block; margin-top: 50px;">
                    <a href="https://github.com/rafacasella?tab=repositories" target="_blank" class="project-link" style="font-size: 14px; letter-spacing: 1px;">${d.liveDemos.footerLink}</a>
                </span>
            </section>
            
            <!-- 4. METHODOLOGY SECTION -->
            <section id="servicos" class="services-section dark-bg">
                <span class="section-tag">${d.methodology.tag}</span>
                <h2>${d.methodology.title}</h2>
                <div class="services-grid">
                    ${d.methodology.steps.map(s => `
                        <div class="service-card">
                            <div class="service-icon"><i class="fas ${s.icon}"></i></div>
                            <h3>${s.title}</h3>
                            <p>${s.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <!-- 5. CONTACT SECTION & FOOTER -->
            <section id="contato" class="contact-section dark-bg">
                <h2>${d.contact.title}</h2>
                <p class="section-intro">${d.contact.subtitle}</p>
                <a href="mailto:rafacasella@gmail.com" class="btn-email-green">${d.contact.btn}</a>
                
                <div class="social-icons-hero" style="margin-top: 40px; margin-bottom: 50px;">
                    <a href="https://wa.me/5517997635500" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/rafacasella" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/rafael-casella-490457368/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <footer class="simple-footer">
                    <p>&copy; 2026 Rafael Casella. ${currentLang === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}</p>
                    <p class="design-by">Design by <a href="https://github.com" target="_blank">Rafael Casella</a></p>
                </footer>
            </section>
        </main>
    `;

    // Garante que a aba do Streamlit ativa não mude após trocar o idioma
    document.getElementById(activeTab).checked = true;
    
    // Chama o Passo 4 para vincular o clique do botão
    setupEventListeners();
}

// ==========================================
// PASSO 4: CONTROLADORES DE EVENTO (Escuta do Botão)
// ==========================================
function setupEventListeners() {
    const langBtn = document.getElementById('lang-switcher');
    
    langBtn.addEventListener('click', () => {
        // Alterna entre inglês e português
        currentLang = currentLang === 'en' ? 'pt' : 'en';
        
        // Grava no armazenamento local do navegador
        localStorage.setItem('pref-lang', currentLang);
        
        // Atualiza a tela com o novo idioma
        renderApp();
    });
}

// ==========================================
// PASSO 5: INICIALIZAÇÃO INICIAL (Start no Site)
// ==========================================
// Executa a renderização pela primeira vez assim que a página carrega
renderApp();

