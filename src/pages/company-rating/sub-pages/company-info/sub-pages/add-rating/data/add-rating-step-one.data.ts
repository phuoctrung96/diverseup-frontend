import { ISelectOption } from 'components/shared/form-controls/select/Select';

export const GENDER_OPTIONS: ISelectOption[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'others' },
];

export const EMPLOYER_STATUS_RADIO = [
  { label: 'Current Employee', value: 'Current Employee' },
  { label: 'Former Employee', value: 'Former Employee' },
];

export const EMPLOYMENT_STATUS_OPTIONS = [
  { label: 'Full-time', value: 'Fulltime' },
  { label: 'Part-time', value: 'Parttime' },
];

export const JOB_FUNCTION_OPTIONS: ISelectOption[] = [
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Information Technology', label: 'Information Technology' },
  { value: 'Administration', label: 'Administration' },
  { value: 'Sales', label: 'Sales' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Research & Development', label: 'Research & Development' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Other', label: 'Other' },
];
