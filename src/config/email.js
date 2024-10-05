import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const APPOINTMENT_TEMPLATE = import.meta.env.VITE_EMAIL_APPOINTMENT_ID;
const JOB_APPLICATION_TEMPLATE = import.meta.env.VITE_EMAIL_JOB_APPLICATION_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export async function sendAppointmentEmail(formData) {
  try {
    await emailjs.send(SERVICE_ID, APPOINTMENT_TEMPLATE, formData, { publicKey: PUBLIC_KEY })
  } catch(err) {
    console.log('Trouble sending email');
  }
}

export async function sendJobApplicationEmail(formData) {
  try {
    await emailjs.send(SERVICE_ID, JOB_APPLICATION_TEMPLATE, formData, { publicKey: PUBLIC_KEY })
  } catch(err) {
    console.log('Trouble sending email');
  }
}
