// YesPDF Website - Gallery Filter & Lightbox
document.addEventListener('DOMContentLoaded', () => {
  // === Gallery Filter ===
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryGrid = document.getElementById('gallery-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      galleryItems.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden-item');
          item.style.display = '';
        } else {
          item.classList.add('hidden-item');
          // Use timeout for smooth animation
          setTimeout(() => {
            if (item.classList.contains('hidden-item')) {
              item.style.display = 'none';
            }
          }, 400);
        }
      });
    });
  });

  // === Lightbox ===
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentItems = [];
  let currentIndex = 0;

  // Get visible gallery items (respecting current filter)
  function getVisibleItems() {
    return Array.from(galleryItems).filter(item => !item.classList.contains('hidden-item'));
  }

  // Open lightbox
  window.openLightbox = function(element) {
    currentItems = getVisibleItems();
    const parentItem = element.closest('.gallery-item');
    currentIndex = currentItems.indexOf(parentItem);

    if (currentIndex === -1) currentIndex = 0;

    showLightboxImage();
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => {
      lightbox.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
  };

  function showLightboxImage() {
    if (currentItems.length === 0) return;

    const item = currentItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('[data-i18n]');

    if (img) {
      lightboxImg.src = img.dataset.full || img.src;
      lightboxImg.alt = img.alt;
    }
    if (caption) {
      lightboxCaption.textContent = caption.textContent;
    }

    // Update nav button visibility
    lightboxPrev.style.opacity = currentIndex > 0 ? '1' : '0.3';
    lightboxNext.style.opacity = currentIndex < currentItems.length - 1 ? '1' : '0.3';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300);
    document.body.style.overflow = '';
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      showLightboxImage();
    }
  }

  function nextImage() {
    if (currentIndex < currentItems.length - 1) {
      currentIndex++;
      showLightboxImage();
    }
  }

  // Event listeners
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  // Click outside image to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.style.display !== 'flex') return;

    switch(e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowLeft': prevImage(); break;
      case 'ArrowRight': nextImage(); break;
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
      }
    }, { passive: true });
  }
});
