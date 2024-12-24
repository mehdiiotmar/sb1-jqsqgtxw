export const validateCardNumber = (number: string): boolean => {
  return /^[0-9]{16}$/.test(number.replace(/\s/g, ''));
};

export const validateExpiryDate = (date: string): boolean => {
  if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(date)) return false;
  
  const [month, year] = date.split('/');
  const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
  const now = new Date();
  
  return expiry > now;
};

export const validateCVV = (cvv: string): boolean => {
  return /^[0-9]{3,4}$/.test(cvv);
};