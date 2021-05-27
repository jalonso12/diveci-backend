import CryptoJS from 'crypto-js';

/* eslint-disable */
export const encryptText = (text) =>
  CryptoJS.AES.encrypt(text, `${process.env.SECRET_KEY}`).toString();

export const decryptText = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, `${process.env.SECRET_KEY}`);

  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};

export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    `${process.env.SECRET_KEY}`,
  ).toString();

  return ciphertext;
};

export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, `${process.env.SECRET_KEY}`);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};
