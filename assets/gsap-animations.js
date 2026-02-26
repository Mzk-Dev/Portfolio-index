// ============================================
// GSAP ANIMATIONS - FIXED VERSION (NO OPACITY STUCK)
// Uses fromTo for all ScrollTrigger animations
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. HERO - Load Animation (no ScrollTrigger)
// ============================================
gsap.from('.hero-text h1', {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: 'power4.out',
  delay: 0.3
});

gsap.from('.hero-text .subtitle', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.6
});

gsap.from('.hero-text > p', {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: 'power2.out',
  delay: 0.9
});

gsap.from('.hero-buttons .btn', {
  duration: 0.8,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  ease: 'back.out(1.7)',
  delay: 1.2
});

// ============================================
// 2. PROFILE CARD (no ScrollTrigger)
// ============================================
gsap.from('.profile-card', {
  duration: 1.2,
  scale: 0.8,
  rotation: -5,
  opacity: 0,
  ease: 'elastic.out(1, 0.5)',
  delay: 0.5
});

gsap.from('.profile-image-wrapper', {
  duration: 1,
  scale: 0,
  rotation: 360,
  opacity: 0,
  ease: 'back.out(1.7)',
  delay: 1
});

// ============================================
// helper for ScrollTrigger defaults
// ============================================
const stOnce = (trigger, start = 'top 85%') => ({
  trigger,
  start,
  once: true
});

// ============================================
// 3. STATS
// ============================================
gsap.utils.toArray('.stat').forEach((stat, i) => {
  gsap.fromTo(
    stat,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: i * 0.15,
      scrollTrigger: stOnce(stat, 'top 85%')
    }
  );
});

// ============================================
// 4. SKILLS (cards)
// ============================================
gsap.utils.toArray('.skill-card').forEach((card, index) => {
  gsap.fromTo(
    card,
    { rotationY: 90, opacity: 0 },
    {
      rotationY: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      delay: index * 0.1,
      scrollTrigger: stOnce(card, 'top 85%')
    }
  );
});

// ============================================
// 5. SKILL ICONS
// ============================================
gsap.utils.toArray('.skill-icon').forEach((icon, i) => {
  gsap.fromTo(
    icon,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'bounce.out',
      delay: i * 0.05,
      scrollTrigger: stOnce(icon, 'top 85%')
    }
  );
});

// ============================================
// 6. PORTFOLIO (project cards) - already fixed
// ============================================
gsap.utils.toArray('.project-card').forEach((card, index) => {
  const direction = index % 2 === 0 ? -100 : 100;
  const rot = index % 2 === 0 ? -5 : 5;

  gsap.fromTo(
    card,
    { x: direction, opacity: 0, rotation: rot },
    {
      x: 0,
      opacity: 1,
      rotation: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: stOnce(card, 'top 80%')
    }
  );
});

// ============================================
// 7. TAGS
// ============================================
gsap.utils.toArray('.tag').forEach((tag, i) => {
  gsap.fromTo(
    tag,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      delay: i * 0.05,
      scrollTrigger: stOnce(tag, 'top 90%')
    }
  );
});

// ============================================
// 8. TESTIMONIALS (cards)
// ============================================
gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
  gsap.fromTo(
    card,
    { scale: 0.8, opacity: 0, y: 50 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: index * 0.2,
      scrollTrigger: stOnce(card, 'top 85%')
    }
  );
});

// ============================================
// 9. SECTION HEADERS
// ============================================
gsap.utils.toArray('.section-header').forEach(header => {
  const tag = header.querySelector('.section-tag');
  const title = header.querySelector('.section-title');
  const description = header.querySelector('.section-description');

  if (tag) {
    gsap.fromTo(
      tag,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: stOnce(header, 'top 80%')
      }
    );
  }

  if (title) {
    gsap.fromTo(
      title,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: stOnce(header, 'top 80%')
      }
    );
  }

  if (description) {
    gsap.fromTo(
      description,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.4,
        scrollTrigger: stOnce(header, 'top 80%')
      }
    );
  }
});

// ============================================
// 10. CONTACT
// ============================================
gsap.utils.toArray('.contact-item').forEach((item, i) => {
  gsap.fromTo(
    item,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: i * 0.15,
      scrollTrigger: stOnce(item, 'top 85%')
    }
  );
});

gsap.fromTo(
  '.contact-form',
  { x: 50, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: stOnce('.contact-form', 'top 85%')
  }
);

// ============================================
// 11. SOCIAL LINKS
// ============================================
gsap.utils.toArray('.social-link').forEach((link, i) => {
  gsap.fromTo(
    link,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: i * 0.1,
      scrollTrigger: stOnce('.social-links', 'top 90%')
    }
  );
});

// ============================================
// 12. FOOTER
// ============================================
gsap.fromTo(
  'footer p',
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: stOnce('footer', 'top 90%')
  }
);

// ============================================
// 13. FLOATING IMAGE
// ============================================
gsap.to('.profile-image-wrapper', {
  duration: 3,
  y: -20,
  ease: 'power1.inOut',
  yoyo: true,
  repeat: -1
});

// ============================================
// 14. NAV HIDE ON SCROLL
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    gsap.to('nav', { duration: 0.3, y: -100 });
  } else {
    gsap.to('nav', { duration: 0.3, y: 0 });
  }
  lastScroll = currentScroll;
});

// ============================================
// 15. STATS COUNTER ANIMATION
// ============================================
document.querySelectorAll(".stat").forEach((stat) => {
  const value = stat.querySelector(".stat-value");
  const label = stat.querySelector(".stat-label");

  const number = parseInt(value.textContent);
  const hasPlus = value.textContent.includes("+");

  const tl = gsap.timeline({
    scrollTrigger: stOnce(stat, "top 85%")
  });

  tl.fromTo(
    value,
    { innerText: 0 },
    {
      innerText: number,
      duration: 2,
      ease: "power3.out",
      snap: { innerText: 1 },
      onUpdate: function () {
        value.innerText = Math.floor(value.innerText) + (hasPlus ? "+" : "");
      }
    }
  );

  tl.fromTo(
    label,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=1.5"
  );
});

// Optional: refresh after full load (images/fonts can shift layout)
window.addEventListener('load', () => ScrollTrigger.refresh());