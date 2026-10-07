'use strict';

// Core content and links work without JavaScript. This adds filtering and figure previews.
const filters = document.querySelectorAll('[data-filter]');
const papers = [...document.querySelectorAll('.paper[data-category]')];
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let visible = 0;
    papers.forEach(paper => {
      const show = category === 'all' || paper.dataset.category.split(' ').includes(category);
      paper.hidden = !show;
      if (show) visible++;
    });
    const status = document.getElementById('filter-status');
    if (status) status.textContent = `${visible} research ${visible === 1 ? 'project' : 'projects'} shown.`;
  });
});

// Reveal a specific project if a deep link points to an entry hidden by a filter.
function revealHashTarget() {
  let target;
  try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
  if (target && target.matches('.paper[hidden]')) {
    document.querySelector('[data-filter="all"]')?.click();
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealHashTarget);
revealHashTarget();

const dialog = document.getElementById('figure-dialog');
const dialogImage = document.getElementById('dialog-image');
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-figure]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const sourceImage = link.querySelector('img');
      document.getElementById('figure-title').textContent = link.dataset.title;
      dialogImage.src = link.getAttribute('href');
      dialogImage.alt = sourceImage.alt;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      document.querySelector('.figure-scroll').scrollTo(0, 0);
    });
  });
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
}
