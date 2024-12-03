import CryptoJS from 'crypto-js';

export const algorithms = {
  sha1: CryptoJS.SHA1,
  sha256: CryptoJS.SHA256,
  sha224: CryptoJS.SHA224,
  sha384: CryptoJS.SHA384,
  sha512: CryptoJS.SHA512,
  md5: CryptoJS.MD5,
  ripemd160: CryptoJS.RIPEMD160,
};