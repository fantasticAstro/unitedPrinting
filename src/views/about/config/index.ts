export interface Feature {
  label: string;
  paragraphs: string[];
  highlight: string | null;
}

export const FEATURES: Feature[] = [
  {
    label: 'ORIGINS',
    paragraphs: [
      'Community has always been at the heart of our operation.',
      'Twenty five years ago when Team United was in its infancy, filling orders out of a small warehouse with a handful of dedicated employees, it was our committment to relationships that set us apart from the competition.',
      'Today, partners across the nation expect that same local care and world-class efficiency we first cultivated at home in Charlotte, North Carolina.',
    ],
    highlight: null,
  },
  {
    label: 'CRAFTSMANSHIP',
    paragraphs: [
      'We take pride in our craftsmanship — and it shows! This year saw PICA recognize Team United in seven categories for excellence in print and artistic quality. Our clients love us because we approach every project with passion and unparalleled eye for detail.',
    ],
    highlight: 'Award-winning, our team treats every project with care.',
  },
  {
    label: 'SUSTAINABILITY',
    paragraphs: [
      'Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet.',
      'Sourcing paper from Forest Stewardship Counsel (FSC) certified suppliers, printing with renewable, vegetable-based inks, and optimizing recycling strategies has been standard practice for years. Under new leadership, Team United is in the process of becoming FSC certified and remains dedicated to having a positive impact on every community we engage.',
    ],
    highlight: 'Paper products are the most recycled material in the world!',
  },
  {
    label: 'VETERAN OWNED',
    paragraphs: [
      'Good leaders diligently model the behaviors they expect and inspire other team members to do the same. Facilitating and encouraging integrity, self-confidencea and teamwork are top priorities.',
      'By maintaining a thriving, cohesive unit within the workplace, Team United’s veteran leadership ultimately serves to amplify the experience and success of our clients.',
    ],
    highlight: 'Veteran leadership that promotes the success of all.',
  },
];
