// utils/encryption.ts
import crypto from "crypto"

const algorithm = "aes-256-cbc"
const key = crypto
  .createHash("sha256")
  .update(String(process.env.ENCRYPTION_SECRET || "sua-chave-secreta"))
  .digest()
const iv = crypto.randomBytes(16)

export function encryptJSON(data: any): string {
    if (!process.env.ENCRYPTION_SECRET) {
    return data
    }
  
  const jsonData = JSON.stringify(data)
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(jsonData, "utf8", "hex")
  encrypted += cipher.final("hex")
  return iv.toString("hex") + ":" + encrypted
}

export function decryptJSON(encrypted: string): any {
    if (!process.env.ENCRYPTION_SECRET) {
        if (typeof encrypted === "string") {
          return JSON.parse(encrypted); // já é string
        }
        return encrypted; // já é objeto
    }
  const [ivHex, encryptedData] = encrypted.split(":")
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, "hex"))
  let decrypted = decipher.update(encryptedData, "hex", "utf8")
  decrypted += decipher.final("utf8")
  return JSON.parse(decrypted)
}
