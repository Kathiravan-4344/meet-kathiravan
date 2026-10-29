/**
 * ============================================================================
 * JAVASCRIPT INTERACTIONS — KATHIRAVAN V PORTFOLIO
 * Features:
 * - Mobile navigation toggle & backdrop click handling
 * - Accessible drawer navigation with Escape key support
 * - Smooth section scrolling with header offset
 * - Active navigation link highlighting (Scrollspy)
 * - Scroll-reveal animations using IntersectionObserver
 * - Back-to-top button show/hide and smooth return
 * - Copy Email to clipboard with animated toast notification
 * - Interactive Project Preview Modal
 * - Reduced motion preference support
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* --------------------------------------------------------------------------
     1. DYNAMIC COPYRIGHT YEAR
     -------------------------------------------------------------------------- */
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     2. STICKY HEADER SHADOW ON SCROLL
     -------------------------------------------------------------------------- */
  const header = document.getElementById("header");
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     3. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const mobileNavLinks = document.querySelectorAll(
    ".mobile-nav-link, .mobile-cta",
  );

  const openMobileMenu = () => {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    if (drawerBackdrop) {
      drawerBackdrop.classList.add("active");
      drawerBackdrop.setAttribute("aria-hidden", "false");
    }
    mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeMobileMenu = () => {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove("active");
      drawerBackdrop.setAttribute("aria-hidden", "true");
    }
    mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Close mobile drawer when any navigation link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close mobile drawer on Escape key press
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      mobileDrawer &&
      mobileDrawer.classList.contains("open")
    ) {
      closeMobileMenu();
    }
  });

  /* --------------------------------------------------------------------------
     4. SMOOTH SCROLLING WITH FIXED HEADER OFFSET
     -------------------------------------------------------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 70;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });

        // Set focus to the target element for accessibility
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHTING)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-menu .nav-link");

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;
    const headerHeight = (header ? header.offsetHeight : 76) + 30;

    sections.forEach((currentSection) => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop - headerHeight;
      const sectionId = currentSection.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  /* --------------------------------------------------------------------------
     6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Reveal all elements immediately if user prefers reduced motion or no observer support
    revealElements.forEach((el) => {
      el.classList.add("active");
      if (el.classList.contains("skill-category-card")) {
        el.querySelectorAll(".skill-progress-fill").forEach((fill) => {
          const target = fill.getAttribute("data-percentage");
          if (target) fill.style.width = `${target}%`;
        });
      }
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // Animate progress bars when skill category card enters viewport
            if (entry.target.classList.contains("skill-category-card")) {
              entry.target
                .querySelectorAll(".skill-progress-fill")
                .forEach((fill) => {
                  const target = fill.getAttribute("data-percentage");
                  if (target) {
                    fill.style.width = `${target}%`;
                  }
                });
            }

            // Unobserve once revealed for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((el) => {
      // Add slight staggered delay to adjacent elements inside grids
      const parentGrid = el.closest(
        ".about-cards-grid, .skills-categories-grid, .projects-grid",
      );
      if (parentGrid) {
        const siblings = Array.from(parentGrid.children);
        const childIndex = siblings.indexOf(el);
        if (childIndex > 0) {
          el.style.transitionDelay = `${(childIndex % 4) * 0.1}s`;
        }
      }
      revealObserver.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     7. FLOATING BACK-TO-TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById("backToTop");
  const toggleBackToTop = () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. COPY EMAIL TO CLIPBOARD WITH TOAST FEEDBACK
     -------------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyBtnText = document.getElementById("copyBtnText");
  const toastNotification = document.getElementById("toastNotification");
  let toastTimer = null;

  const showToast = (message) => {
    if (!toastNotification) return;
    const toastMsgEl = document.getElementById("toastMessage");
    if (toastMsgEl && message) {
      toastMsgEl.textContent = message;
    }
    toastNotification.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const emailToCopy =
        copyEmailBtn.getAttribute("data-email") ||
        "kathiravan.v.141@gmail.com";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers
          const tempInput = document.createElement("input");
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        }

        if (copyBtnText) copyBtnText.textContent = "Copied!";
        showToast(`Email copied: ${emailToCopy}`);

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = "Copy Email";
        }, 2500);
      } catch (err) {
        showToast(`Email: ${emailToCopy}`);
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. INTERACTIVE CONCEPT PROJECT PREVIEW MODAL
     -------------------------------------------------------------------------- */
  const previewModal = document.getElementById("projectModal");
  const openModalBtns = document.querySelectorAll(".btn-preview-modal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");

  const openModal = () => {
    if (!previewModal) return;
    previewModal.classList.add("open");
    previewModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!previewModal) return;
    previewModal.classList.remove("open");
    previewModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalCloseActionBtn)
    modalCloseActionBtn.addEventListener("click", closeModal);

  if (previewModal) {
    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      previewModal &&
      previewModal.classList.contains("open")
    ) {
      closeModal();
    }
  });
});
