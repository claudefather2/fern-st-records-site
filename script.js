// Fern St Records — site interactions
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Only one track plays at a time
  var players = document.querySelectorAll('audio');
  players.forEach(function (a) {
    a.addEventListener('play', function () {
      players.forEach(function (other) { if (other !== a) other.pause(); });
    });
  });

  // Activate any Spotify chips that have a URL set (data-spotify)
  document.querySelectorAll('a.chip[data-spotify]').forEach(function (chip) {
    var url = chip.getAttribute('data-spotify');
    if (url) {
      chip.href = url;
      chip.target = '_blank';
      chip.rel = 'noopener';
      chip.classList.remove('chip--soon');
      chip.removeAttribute('aria-disabled');
      chip.textContent = 'Spotify';
    }
  });

  // Gentle scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.artist').forEach(function (s) { s.classList.add('reveal'); io.observe(s); });
})();
