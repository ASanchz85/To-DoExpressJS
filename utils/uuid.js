import Crypto from "crypto";

export const uuidGen = () => {
  return Crypto.randomUUID().split("-")[0];
};
