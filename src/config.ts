interface Config {
  emailJs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  contact: {
    email: string;
  };
}

export const config: Config = {
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
  contact: {
    email: 'nb7687@srmist.edu.in',
  },
}; 