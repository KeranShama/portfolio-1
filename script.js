// ════ NAVIGATION ════
function toggleNav() {
  const nav = document.getElementById('navMobile');
  nav.classList.toggle('open');
}

// Close mobile nav on outside click
document.addEventListener('click', function(e) {
  const nav = document.getElementById('navMobile');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Highlight active nav link on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#C9A84C';
    }
  });
});

// ════ GOAL TABS ════
function showGoal(which) {
  document.querySelectorAll('.goal-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.goal-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('goal-' + which).classList.add('active');
  event.target.classList.add('active');
}

// ════ CERT MODAL ════
function openCertModal(src, caption) {
  document.getElementById('modalImg').src = src;
  document.getElementById('modalCaption').textContent = caption;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCertModal() {
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCertModal();
});

// ════ PROFILE PHOTO PREVIEW ════
function previewPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const frame = document.getElementById('profilePhotoFrame');
    frame.innerHTML = '<img src="' + e.target.result + '" alt="Keran Shama Sudharshan" style="width:100%;height:100%;object-fit:cover;border-radius:18px;" />';
  };
  reader.readAsDataURL(file);
}

// ════ FADE-IN ON SCROLL ════
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.timeline-item, .cert-card, .skill-block, .project-card, .achievement-item, .swot-card, .gap-card, .goal-card, .roadmap-phase, .about-card, .contact-card, .interest-item, .value-pill'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
