export const CLEAR_ALL_TEXT = 'Not offered';

export const THIRD_STEP_CARD_SECTIONS = [
  {
    key: 'motherhood',
    text: 'Motherhood Support',
    subText: 'Choose all that applies',
    answers: [
      { text: 'Onsite child care', value: 'Onsite child care' },
      { text: 'Lactation rooms', value: 'Lactation rooms' },
      { text: 'Accessible parking', value: 'Accessible parking' },
      { text: 'Discounted childcare', value: 'Discounted childcare' },
      { text: CLEAR_ALL_TEXT, value: 'Not offered' },
    ],
  },
  {
    key: 'flexibility',
    text: 'Work Flexibility',
    subText: 'Choose all that applies',
    answers: [
      { text: 'Flexible hours', value: 'Flexible hours' },
      { text: 'Working remotely', value: 'Working remotely' },
      { text: 'Job sharing', value: 'Job sharing' },
      { text: 'Part time opportunity', value: 'Part time opportunity' },
      { text: CLEAR_ALL_TEXT, value: 'Not offered' },
    ],
  },
];
