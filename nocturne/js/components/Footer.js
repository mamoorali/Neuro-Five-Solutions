function Footer() {
  const year = new Date().getFullYear();
  return `
    <div class="footer__inner">
      <span class="footer__logo">Nocturne</span>
      <p class="footer__copy">© ${year} Nocturne. A demo project — not a real product.</p>
      <div class="footer__links">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>
    </div>
  `;
}