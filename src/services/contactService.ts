import { api } from './api';
import type { ContactPayload, ContactResponse } from '../types/contact';

export const submitContactRequest = async (
  payload: ContactPayload
): Promise<ContactResponse> => {
  const response = await api.post<ContactResponse>('/contact', payload);
  return response.data;
};
