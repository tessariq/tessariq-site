// Replace navbar-brand text with SVG logo + wordmark
(function () {
  var brand = document.querySelector('.navbar-brand');
  if (!brand) return;

  brand.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 160 160" fill="none" style="vertical-align:middle;margin-right:8px;">' +
      '<rect x="10" y="10" width="140" height="140" rx="4" stroke="currentColor" stroke-width="2" opacity="0.25"/>' +
      '<rect x="38" y="38" width="38" height="38" rx="2" fill="currentColor" opacity="1.0"/>' +
      '<rect x="84" y="38" width="38" height="38" rx="2" fill="currentColor" opacity="0.7"/>' +
      '<rect x="84" y="84" width="38" height="38" rx="2" fill="currentColor" opacity="0.4"/>' +
      '<rect x="38" y="84" width="38" height="38" rx="2" fill="currentColor" opacity="0.3"/>' +
      '<line x1="10" y1="10" x2="38" y2="38" stroke="currentColor" stroke-width="1.5" opacity="0.2"/>' +
      '<line x1="150" y1="10" x2="122" y2="38" stroke="currentColor" stroke-width="1.5" opacity="0.2"/>' +
      '<line x1="10" y1="150" x2="38" y2="122" stroke="currentColor" stroke-width="1.5" opacity="0.2"/>' +
      '<line x1="150" y1="150" x2="122" y2="122" stroke="currentColor" stroke-width="1.5" opacity="0.2"/>' +
    '</svg>' +
    '<span>tessariq</span>';
})();

// Nav dark-to-light transition on homepage
(function () {
  var hero = document.querySelector('.tq-hero');
  if (!hero) return; // Not on homepage — nav stays in default (light) state

  var stickyWrap = document.querySelector('.sticky-top');
  if (!stickyWrap) return;

  // Add dark-hero class immediately (no flash of light nav)
  stickyWrap.classList.add('tq-nav-dark');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          stickyWrap.classList.add('tq-nav-dark');
        } else {
          stickyWrap.classList.remove('tq-nav-dark');
        }
      });
    },
    { threshold: 0, rootMargin: '-56px 0px 0px 0px' } // 56px = nav height
  );

  observer.observe(hero);
})();
