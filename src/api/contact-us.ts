import axios from 'utils/axios.config';

interface IContactUs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactUsApi = (body: IContactUs) => {
  return axios.post('/api/contactUs', body);
};
