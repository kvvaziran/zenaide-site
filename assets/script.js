(function(){
    const btn = document.querySelector('[data-menu-btn]');
    const panel = document.querySelector('[data-mobile-panel]');
    if (btn && panel){
      btn.addEventListener('click', () => {
        const open = panel.getAttribute('data-open') === 'true';
        panel.setAttribute('data-open', String(!open));
        panel.style.display = open ? 'none' : 'block';
        btn.setAttribute('aria-expanded', String(!open));
      });
      // default closed on load
      panel.style.display = 'none';
      panel.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    }
  
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  })();