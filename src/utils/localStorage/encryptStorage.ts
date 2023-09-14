import { EncryptStorage } from 'encrypt-storage';

const secretKey = process.env.ENCRYPT_STORAGE_SECRET_KEY;

export const encryptStorage = new EncryptStorage(secretKey);
