// Language content
const translations = {
  en: {
    nav: {
      cta: "Let's Talk",
    },
    hero: {
      title: "Hi. I'm Gustavo",
      subtitle:
        "I'm a developer creating beautiful, functional digital experiences that make an impact.",
      cta1: 'View My Work',
      cta2: 'Contact Me',
    },
    services: {
      title: 'My Services',
      subtitle:
        'I offer a range of services to help bring your digital vision to life',
      items: [
        {
          title: 'Web Development',
          description:
            'Beautiful, intuitive interfaces that engage users and drive conversions. I create designs that are both aesthetically pleasing and highly functional.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Robust, scalable websites built with clean, maintainable code. I bring designs to life with the latest web technologies.',
        },
        {
          title: 'Responsive Design',
          description:
            'Flawless experiences across all devices and screen sizes. Your website will look and work great everywhere.',
        },
        {
          title: 'Backend Development',
          description:
            'Building robust and scalable backend systems with modern technologies. I create efficient server-side solutions that power your applications.',
        },
        {
          title: 'API Development',
          description:
            'Professional REST and SOAP API development. I design clean, well-documented APIs that integrate seamlessly with frontend and mobile applications.',
        },
        {
          title: 'Automation',
          description:
            'Custom automation solutions to streamline your workflows. I can automate repetitive tasks and integrate various services to save you time and effort.',
        },
        {
          title: 'Deployment & DevOps',
          description:
            'Seamless deployment to platforms like Vercel and more. I ensure your applications are deployed efficiently and run smoothly in production.',
        },
      ],
    },
    portfolio: {
      title: 'Selected Work',
      subtitle: 'A selection of my recent projects and case studies',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewAll: 'View All Projects',
      project1: {
        title: 'Minimal Portfolio',
        category: 'Web Development',
      },
      project2: {
        title: 'E-commerce Platform',
        category: 'Web Application',
      },
      project3: {
        title: 'Mobile App Design',
        category: 'UI/UX Design',
      },
      project4: {
        title: 'Dashboard UI',
        category: 'Web Design',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
      },
    },
    footer: {
      copyright: '© 2025 Gustavo Siqueira. All rights reserved.',
      madeWith: 'Made with',
      and: 'and',
      by: 'by',
    },
  },
  pt: {
    nav: {
      cta: 'Vamos Conversar',
    },
    hero: {
      title: 'Olá. Eu sou Gustavo',
      subtitle:
        'Sou um desenvolvedor criando experiências digitais bonitas e funcionais que causam impacto.',
      cta1: 'Ver Trabalhos',
      cta2: 'Contato',
    },
    services: {
      title: 'Meus Serviços',
      subtitle:
        'Ofereço uma variedade de serviços para ajudar a trazer sua visão digital à vida',
      items: [
        {
          title: 'Desenvolvimento Web',
          description:
            'Interfaces bonitas e intuitivas que engajam os usuários e impulsionam conversões. Crio designs esteticamente agradáveis e altamente funcionais.',
        },
        {
          title: 'Design UI/UX',
          description:
            'Sites robustos e escaláveis construídos com código limpo e de fácil manutenção. Trago designs à vida com as mais recentes tecnologias web.',
        },
        {
          title: 'Design Responsivo',
          description:
            'Experiências perfeitas em todos os dispositivos e tamanhos de tela. Seu site terá uma ótima aparência e funcionamento em qualquer lugar.',
        },
        {
          title: 'Desenvolvimento Backend',
          description:
            'Construção de sistemas backend robustos e escaláveis com tecnologias modernas. Crio soluções eficientes do lado do servidor que alimentam suas aplicações.',
        },
        {
          title: 'Desenvolvimento de API',
          description:
            'Desenvolvimento profissional de APIs REST e SOAP. Projeto APIs limpas e bem documentadas que se integram perfeitamente com aplicações frontend e mobile.',
        },
        {
          title: 'Automação',
          description:
            'Soluções personalizadas de automação para otimizar seus fluxos de trabalho. Posso automatizar tarefas repetitivas e integrar vários serviços para economizar seu tempo e esforço.',
        },
        {
          title: 'Deploy & DevOps',
          description:
            'Implantações perfeitas em plataformas como Vercel e outras. Garanto que suas aplicações sejam implantadas com eficiência e funcionem perfeitamente em produção.',
        },
      ],
    },
    portfolio: {
      title: 'Trabalhos Selecionados',
      subtitle: 'Uma seleção dos meus projetos e estudos de caso recentes',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      viewAll: 'Ver Todos os Projetos',
      project1: {
        title: 'Portfólio Minimalista',
        category: 'Desenvolvimento Web',
      },
      project2: {
        title: 'Plataforma E-commerce',
        category: 'Aplicação Web',
      },
      project3: {
        title: 'Design de Aplicativo',
        category: 'Design UI/UX',
      },
      project4: {
        title: 'Painel de Controle',
        category: 'Design Web',
      },
    },
    contact: {
      title: 'Entre em Contato',
      subtitle:
        'Tem um projeto em mente ou deseja discutir oportunidades potenciais? Sinta-se à vontade para entrar em contato!',
      form: {
        name: 'Seu Nome',
        email: 'Seu E-mail',
        message: 'Sua Mensagem',
        submit: 'Enviar Mensagem',
      },
    },
    footer: {
      copyright: '© 2025 Gustavo Siqueira. Todos os direitos reservados.',
      madeWith: 'Feito com',
      and: 'e',
      by: 'por',
    },
  },
}

// Set initial language
let currentLang = 'en'

// Function to update services section
function updateServices(lang) {
  const servicesContainer = document.getElementById('services-container')
  if (!servicesContainer) return

  const services = translations[lang]?.services?.items || []
  const icons = [
    'fa-laptop-code',
    'fa-paint-brush',
    'fa-mobile-alt',
    'fa-server',
    'fa-exchange-alt',
    'fa-robot',
    'fa-rocket',
  ]

  servicesContainer.innerHTML = services
    .map(
      (service, index) => `
    <div class="service-card">
      <div class="service-icon">
        <i class="fas ${icons[index] || 'fa-code'}"></i>
      </div>
      <h3>${service.title || ''}</h3>
      <p>${service.description || ''}</p>
    </div>
  `
    )
    .join('')
}

// Function to update portfolio section
function updatePortfolio(lang) {
  const portfolioContainer = document.getElementById('portfolio-container')
  if (!portfolioContainer) return

  const portfolioItems = [
    {
      id: 'project1',
      image: 'https://picsum.photos/800/1000?random=1',
      category: 'portfolio.project1.category',
      title: 'portfolio.project1.title',
      viewLabel: 'portfolio.viewProject',
      codeLabel: 'portfolio.viewCode',
    },
    {
      id: 'project2',
      image: 'https://picsum.photos/800/1000?random=2',
      category: 'portfolio.project2.category',
      title: 'portfolio.project2.title',
      viewLabel: 'portfolio.viewProject',
      codeLabel: 'portfolio.viewCode',
    },
    {
      id: 'project3',
      image: 'https://picsum.photos/800/1000?random=3',
      category: 'portfolio.project3.category',
      title: 'portfolio.project3.title',
      viewLabel: 'portfolio.viewProject',
      codeLabel: 'portfolio.viewCode',
    },
    {
      id: 'project4',
      image: 'https://picsum.photos/800/1000?random=4',
      category: 'portfolio.project4.category',
      title: 'portfolio.project4.title',
      viewLabel: 'portfolio.viewProject',
      codeLabel: 'portfolio.viewCode',
    },
  ]

  portfolioContainer.innerHTML = portfolioItems
    .map((item) => {
      // Get translations
      const getTranslation = (key) => {
        const keys = key.split('.')
        let value = translations[lang]
        for (const k of keys) {
          value = value?.[k]
        }
        return value || key
      }

      return `
      <div class="portfolio-item">
        <div class="portfolio-image" style="background-image: url('${
          item.image
        }')">
          <div class="portfolio-overlay">
            <div class="portfolio-content">
              <span class="portfolio-category">${getTranslation(
                item.category
              )}</span>
              <h3>${getTranslation(item.title)}</h3>
              <div class="portfolio-links">
                <a href="#" class="portfolio-link" aria-label="${getTranslation(
                  item.viewLabel
                )}">
                  <i class="fas fa-eye"></i>
                </a>
                <a href="#" class="portfolio-link" aria-label="${getTranslation(
                  item.codeLabel
                )}">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    })
    .join('')
}

// Function to update content based on language
function updateContent(lang) {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const keys = element.dataset.i18n.split('.')
    let value = translations[lang]

    // Safely get the nested translation value
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        console.warn(`Translation key not found: ${element.dataset.i18n}`)
        return // Skip this element if the key path is invalid
      }
    }

    // Update the element's content
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.value = value
    } else if (element.hasAttribute('placeholder')) {
      element.setAttribute('placeholder', value)
    } else if (element.hasAttribute('title')) {
      element.setAttribute('title', value)
    } else if (element.hasAttribute('alt')) {
      element.setAttribute('alt', value)
    } else {
      element.textContent = value
    }
  })

  // Update elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const keys = element.dataset.i18nPlaceholder.split('.')
    let value = translations[lang]

    // Safely get the nested translation value
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        console.warn(
          `Translation key not found: ${element.dataset.i18nPlaceholder}`
        )
        return // Skip this element if the key path is invalid
      }
    }

    element.setAttribute('placeholder', value)
  })

  // Update services section
  updateServices(lang)

  // Update portfolio section
  updatePortfolio(lang)

  // Update active state of language buttons
  document.querySelectorAll('.language-option').forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })

  // Save language preference
  localStorage.setItem('preferredLanguage', lang)
  currentLang = lang
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en'
}

// Initialize language from localStorage or browser language
function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage')
  const browserLang = navigator.language.split('-')[0]
  const defaultLang = ['en', 'pt'].includes(browserLang) ? browserLang : 'en'
  updateContent(savedLang || defaultLang)
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  initLanguage()

  // Add click handlers for language switcher
  document.querySelectorAll('.language-option').forEach((button) => {
    button.addEventListener('click', function () {
      const lang = this.dataset.lang
      if (lang !== currentLang) {
        updateContent(lang)
      }
    })
  })
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for fixed navbar
          behavior: 'smooth',
        })
      }
    })
  })

  // Intersection Observer for scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      '.service-card, .portfolio-item, .portfolio h2, .services h2'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'

            // For portfolio items with staggered animation
            if (entry.target.classList.contains('portfolio-item')) {
              const index = Array.from(
                entry.target.parentElement.children
              ).indexOf(entry.target)
              entry.target.style.animationDelay = `${0.1 * (index + 1)}s`
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Initialize animations after a short delay to allow for page load
  setTimeout(animateOnScroll, 500)

  // Add hover effect to service cards with 3D rotation
  const serviceCards = document.querySelectorAll('.service-card')

  serviceCards.forEach((card) => {
    // Add perspective to the parent for 3D effect
    card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'

    card.addEventListener('mouseenter', function () {
      this.style.transform =
        'perspective(1000px) rotateY(5deg) translateY(-8px)'
      this.style.boxShadow = '15px 15px 30px rgba(0, 0, 0, 0.2)'
      this.style.zIndex = '10'

      // Smooth icon scale with delay
      const icon = this.querySelector('i')
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)'
        icon.style.transition =
          'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
      }
    })

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'perspective(1000px) rotateY(0) translateY(0)'
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
      this.style.zIndex = '1'

      // Reset icon with smooth transition
      const icon = this.querySelector('i')
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0)'
      }
    })
  })

  // Add click effect to CTA button
  const ctaButton = document.querySelector('.cta-button')
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault()
      // Add your contact form or modal opening logic here
      console.log("Let's talk button clicked!")
      // For now, just scroll to contact section if it exists
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  // Add hover effect to portfolio items with left-to-right 3D rotation
  const portfolioItems = document.querySelectorAll('.portfolio-item')

  portfolioItems.forEach((item) => {
    // Set up the initial styles and transitions
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 0.73, 0.13, 0.96)'
    item.style.transformStyle = 'preserve-3d'
    item.style.transformOrigin = 'left center'

    // Store the overlay element if it exists
    const overlay = item.querySelector('.portfolio-overlay')
    const content = item.querySelector('.portfolio-content')

    item.addEventListener('mouseenter', function () {
      // Apply 3D rotation and elevation
      this.style.transform =
        'perspective(1200px) rotateY(-8deg) translateZ(20px)'
      this.style.boxShadow = '20px 20px 40px rgba(0, 0, 0, 0.25)'
      this.style.zIndex = '10'

      // Fade in overlay with a slight delay
      if (overlay) {
        overlay.style.opacity = '0.9'
        overlay.style.transition = 'opacity 0.4s ease-out 0.1s'
      }

      // Slight scale up for content
      if (content) {
        content.style.transform = 'translateZ(30px)'
        content.style.transition =
          'transform 0.5s cubic-bezier(0.16, 0.73, 0.13, 0.96)'
      }
    })

    item.addEventListener('mouseleave', function () {
      // Reset all transforms and transitions
      this.style.transform = 'perspective(1200px) rotateY(0) translateZ(0)'
      this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
      this.style.zIndex = '1'

      // Fade out overlay
      if (overlay) {
        overlay.style.opacity = '0.7'
        overlay.style.transition = 'opacity 0.3s ease-in'
      }

      // Reset content
      if (content) {
        content.style.transform = 'translateZ(0)'
      }
    })

    // Add subtle mousemove effect for more interactivity
    item.addEventListener('mousemove', function (e) {
      if (!this.isHovered) return

      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = this.offsetWidth / 2
      const centerY = this.offsetHeight / 2

      // Calculate rotation based on mouse position (more subtle than the main rotation)
      const rotateY = ((x - centerX) / centerX) * 2
      const rotateX = ((centerY - y) / centerY) * 2

      this.style.transform = `perspective(1200px) rotateY(${
        -8 + rotateY
      }deg) rotateX(${rotateX}deg) translateZ(20px)`
    })

    // Track hover state for mousemove effect
    item.addEventListener('mouseenter', () => {
      item.isHovered = true
    })
    item.addEventListener('mouseleave', () => {
      item.isHovered = false
    })
  })

  // Add scroll to top functionality for logo
  const logo = document.querySelector('.logo')
  if (logo) {
    logo.style.cursor = 'pointer' // Change cursor to pointer on hover
    logo.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  // Add loading animation
  function simulateLoading() {
    const loadingElements = document.querySelectorAll('.loading')
    loadingElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove('loading')
      }, 200 * index)
    })
  }

  // Call loading animation after a short delay
  setTimeout(simulateLoading, 500)
})
