/**
 * Vina One Steel - Modern JSW-Inspired Interface Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fixed Header & Back-To-Top Button
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
      backToTopBtn?.classList.add('show');
    } else {
      siteHeader?.classList.remove('scrolled');
      backToTopBtn?.classList.remove('show');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Hero Slider Functionality
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5500);
  }

  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  if (slides.length > 0) {
    nextBtn?.addEventListener('click', () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });

    prevBtn?.addEventListener('click', () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection?.addEventListener('mouseenter', stopAutoPlay);
    heroSection?.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  }

  // 3. Animated Stats Counter (JSW Style Metric Count-up)
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  let hasAnimated = false;

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-count');
      const suffix = stat.getAttribute('data-suffix') || '';
      const prefix = stat.getAttribute('data-prefix') || '';
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(target * progress);

        if (frame === totalFrames) {
          stat.textContent = prefix + target.toLocaleString('vi-VN') + suffix;
          clearInterval(counter);
        } else {
          stat.textContent = prefix + currentCount.toLocaleString('vi-VN') + suffix;
        }
      }, frameDuration);
    });
  }

  // Intersection Observer for Stats Counter
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          hasAnimated = true;
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }

  // 4. Product Tab Filter
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 5. Video Player Modal (Vina One Factory Showreel)
  const playVideoBtn = document.querySelector('.play-video-btn');
  const videoModal = document.querySelector('.video-modal');
  const closeVideoBtn = document.querySelector('.close-video-modal');
  const videoFrame = document.querySelector('.video-modal-content iframe');
  const videoSrc = "https://www.youtube.com/embed/IcZRosWhfVk?autoplay=1&rel=0";

  playVideoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (videoFrame) videoFrame.src = videoSrc;
    videoModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeVideo() {
    if (videoFrame) videoFrame.src = "";
    videoModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeVideoBtn?.addEventListener('click', closeVideo);
  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  // 6. Certifications & Awards Lightbox Modal
  const awardItems = document.querySelectorAll('.award-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeLightboxBtn = document.querySelector('.close-lightbox');

  awardItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.award-img');
      const title = item.querySelector('.award-title')?.textContent || '';
      const fullSrc = item.getAttribute('data-full-img') || img.src;

      if (lightboxImg) lightboxImg.src = fullSrc;
      if (lightboxCaption) lightboxCaption.textContent = title;
      lightboxModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightboxModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeLightboxBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // 7. Fullscreen Search Overlay
  const searchToggleBtn = document.querySelector('.search-toggle-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const closeSearchBtn = document.querySelector('.close-search-btn');
  const searchInput = document.querySelector('.search-input');

  searchToggleBtn?.addEventListener('click', () => {
    searchOverlay?.classList.add('active');
    searchInput?.focus();
    document.body.style.overflow = 'hidden';
  });

  function closeSearch() {
    searchOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeSearchBtn?.addEventListener('click', closeSearch);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // 8. Mobile Navigation Drawer
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavDrawer = document.querySelector('.mobile-nav-drawer');
  const closeMobileNav = document.querySelector('.close-mobile-nav');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileNavOverlay?.classList.add('active');
    mobileNavDrawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeMobileMenu() {
    mobileNavOverlay?.classList.remove('active');
    mobileNavDrawer?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeMobileNav?.addEventListener('click', closeMobileMenu);
  mobileNavOverlay?.addEventListener('click', closeMobileMenu);

  // 9. Quick Inquiry Form Submission Handler
  const inquiryForm = document.querySelector('.inquiry-form');
  inquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn quý khách đã gửi liên hệ. Đại diện Thép Vina One sẽ phản hồi trong thời gian sớm nhất!');
    inquiryForm.reset();
  });

  // Keyboard accessibility (Escape key to close modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
      closeLightbox();
      closeSearch();
      closeMobileMenu();
    }
  });

  // 10. ScrollReveal Animations Configuration
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      reset: false,
      mobile: true,
      viewFactor: 0.15
    });

    // Section Titles & Badges
    sr.reveal('.section-badge, .badge-pill', { delay: 100, distance: '20px', origin: 'bottom' });
    sr.reveal('.section-title, .page-title', { delay: 150, distance: '25px', origin: 'bottom' });
    sr.reveal('.section-subtitle, .section-desc, .page-breadcrumb, .page-desc', { delay: 200, distance: '25px', origin: 'bottom' });
    sr.reveal('.page-hero-content', { delay: 150, distance: '30px', origin: 'bottom' });

    // Split Columns - Left & Right Reveals
    sr.reveal('.reveal-left, .about-intro-text, .brand-story-text, .factory-content, .contact-info-card, .contact-info-col, .job-overview-card', {
      origin: 'left',
      distance: '45px',
      duration: 900,
      delay: 150
    });

    sr.reveal('.reveal-right, .about-intro-img, .brand-story-image, .factory-media, .contact-form-card, .contact-form-col, .job-form-card', {
      origin: 'right',
      distance: '45px',
      duration: 900,
      delay: 200
    });

    // Top Reveals (if needed)
    sr.reveal('.reveal-top', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      delay: 150
    });

    // Grid Items & Cards Staggered Animation
    sr.reveal('.product-card, .category-card, .feature-card, .news-card, .job-card, .award-item, .stat-card, .milestone-card, .value-card, .standard-card, .core-value-card, .history-item', {
      interval: 100,
      distance: '30px',
      duration: 750,
      origin: 'bottom'
    });

    // Product Spec Tables & Detail Sections
    sr.reveal('.table-responsive, .spec-table-card, .product-specs-table, .tech-highlight-card, .doc-download-card', {
      distance: '30px',
      duration: 800,
      delay: 150,
      origin: 'bottom'
    });

    // CTA Banners & Floating Promos
    sr.reveal('.cta-banner, .cta-content, .newsletter-banner, .map-container, .inquiry-banner', {
      distance: '35px',
      duration: 850,
      delay: 150,
      origin: 'bottom'
    });

    // Footer Columns
    sr.reveal('.footer-col', {
      interval: 80,
      distance: '20px',
      duration: 600,
      origin: 'bottom'
    });
  }
});
