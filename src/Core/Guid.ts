import crypto from "crypto";

export class Guid {
    static newGuid() {
        return crypto.randomUUID();
    }
  }