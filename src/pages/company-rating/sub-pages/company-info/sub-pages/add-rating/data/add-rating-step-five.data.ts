import { ISelectOption } from 'components/shared/form-controls/select/Select';

export const AGE_OPTIONS: ISelectOption[] = [
  { value: '<20', label: '<20' },
  { value: '20-30', label: '20-30	' },
  { value: '30-40', label: '30-40' },
  { value: '40-50', label: '40-50' },
  { value: '50-60', label: '50-60' },
  { value: '>60', label: '60+' },
];

export const USER_STATUS_OPTIONS: ISelectOption[] = [
  { value: 'Married No Kids', label: 'Married No Kids' },
  { value: 'Married With Kids', label: 'Married With Kids' },
  { value: 'Single With Kids', label: 'Single With Kids' },
  { value: 'Single With No Kids', label: 'Single With No Kids' },
];

export const USER_ETHNICITY_OPTIONS: ISelectOption[] = [
  { value: 'African American', label: 'African American' },
  { value: 'Asian', label: 'Asian' },
  { value: 'Indian American', label: 'Indian American' },
  { value: 'Hispanic or Latino', label: 'Hispanic or Latino' },
  { value: 'White', label: 'White' },
  { value: 'Other', label: 'Other' },
];
