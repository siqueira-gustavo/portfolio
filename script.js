document.addEventListener('DOMContentLoaded', () => {
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
        behavior: 'smooth'
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
