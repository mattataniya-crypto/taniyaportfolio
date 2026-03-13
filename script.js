// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Counter animation
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {
  const impactSection = document.querySelector("#impact");
  if (!impactSection) return;

  const sectionTop = impactSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint && !counterStarted) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = Math.max(1, Math.ceil(target / 60));

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count + "+";
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", runCounters);
runCounters();
