const rootPrefix = window.location.pathname.includes('/projects/') ? '../' : '';

const header = document.querySelector('[data-site-header]');
if (header) {
  header.innerHTML = `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="${rootPrefix}index.html">Nima <span>Daneshvarnejad</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">Menu</button>
        <div class="nav-links" id="site-navigation">
          <a data-nav="home" href="${rootPrefix}index.html">Home</a>
          <a data-nav="projects" href="${rootPrefix}projects.html">Projects</a>
          <a data-nav="cv" href="${rootPrefix}cv.html">CV</a>
          <a href="mailto:nimadane95@gmail.com">Contact</a>
        </div>
      </nav>
    </header>`;

  const toggle = header.querySelector('.nav-toggle');
  const links = header.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const path = window.location.pathname;
  const current = path.includes('/projects/') || path.endsWith('/projects.html') ? 'projects'
    : path.endsWith('/cv.html') ? 'cv' : 'home';
  header.querySelector(`[data-nav="${current}"]`)?.setAttribute('aria-current', 'page');
}

const footer = document.querySelector('[data-site-footer]');
if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-shell">
        <span>© ${new Date().getFullYear()} Nima Daneshvarnejad · Energy and environmental engineering</span>
        <span><a href="mailto:nimadane95@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/nimadane/">LinkedIn</a> · <a href="https://scholar.google.com/citations?user=mGlNNqAAAAAJ&hl=en">Google Scholar</a></span>
      </div>
    </footer>`;
}

