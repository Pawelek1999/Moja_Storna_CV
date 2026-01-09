const toggles = document.querySelectorAll('.nav_button');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentItem = btn.closest('.nav_item_with_submenu');
    parentItem.classList.toggle('nav_item--open');
  });
});

// Books carousel
document.addEventListener("DOMContentLoaded", () => {
  const viewport = document.querySelector(".Books_viewport");
  const track = document.querySelector(".Books_track");
  const items = Array.from(document.querySelectorAll(".Book_item"));
  const prevBtn = document.querySelector(".Books_Button--prev");
  const nextBtn = document.querySelector(".Books_Button--next");

  if (!viewport || !track || items.length === 0 || !prevBtn || !nextBtn) return;

  let index = 0;
  const intervalMs = 3000;
  let timerId = null;

  // ile px trzeba przesunąć o 1 element (szerokość elementu + gap + marginesy)
  function stepSizePx() {
    const item = items[0];

    const rect = item.getBoundingClientRect();
    const styles = getComputedStyle(item);
    const trackStyles = getComputedStyle(track);

    const marginL = parseFloat(styles.marginLeft) || 0;
    const marginR = parseFloat(styles.marginRight) || 0;
    const gap = parseFloat(trackStyles.gap) || 0;

    // rect.width już zawiera padding/border, ale nie zawiera margin
    return rect.width + marginL + marginR + gap;
  }

  // ile elementów realnie mieści się w viewport (1/2/3 zależnie od media queries)
  function visibleCount() {
    const vw = viewport.getBoundingClientRect().width;
    const step = stepSizePx();
    return Math.max(1, Math.round(vw / step));
  }

  function maxIndex() {
    // ostatnia pozycja tak, żeby nie zostawić pustego miejsca z prawej
    return Math.max(0, items.length - visibleCount());
  }

  function clampIndex() {
    const max = maxIndex();
    if (index < 0) index = 0;
    if (index > max) index = max;
  }

  function update() {
    clampIndex();
    track.style.transform = `translateX(-${index * stepSizePx()}px)`;
  }

  function next() {
    const max = maxIndex();
    if (index >= max) {
    index = 0;        // ⬅️ wracamy na początek
  } else {
    index++;
  }
    update();
  }

  function prev() {
    const max = maxIndex();
    if (index <= 0) {
    index = max;        // ⬅️ wracamy na koniec
  } else {
    index--;
  }
    update();
  }

  function restartAuto() {
    stopAuto();
    timerId = setInterval(next, intervalMs);
  }

  function stopAuto() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  // kliknięcia
  nextBtn.addEventListener("click", () => {
    next();
    restartAuto();
  });

  prevBtn.addEventListener("click", () => {
    prev();
    restartAuto();
  });

  // pauza gdy użytkownik najedzie (opcjonalnie, ale fajne UX)
  viewport.addEventListener("mouseenter", stopAuto);
  viewport.addEventListener("mouseleave", restartAuto);

  // przy zmianie rozmiaru (responsive) przelicz szerokości
  window.addEventListener("resize", update);

  // start
  update();
  restartAuto();
});

//Intersection Observer - animacje przewijania
function createObserver(selector, options) {
  const section = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }});
  }, options);

  section.forEach(section => {
    observer.observe(section);
  });
}

createObserver('.text-slide-left, .text-drop, .photo-slide-left, .photo-rotate, .text-slide-right', {threshold: 0.2});
createObserver('.text-drop-bike, .photo-rotate-bike.show, .skills-slide-left', {threshold: 0.1});
createObserver('.text-slide-right-index', {threshold: 0.2});
