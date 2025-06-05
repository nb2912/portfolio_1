export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const isValidMessage = (message: string): boolean => {
  return message.trim().length >= 10;
}; 