import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Get these from https://dashboard.emailjs.com/
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_example';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_example';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_example';

// Debug: Log credentials (first 10 chars only for security)
console.log('EmailJS Config:', {
  SERVICE_ID: SERVICE_ID.substring(0, 10) + '...',
  TEMPLATE_ID: TEMPLATE_ID.substring(0, 10) + '...',
  PUBLIC_KEY: PUBLIC_KEY.substring(0, 10) + '...',
});

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface FormData {
  service: string;
  name: string;
  phone: string;
  message: string;
}

export const sendFormEmail = async (formData: FormData) => {
  try {
    const templateParams = {
      to_email: 'mmrefrigeration2025@gmail.com',
      service_type: formData.service,
      from_name: formData.name,
      phone_number: formData.phone,
      message: formData.message || 'No additional details provided',
      reply_to: formData.phone,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('EmailJS Success:', response);
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    console.error('Error details:', {
      message: (error as any).message,
      text: (error as any).text,
      status: (error as any).status,
    });
    throw error;
  }
};
