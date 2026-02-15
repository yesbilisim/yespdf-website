// YesPDF Website - Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // === Navbar Scroll Effect ===
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const logoImg = document.getElementById('nav-logo');

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (logoImg) logoImg.classList.remove('brightness-0', 'invert');
    } else {
      navbar.classList.remove('scrolled');
      if (logoImg) logoImg.classList.add('brightness-0', 'invert');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // === Mobile Menu Toggle ===
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // === Language Toggle ===
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && typeof applyLanguage === 'function') {
        applyLanguage(lang);
      }
    });
  });

  // === Active Nav Link on Scroll ===
  const sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          link.classList.add('!text-green-400');
        } else {
          link.classList.remove('!text-green-400');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // === Initialize AOS (Animate on Scroll) ===
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }

  // === Stat Counter Animation ===
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;

    statNumbers.forEach(el => {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = prefix + current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });

    statsAnimated = true;
  }

  // Trigger stats animation when hero section is visible
  const heroSection = document.getElementById('hero');
  if (heroSection && statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(heroSection);
  }

  // KVKK Cookie Banner
  if (!localStorage.getItem('kvkk-consent')) {
    const banner = document.getElementById('kvkk-banner');
    if (banner) banner.classList.remove('hidden');
  }
});

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !isHidden);
  if (iconOpen) iconOpen.classList.toggle('hidden', isHidden);
  if (iconClose) iconClose.classList.toggle('hidden', !isHidden);
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (menu) menu.classList.add('hidden');
  if (iconOpen) iconOpen.classList.remove('hidden');
  if (iconClose) iconClose.classList.add('hidden');
}

function acceptKVKK() {
  localStorage.setItem('kvkk-consent', 'accepted');
  document.getElementById('kvkk-banner').classList.add('hidden');
}

function rejectKVKK() {
  localStorage.setItem('kvkk-consent', 'rejected');
  document.getElementById('kvkk-banner').classList.add('hidden');
}
