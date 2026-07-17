function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell it how you sleep',
      text: 'Answer a few quick questions — light sleeper, need background noise, wind down slowly, and so on.'
    },
    {
      number: '02',
      title: 'It mixes your soundscape',
      text: 'Nocturne blends layers of ambient sound in real time, balanced to what you told it.'
    },
    {
      number: '03',
      title: 'Drift off, it fades on its own',
      text: 'Playback tapers off automatically once you are asleep, so you are not left with a timer.'
    }
  ];

  const stepsHTML = steps.map(step => `
    <div class="step">
      <span class="step__number">${step.number}</span>
      <h3 class="step__title">${step.title}</h3>
      <p class="step__text">${step.text}</p>
    </div>
  `).join('');

  return `
    <p class="eyebrow eyebrow--center">How it works</p>
    <h2 class="section-title">Three steps to a better night</h2>
    <div class="steps">
      ${stepsHTML}
    </div>
  `;
}