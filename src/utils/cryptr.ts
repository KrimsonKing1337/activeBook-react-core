import Cryptr from 'cryptr';

const secretKey = process.env.ENCRYPT_STORAGE_SECRET_KEY;

export const cryptr = new Cryptr(secretKey);
