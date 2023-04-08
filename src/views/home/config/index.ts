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
      accent: true,
      text: 'Serving',
    },
    {
      accent: true,
      text: 'clients',
    },
    {
      accent: false,
      text: 'across',
    },
    {
      accent: false,
      text: 'the',
    },
    {
      accent: false,
      text: 'nation',
    },
  ],
  [
    {
      accent: true,
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
    supplementaryText: 'Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet. Read more...',
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
    supplementaryText: 'Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet. Read more...',
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
    background: 'american-flag',
    rings: false,
    veteran: true,
    supplementaryText: 'Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet. Read more...',
  },
];
