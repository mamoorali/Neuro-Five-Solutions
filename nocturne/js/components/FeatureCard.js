function FeatureCard({ icon, title, text }) {
  return `
    <div class="feature-card">
      <div class="feature-card__icon">${icon}</div>
      <h3 class="feature-card__title">${title}</h3>
      <p class="feature-card__text">${text}</p>
    </div>
  `;
}

function Features() {
  const features = [
    {
      icon: '◐',
      title: 'Adapts through the night',
      text: 'The mix shifts gradually as your sleep stages change, instead of looping the same track.'
    },
    {
      icon: '⟡',
      title: 'Built from real recordings',
      text: 'Rain, wind, and tone layers are sourced from field recordings, not synthesized loops.'
    },
    {
      icon: '◌',
      title: 'Offline after the first sync',
      text: 'Once your soundscape is generated, it plays without needing a connection.'
    }
  ];

  const cardsHTML = features.map(FeatureCard).join('');

  return `
    <p class="eyebrow eyebrow--center">Features</p>
    <h2 class="section-title">Made to disappear into the background</h2>
    <div class="feature-grid">
      ${cardsHTML}
    </div>
  `;
}