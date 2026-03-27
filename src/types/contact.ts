export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
