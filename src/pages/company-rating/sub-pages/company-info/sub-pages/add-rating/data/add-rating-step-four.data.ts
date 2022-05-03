export const FOUR_STEP_CARD_SECTIONS = [
  {
    key: 'like_most_about_company_options',
    text: 'What do you most like about {Company Name}?',
    subText: 'Choose 3 that applies',
    maxItems: 3,
    answers: [
      { text: 'Work life balance', value: 'Work life balance' },
      { text: 'Superior corporate perks', value: 'Superior corporate perks' },
      { text: 'Job security', value: 'Job security' },
      { text: 'Able to make a difference', value: 'Able to make a difference' },
      { text: 'Workplace friendship', value: 'Workplace friendship' },
      { text: 'Above average PTO', value: 'Above average PTO' },
      { text: 'Respect for people', value: 'Respect for people' },
    ],
  },
  {
    key: 'like_least_about_company_options',
    text: 'What do you least like about {Company Name}?',
    subText: 'Choose all that applies',
    answers: [
      { text: 'Heavy on meetings', value: 'Heavy on meetings' },
      { text: 'Slow moving environment', value: 'Slow moving environment' },
      { text: 'Micromanagement', value: 'Micromanagement' },
      { text: 'No work life balance', value: 'No work life balance' },
      { text: 'Lack of stability', value: 'Lack of stability' },
      { text: 'Office politics', value: 'Office politics' },
    ],
  },
];
