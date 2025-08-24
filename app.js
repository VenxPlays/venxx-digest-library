// Smooth scroll to checkout
const shopNowBtn = document.getElementById('shopNowBtn');
const checkoutNavBtn = document.getElementById('checkoutNavBtn');
const checkoutSection = document.getElementById('checkout');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');

// Show checkout modal
function openCheckout() {
  checkoutSection.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Hide checkout modal
function closeCheckout() {
  checkoutSection.classList.remove('active');
  document.body.style.overflow = '';
}

if (shopNowBtn) shopNowBtn.addEventListener('click', openCheckout);
if (checkoutNavBtn) checkoutNavBtn.addEventListener('click', openCheckout);
if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);

// Hide checkout on overlay click
if (checkoutSection) {
  checkoutSection.addEventListener('click', (e) => {
    if (e.target === checkoutSection) closeCheckout();
  });
}

// Contact form dummy handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    contactForm.reset();
  });
}

// Checkout form dummy handler
if (checkoutSection) {
  const checkoutForm = checkoutSection.querySelector('.checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your order!');
      closeCheckout();
      checkoutForm.reset();
    });
  }
}

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', function () {
    const item = this.closest('.faq-item');
    item.classList.toggle('active');
  });
});

// Reveal elements on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Newsletter dummy submit
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Subscribed! Welcome to the Rovo family 🥳');
    newsletterForm.reset();
  });
}

// Add to cart dummy
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function () {
    alert('Added to cart! Proceed to checkout when ready.');
    openCheckout();
  });
});
