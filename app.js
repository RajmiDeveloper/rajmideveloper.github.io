const translations = {
  es: {
    skip: 'Saltar al contenido', navLabel: 'Navegación principal', mobileNavLabel: 'Navegación móvil', navProjects: 'Proyectos', navAbout: 'Sobre mí', navExperience: 'Experiencia', navContact: 'Contacto', letsTalk: 'Hablemos', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    available: 'Disponible para oportunidades backend', intro: 'Hola, soy Matías. Backend Developer.', heroLine1: 'Ideas claras.', heroLine2: 'Backend sólido.', heroDescription: 'Transformo reglas de negocio en software. Desarrollo con Java y Spring Boot, con la mirada de alguien que también sabe ponerlo a prueba.', explore: 'Explorar proyectos', downloadCV: 'Descargar CV', artLabel: 'Ilustración de arquitectura backend: solicitud, lógica de negocio y base de datos', artLogic: 'Cada regla, en su lugar.', artData: 'Datos con estructura.', mainStack: 'MI STACK PRINCIPAL',
    selectedWork: 'TRABAJO SELECCIONADO', projectsTitle: 'Del problema al código.', projectsIntro: 'Proyectos propios donde conecto lógica de negocio, datos y una interfaz que permite usarlos.', zoomERP: 'Ampliar captura de MR ERP', zoomFilament: 'Ampliar captura de Filament Tracker', erpAlt: 'Interfaz de MR ERP: catálogo de productos con datos de demostración', filamentAlt: 'Filament Tracker: inventario de bobinas, existencias y alertas de reposición con datos de demostración', realDemo: 'Interfaz real · datos de demostración', personalProject: 'PROYECTO PERSONAL', inDevelopment: 'En desarrollo',
    erpSubtitle: 'La lógica detrás de la gestión comercial.', erpDescription: 'Un sistema de gestión para organizar productos, categorías, clientes y movimientos de stock. Mi espacio para profundizar en Java, modelado de datos y arquitectura por capas.', erpFeature1: 'API REST con capas de controller, service y repository.', erpFeature2: 'Persistencia con JPA y migraciones versionadas con Flyway.', erpFeature3: 'PostgreSQL en Docker e interfaz en Vue y TypeScript.', viewProject: 'Explorar proyecto', viewCode: 'Ver código',
    filamentSubtitle: 'De una impresión 3D a un inventario consistente.', filamentDescription: 'Una aplicación para gestionar filamentos y su consumo en impresión 3D. Evolucionó de una herramienta local a un cliente de escritorio con API, usuarios y espacios de trabajo.', filamentFeature1: 'Inventario transaccional, control de concurrencia e idempotencia.', filamentFeature2: 'Autenticación, roles y permisos por espacio de trabajo.', filamentFeature3: 'Agente de captura 3MF con cola persistente y reintentos.', privateRepo: 'Repositorio privado', moreGithub: 'Más de mi trabajo en GitHub',
    aboutEyebrow: 'UN POCO SOBRE MÍ', aboutTitle: 'Entender el problema.\nConstruir la solución.', aboutLead: 'Soy desarrollador backend y estudiante de Ingeniería en Sistemas de Información en la UTN.', aboutText1: 'Trabajo en Novigo Technology desarrollando funcionalidades con Frappe y ERPNext, resolviendo incidencias en APIs y bases de datos, y automatizando pruebas de aplicaciones web.', aboutText2: 'Hoy profundizo mi camino en Java y Spring Boot. Mi experiencia en QA me ayuda a pensar más allá del caso ideal: validar reglas, buscar errores y cuidar lo que sucede con los datos.', aboutNote: 'Me interesa el código que tiene sentido para el negocio y para quien lo mantiene.', toolbox: 'MI CAJA DE HERRAMIENTAS', dataTitle: 'Datos', testingTools: 'Cypress · Selenium · Pruebas E2E · Testing de APIs', workflow: 'Entorno de trabajo',
    journey: 'MI RECORRIDO', experienceTitle: 'Experiencia que\nse conecta.', experienceIntro: 'Desarrollo, testing y soporte: distintas formas de entender cómo funciona un sistema.', degree: 'Ingeniería en Sistemas de Información', degreeDate: '2024 — Actualidad', novigoDate: '2024 — Actualidad', current: 'ACTUAL', novigoDescription: 'Desarrollo y mantenimiento de funcionalidades con Frappe y ERPNext. Pruebas manuales y E2E con Cypress y Selenium, y resolución de errores en APIs, autenticación y persistencia.', supportRole: 'Soporte IT', preventusDescription: 'Soporte técnico, diagnóstico de incidencias y mantenimiento de equipos informáticos.',
    nextStep: 'ABIERTO AL PRÓXIMO DESAFÍO', contactTitle: '¿Tu equipo necesita\nun perfil backend?', contactDescription: 'Busco una oportunidad para aportar, seguir aprendiendo y construir software en equipo. Me gustaría conocer lo que están haciendo.', emailMe: 'Escribime', copyEmail: 'Copiar email', languages: 'Español nativo · Inglés B2', backTop: 'Volver arriba', projectDetails: 'DETALLES DEL PROYECTO', close: 'Cerrar', previousImage: 'Imagen anterior', nextImage: 'Imagen siguiente', copied: 'Email copiado al portapapeles', copyFailed: 'Podés copiar el email o usar el enlace para escribirme.',
    description: 'Desarrollador backend en Buenos Aires. Java, Spring Boot, PostgreSQL y experiencia en QA Automation. Conocé mis proyectos y mi forma de trabajar.',
    erpGallery1: 'MR ERP · Productos', erpGallery2: 'MR ERP · Panel principal', filamentGallery1: 'Filament Tracker · Inventario', filamentGallery2: 'Filament Tracker · Historial',
    challenge: 'El problema', implementation: 'La implementación', currentScope: 'Estado del proyecto', erpChallenge: 'Centralizar el catálogo de productos, las categorías, los clientes y los movimientos de inventario en un sistema de gestión comercial.', erpImplementation: ['Backend Java con Spring Boot, DTOs y separación en controllers, services y repositories.', 'Entidades persistidas con JPA, base PostgreSQL y cambios de esquema versionados con Flyway.', 'Interfaz Vue con TypeScript y PrimeVue; entorno de base de datos con Docker Compose.'], erpScope: 'En desarrollo. Incluye catálogo, clientes, categorías y movimientos de stock; el flujo de ventas continúa en construcción.',
    filamentChallenge: 'Mantener el stock de filamentos consistente con el consumo de impresiones 3D, incluso ante reintentos, operaciones concurrentes y capturas pendientes.', filamentImplementation: ['API ASP.NET Core y PostgreSQL, con inventario transaccional, control de versiones e idempotencia.', 'Autenticación y sesiones revocables; roles y aislamiento de datos por espacio de trabajo.', 'Cliente WPF y agente independiente que interpreta 3MF, mantiene una cola persistente y reintenta envíos.'], filamentScope: 'En desarrollo. Incluye inventario, historial, autenticación, permisos y agente de captura. El repositorio es privado.', galleryAction: 'Ver capturas', cvNote: 'CV en español'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', navProjects: 'Projects', navAbout: 'About me', navExperience: 'Experience', navContact: 'Contact', letsTalk: 'Let’s talk', openMenu: 'Open menu', closeMenu: 'Close menu',
    available: 'Open to backend opportunities', intro: 'Hi, I’m Matías. Backend Developer.', heroLine1: 'Clear thinking.', heroLine2: 'Solid backend.', heroDescription: 'I turn business rules into software. I work with Java and Spring Boot, with the perspective of someone who also knows how to put software to the test.', explore: 'Explore projects', downloadCV: 'Download CV (ES)', artLabel: 'Backend architecture illustration: request, business logic and database', artLogic: 'Every rule in the right place.', artData: 'Data with structure.', mainStack: 'MY CORE STACK',
    selectedWork: 'SELECTED WORK', projectsTitle: 'From problem to code.', projectsIntro: 'Personal projects connecting business logic, data and an interface that makes them useful.', zoomERP: 'Enlarge MR ERP screenshot', zoomFilament: 'Enlarge Filament Tracker screenshot', erpAlt: 'MR ERP interface: product catalog with demo data', filamentAlt: 'Filament Tracker: spool inventory, stock levels and restock alerts with demo data', realDemo: 'Actual interface · demo data', personalProject: 'PERSONAL PROJECT', inDevelopment: 'In development',
    erpSubtitle: 'The logic behind business management.', erpDescription: 'A business management system for products, categories, customers and stock movements. My space to deepen my knowledge of Java, data modeling and layered architecture.', erpFeature1: 'REST API with controller, service and repository layers.', erpFeature2: 'JPA persistence and versioned Flyway migrations.', erpFeature3: 'PostgreSQL in Docker; Vue and TypeScript interface.', viewProject: 'Explore project', viewCode: 'View code',
    filamentSubtitle: 'From a 3D print to a consistent inventory.', filamentDescription: 'An application for managing 3D printing filaments and material consumption. It evolved from a local tool into a desktop client backed by an API, user accounts and workspaces.', filamentFeature1: 'Transactional inventory, concurrency control and idempotency.', filamentFeature2: 'Authentication, roles and workspace permissions.', filamentFeature3: '3MF capture agent with a persistent queue and retries.', privateRepo: 'Private repository', moreGithub: 'More of my work on GitHub',
    aboutEyebrow: 'A LITTLE ABOUT ME', aboutTitle: 'Understand the problem.\nBuild the solution.', aboutLead: 'I’m a backend developer and an Information Systems Engineering student at UTN.', aboutText1: 'At Novigo Technology, I develop features with Frappe and ERPNext, troubleshoot API and database issues, and automate tests for web applications.', aboutText2: 'I’m currently focusing on Java and Spring Boot. My QA experience helps me think beyond the happy path: validating rules, finding errors and taking care of the data.', aboutNote: 'I care about code that makes sense to the business and to the people maintaining it.', toolbox: 'MY TOOLBOX', dataTitle: 'Data', testingTools: 'Cypress · Selenium · E2E testing · API testing', workflow: 'Development tools',
    journey: 'MY JOURNEY', experienceTitle: 'Experience that\nconnects.', experienceIntro: 'Development, testing and support: different ways to understand how a system works.', degree: 'Information Systems Engineering', degreeDate: '2024 — Present', novigoDate: '2024 — Present', current: 'CURRENT', novigoDescription: 'Developing and maintaining features with Frappe and ERPNext. Manual and E2E testing with Cypress and Selenium, and troubleshooting API, authentication and persistence issues.', supportRole: 'IT Support', preventusDescription: 'Technical support, incident diagnosis and computer maintenance.',
    nextStep: 'OPEN TO THE NEXT CHALLENGE', contactTitle: 'Looking for a backend\ndeveloper for your team?', contactDescription: 'I’m looking for an opportunity to contribute, keep learning and build software as part of a team. I’d love to hear what you’re working on.', emailMe: 'Get in touch', copyEmail: 'Copy email', languages: 'Native Spanish · English B2', backTop: 'Back to top', projectDetails: 'PROJECT DETAILS', close: 'Close', previousImage: 'Previous image', nextImage: 'Next image', copied: 'Email copied to clipboard', copyFailed: 'You can copy the email or use the link to get in touch.',
    description: 'Backend developer based in Buenos Aires. Java, Spring Boot, PostgreSQL and QA Automation experience. Explore my projects and how I work.',
    erpGallery1: 'MR ERP · Products', erpGallery2: 'MR ERP · Dashboard', filamentGallery1: 'Filament Tracker · Inventory', filamentGallery2: 'Filament Tracker · History',
    challenge: 'The problem', implementation: 'The implementation', currentScope: 'Project status', erpChallenge: 'Bringing product catalogs, categories, customers and inventory movements together in one business management system.', erpImplementation: ['Java backend with Spring Boot, DTOs and separate controller, service and repository layers.', 'JPA entities, PostgreSQL persistence and versioned database changes with Flyway.', 'Vue interface with TypeScript and PrimeVue; database environment with Docker Compose.'], erpScope: 'In development. Includes product and customer catalogs, categories and stock movements; the sales workflow is still under construction.',
    filamentChallenge: 'Keeping filament stock consistent with 3D printing consumption, even with retries, concurrent operations and pending captures.', filamentImplementation: ['ASP.NET Core API and PostgreSQL, with transactional inventory, version checks and idempotency.', 'Authentication and revocable sessions; roles and data isolation per workspace.', 'WPF desktop client and a separate 3MF capture agent with a persistent queue and delivery retries.'], filamentScope: 'In development. Includes inventory, history, authentication, permissions and a capture agent. The repository is private.', galleryAction: 'View screenshots', cvNote: 'CV in Spanish'
  }
};

const projects = {
  erp: { title: 'MR ERP', tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JPA', 'Flyway', 'Docker', 'Vue', 'TypeScript'], architecture: 'Vue / TypeScript → REST API → Spring Boot → JPA → PostgreSQL', code: 'https://github.com/RajmiDeveloper/mr-erp', images: [{ src: 'assets/mr-erp.jpg', title: 'erpGallery1', alt: 'erpAlt' }, { src: 'assets/mr-erp-dashboard.jpg', title: 'erpGallery2', alt: 'erpGallery2' }] },
  filament: { title: 'Filament Tracker', tags: ['C# / .NET 8', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework Core', 'WPF'], architecture: 'WPF + 3MF Agent → REST API → ASP.NET Core → PostgreSQL', images: [{ src: 'assets/filament-stock.png', title: 'filamentGallery1', alt: 'filamentAlt' }, { src: 'assets/filament-history.png', title: 'filamentGallery2', alt: 'filamentGallery2' }] }
};

const caseDialog = document.querySelector('#case-dialog');
const galleryDialog = document.querySelector('#gallery-dialog');
const menu = document.querySelector('#mobile-nav');
const menuButton = document.querySelector('.menu-toggle');
let activeCase = null;
let activeGallery = null;
let galleryIndex = 0;
let language = 'es';
let toastTimer;
try { language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'; } catch { /* The default language also works without storage. */ }

const t = key => translations[language][key] ?? translations.es[key] ?? key;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;

function setTranslatedText(element, text) {
  element.replaceChildren(...String(text).split('\n').flatMap((line, i) => i ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
}

function setLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'es';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => setTranslatedText(element, t(element.dataset.i18n)));
  document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label', t(element.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach(element => element.alt = t(element.dataset.i18nAlt));
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelector('meta[name="description"]').content = t('description');
  document.querySelector('meta[property="og:description"]').content = t('description');
  document.querySelector('meta[property="og:locale"]').content = language === 'es' ? 'es_AR' : 'en_US';
  document.querySelector('.brand').setAttribute('aria-label', `Matías Rajmilevich, ${language === 'es' ? 'inicio' : 'home'}`);
  document.querySelector('.hero-footer a').setAttribute('aria-label', language === 'es' ? 'GitHub de Matías (abre en otra pestaña)' : 'Matías on GitHub (opens in a new tab)');
  menuButton.setAttribute('aria-label', t(menu.hidden ? 'openMenu' : 'closeMenu'));
  if (activeCase) renderCase(activeCase);
  if (activeGallery) renderGallery();
  try { localStorage.setItem('portfolio-language', language); } catch { /* Storage is optional. */ }
}

function setMenu(open) {
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', t(open ? 'closeMenu' : 'openMenu'));
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
menuButton.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) { setMenu(false); menuButton.focus(); }
  if (galleryDialog.open && event.key === 'ArrowRight') changeImage(1);
  if (galleryDialog.open && event.key === 'ArrowLeft') changeImage(-1);
});
const wideScreen = matchMedia('(min-width: 621px)');
wideScreen.addEventListener('change', event => { if (event.matches) setMenu(false); });

function syncModalState() { document.body.classList.toggle('modal-open', Boolean(caseDialog.open || galleryDialog.open)); }
function showDialog(dialog) { dialog.showModal(); syncModalState(); }
for (const dialog of [caseDialog, galleryDialog]) {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { syncModalState(); if (dialog === caseDialog) activeCase = null; else activeGallery = null; });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
}

function renderCase(key) {
  const project = projects[key];
  document.querySelector('#case-content').innerHTML = `<div class="case-body"><div class="project-meta"><span class="project-type">${escapeHTML(t('personalProject'))}</span><span class="project-status">${escapeHTML(t('inDevelopment'))}</span></div><h2 id="case-title">${project.title}<span class="blue">.</span></h2><p class="case-intro">${escapeHTML(t(key + 'Subtitle'))}</p><button class="image-button" type="button" data-gallery="${key}" data-image="0" aria-label="${escapeHTML(t(key === 'erp' ? 'zoomERP' : 'zoomFilament'))}" style="margin:0"><img class="case-screenshot" src="${project.images[0].src}" alt="${escapeHTML(t(project.images[0].alt))}"></button><p class="case-caption">${escapeHTML(t('realDemo'))}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="case-columns"><div><h3>${escapeHTML(t('challenge'))}</h3><p>${escapeHTML(t(key + 'Challenge'))}</p></div><div><h3>${escapeHTML(t('implementation'))}</h3><ul>${t(key + 'Implementation').map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></div></div><div class="architecture">${project.architecture}</div><div class="case-columns"><div><h3>${escapeHTML(t('currentScope'))}</h3><p>${escapeHTML(t(key + 'Scope'))}</p></div><div class="case-footer"><button type="button" class="text-link" data-gallery="${key}" data-image="0">${escapeHTML(t('galleryAction'))}${icon('expand')}</button>${project.code ? `<a class="text-link" href="${project.code}" target="_blank" rel="noopener noreferrer">${icon('github')}${escapeHTML(t('viewCode'))}</a>` : `<span class="private-label">${icon('lock')}${escapeHTML(t('privateRepo'))}</span>`}</div></div></div>`;
}

function openCase(key) { activeCase = key; renderCase(key); showDialog(caseDialog); }

function renderGallery() {
  const images = projects[activeGallery].images;
  const image = images[galleryIndex];
  document.querySelector('#gallery-image').src = image.src;
  document.querySelector('#gallery-image').alt = t(image.alt);
  document.querySelector('#gallery-title').textContent = t(image.title);
  document.querySelector('#gallery-count').textContent = `${galleryIndex + 1} / ${images.length}`;
  document.querySelector('#gallery-prev').disabled = galleryIndex === 0;
  document.querySelector('#gallery-next').disabled = galleryIndex === images.length - 1;
}
function openGallery(key, index) { activeGallery = key; galleryIndex = index; renderGallery(); showDialog(galleryDialog); }
function changeImage(delta) { if (!activeGallery) return; galleryIndex = Math.max(0, Math.min(projects[activeGallery].images.length - 1, galleryIndex + delta)); renderGallery(); }
document.querySelector('#gallery-prev').addEventListener('click', () => changeImage(-1));
document.querySelector('#gallery-next').addEventListener('click', () => changeImage(1));
document.addEventListener('click', event => {
  const caseButton = event.target.closest('[data-case]');
  const imageButton = event.target.closest('[data-gallery]');
  if (caseButton) openCase(caseButton.dataset.case);
  if (imageButton) openGallery(imageButton.dataset.gallery, Number(imageButton.dataset.image || 0));
});

function toast(message) {
  const element = document.querySelector('#toast');
  clearTimeout(toastTimer); element.textContent = message; element.classList.add('visible');
  toastTimer = setTimeout(() => element.classList.remove('visible'), 3200);
}
document.querySelector('#copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('matiasgrajmilevich@gmail.com'); toast(t('copied')); }
  catch { toast(t('copyFailed')); }
});

if ('IntersectionObserver' in window) {
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('js-motion');
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.desktop-nav a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id)); }), { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('#proyectos, #sobre-mi, #experiencia').forEach(section => navObserver.observe(section));
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
setLanguage(language);
