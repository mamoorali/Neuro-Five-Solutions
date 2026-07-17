function PricingCard({ name, price, period, features, highlighted }) {
  const featuresHTML = features.map(f => `<li>${f}</li>`).join('');

  return `
    <div class="pricing-card ${highlighted ? 'pricing-card--highlighted' : ''}">
      <h3 class="pricing-card__name">${name}</h3>
      <p class="pricing-card__price">
        <span class="pricing-card__amount">${price}</span>
        <span class="pricing-card__period">${period}</span>
      </p>
      <ul class="pricing-card__features">
        ${featuresHTML}
      </ul>
      <a href="#" class="btn ${highlighted ? 'btn--primary' : 'btn--ghost'}">Choose ${name}</a>
    </div>
  `;
}

function Pricing() {
  const plans = [
    {
      name: 'Nightly',
      price: '$0',
      period: '/forever',
      features: ['3 soundscapes', 'Manual fade-out', 'Single device'],
      highlighted: false
    },
    {
      name: 'Deep Sleep',
      price: '$6',
      period: '/month',
      features: ['Unlimited soundscapes', 'Auto sleep-stage fade', 'Up to 3 devices', 'Offline playback'],
      highlighted: true
    }
  ];

  const cardsHTML = plans.map(PricingCard).join('');

  return `
    <p class="eyebrow eyebrow--center">Pricing</p>
    <h2 class="section-title">Start free, upgrade when you're ready</h2>
    <div class="pricing-grid">
      ${cardsHTML}
    </div>
  `;
}