export interface PresetText {
  accent: boolean;
  text: string;
}

export interface Preset {
  title: PresetText[];
  background: string;
  rings: boolean;
  veteran: boolean;
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
        accent: false,
        text: 'productive',
      },
      {
        accent: true,
        text: 'relationships',
      },
    ],
    background: 'gradient',
    rings: true,
    veteran: false,
  },
  {
    title: [
      {
        accent: true,
        text: 'Veteran',
      },
      {
        accent: false,
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
  },
];
