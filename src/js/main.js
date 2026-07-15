document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const collapseEl = document.querySelector('.navbar-collapse');
    const collapse = bootstrap.Collapse.getInstance(collapseEl);
    if (collapse) collapse.hide();
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const active = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`,
        );
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 },
);
sections.forEach((s) => observer.observe(s));

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href*="github.com"]').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'github_click', {
        event_category: 'engagement',
        event_label: el.href,
      });
    });
  });
  document.querySelectorAll('.project-card').forEach(function (el) {
    el.addEventListener('click', function () {
      const projectName =
        el.querySelector('.project-name')?.textContent?.trim() ||
        'unknown_project';
      gtag('event', 'project_card_click', {
        event_category: 'engagement',
        event_label: projectName,
      });
    });
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'contact_click', {
        event_category: 'engagement',
        event_label: el.href,
      });
    });
  });
});