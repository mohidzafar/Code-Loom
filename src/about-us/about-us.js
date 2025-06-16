  // Dark mode toggle (your working code)
  document.getElementById('darkToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark');
  });

    const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 0 && scrollY < 0) {
      navbar.classList.add('hide');
      navbar.classList.remove('show-shadow');
    } else {
      navbar.classList.remove('hide');
      if (scrollY > 300) {
        navbar.classList.add('show-shadow');
      } else {
        navbar.classList.remove('show-shadow');
      }
    }
  });