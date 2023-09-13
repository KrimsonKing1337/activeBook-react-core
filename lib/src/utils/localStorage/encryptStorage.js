"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptStorage = void 0;
var encrypt_storage_1 = require("encrypt-storage");
var secretKey = process.env.ENCRYPT_STORAGE_SECRET_KEY;
exports.encryptStorage = new encrypt_storage_1.EncryptStorage(secretKey);
//# sourceMappingURL=encryptStorage.js.map