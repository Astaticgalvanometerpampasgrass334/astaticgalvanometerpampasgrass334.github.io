// Tab navigation
const tabButtons = document.querySelectorAll('.tabnav__btn');
const panels = document.querySelectorAll('.tabpanel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));

    btn.classList.add('is-active');
    document.getElementById(`panel-${btn.dataset.tab}`).classList.add('is-active');
  });
});

// Project filter
const filterButtons = document.querySelectorAll('.filterbar__btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});
