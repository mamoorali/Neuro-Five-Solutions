document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbar').innerHTML = Navbar();
  document.getElementById('hero').innerHTML = Hero();
  document.getElementById('how-it-works').innerHTML = HowItWorks();
  document.getElementById('features').innerHTML = Features();
  document.getElementById('testimonial').innerHTML = Testimonial();
  document.getElementById('pricing').innerHTML = Pricing();
  document.getElementById('footer').innerHTML = Footer();
});