import crypto from "crypto"

const MASTER_KEY = process.env.MASTER_KEY as string
if (!MASTER_KEY) throw new Error("MASTER_KEY não definida no .env")

// Deriva uma chave segura com base no UUID + chave mestra
function deriveKey(companyUuid: string): Buffer {
  return crypto.createHash("sha256").update(companyUuid + MASTER_KEY).digest()
}

export function encryptData(plainText: string, companyUuid: string): string {
  const key = deriveKey(companyUuid)
  const iv = crypto.randomBytes(12)
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv)

  const encrypted = Buffer.concat([cipher.update(plainText, "utf8"), cipher.final()])
  const authTag = cipher.getAuthTag()

  return Buffer.concat([iv, authTag, encrypted]).toString("base64")
}

export function decryptData(encryptedBase64: string, companyUuid: string): string {
  const key = deriveKey(companyUuid)
  const data = Buffer.from(encryptedBase64, "base64")

  const iv = data.slice(0, 12)
  const authTag = data.slice(12, 28)
  const encrypted = data.slice(28)

  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv)
  decipher.setAuthTag(authTag)

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])
  return decrypted.toString("utf8")
}
