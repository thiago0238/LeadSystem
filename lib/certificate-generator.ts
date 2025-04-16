import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

type CertificateData = {
  studentName: string
  courseName: string
  date: string
}

export async function generateCertificatePdf(data: CertificateData): Promise<Buffer> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create()

  // Add a blank page to the document
  const page = pdfDoc.addPage([842, 595]) // A4 landscape

  // Get the standard font
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Page dimensions
  const { width, height } = page.getSize()

  // Draw a border
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: rgb(0.2, 0.2, 0.8),
    borderWidth: 2,
  })

  // Draw certificate title
  page.drawText("CERTIFICADO", {
    x: width / 2 - boldFont.widthOfTextAtSize("CERTIFICADO", 36) / 2,
    y: height - 100,
    size: 36,
    font: boldFont,
    color: rgb(0.2, 0.2, 0.8),
  })

  // Draw certificate text
  const text1 = "Certificamos que"
  page.drawText(text1, {
    x: width / 2 - font.widthOfTextAtSize(text1, 16) / 2,
    y: height - 180,
    size: 16,
    font: font,
    color: rgb(0, 0, 0),
  })

  // Draw student name
  page.drawText(data.studentName, {
    x: width / 2 - boldFont.widthOfTextAtSize(data.studentName, 24) / 2,
    y: height - 220,
    size: 24,
    font: boldFont,
    color: rgb(0, 0, 0),
  })

  // Draw course completion text
  const text2 = "concluiu com sucesso o curso"
  page.drawText(text2, {
    x: width / 2 - font.widthOfTextAtSize(text2, 16) / 2,
    y: height - 260,
    size: 16,
    font: font,
    color: rgb(0, 0, 0),
  })

  // Draw course name
  page.drawText(data.courseName, {
    x: width / 2 - boldFont.widthOfTextAtSize(data.courseName, 24) / 2,
    y: height - 300,
    size: 24,
    font: boldFont,
    color: rgb(0.2, 0.2, 0.8),
  })

  // Draw date
  const dateText = `Data: ${data.date}`
  page.drawText(dateText, {
    x: width / 2 - font.widthOfTextAtSize(dateText, 14) / 2,
    y: 100,
    size: 14,
    font: font,
    color: rgb(0, 0, 0),
  })

  // Draw signature line
  page.drawLine({
    start: { x: width / 2 - 100, y: 150 },
    end: { x: width / 2 + 100, y: 150 },
    thickness: 1,
    color: rgb(0, 0, 0),
  })

  // Draw signature text
  const signatureText = "Assinatura"
  page.drawText(signatureText, {
    x: width / 2 - font.widthOfTextAtSize(signatureText, 12) / 2,
    y: 130,
    size: 12,
    font: font,
    color: rgb(0, 0, 0),
  })

  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save()

  // Convert to Buffer
  return Buffer.from(pdfBytes)
}

