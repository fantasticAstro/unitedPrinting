export interface PresetText {
  accent: boolean;
  text: string;
}

export interface Preset {
  title: PresetText[];
  background: string;
  rings: boolean;
  veteran: boolean;
  supplementaryText: string;
}

/**
 * Time between preset changes.
 */
export const PRESET_TIMING = 5000;

/**
 * Subtext items.
 */
export const SUBTEXTS: PresetText[][] = [
  [
    {
      accent: false,
      text: 'Serving',
    },
    {
      accent: false,
      text: 'clients',
    },
    {
      accent: true,
      text: 'across',
    },
    {
      accent: true,
      text: 'the',
    },
    {
      accent: true,
      text: 'nation',
    },
  ],
  [
    {
      accent: false,
      text: 'Veteran',
    },
    {
      accent: false,
      text: 'owned',
    },
    {
      accent: true,
      text: 'and',
    },
    {
      accent: true,
      text: 'operated',
    },
  ],
];

/**
 * Page presets.
 */
export const PRESETS: Preset[] = [
  {
    title: [
      {
        accent: false,
        text: 'Dedication',
      },
      {
        accent: false,
        text: 'to',
      },
      {
        accent: true,
        text: 'sustainability',
      },
    ],
    background: 'aerial-forest',
    rings: false,
    veteran: false,
    supplementaryText: 'Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet.',
  },
  {
    title: [
      {
        accent: false,
        text: 'A',
      },
      {
        accent: false,
        text: 'history',
      },
      {
        accent: false,
        text: 'of',
      },
      {
        accent: true,
        text: 'productive',
      },
      {
        accent: false,
        text: 'relationships',
      },
    ],
    background: 'gradient',
    rings: true,
    veteran: false,
    supplementaryText: 'Community has always been at the heart of our operation. Twenty five years ago when Team United was in its infancy, filling orders out of a small warehouse with a handful of dedicated employees, it was our committment to relationships that set us apart from the competition. Today, partners across the nation expect that same local care and world-class efficiency we first cultivated at home in Charlotte, North Carolina.',
  },
  {
    title: [
      {
        accent: false,
        text: 'Veteran',
      },
      {
        accent: true,
        text: 'owned',
      },
      {
        accent: false,
        text: 'and',
      },
      {
        accent: false,
        text: 'operated',
      },
    ],
    background: 'military-0',
    rings: false,
    veteran: true,
    supplementaryText: 'Good leaders diligently model the behaviors they expect and inspire other team members to do the same. Facilitating and encouraging integrity, self-confidencea and teamwork are top priorities. By maintaining a thriving, cohesive unit within the workplace, Team United’s veteran leadership ultimately serves to amplify the experience and success of our clients.',
  },
];
