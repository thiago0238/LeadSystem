import nodemailer from "nodemailer"

type EmailAttachment = {
  filename: string
  content: Buffer | string
}

type EmailOptions = {
  to: string
  subject: string
  text: string
  html?: string
  attachments?: EmailAttachment[]
}

export async function sendEmail(options: EmailOptions) {
  // Create a test account if no SMTP settings are provided
  // In production, you would use real SMTP settings
  let testAccount
  let transporter

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT) {
    testAccount = await nodemailer.createTestAccount()

    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM || '"Sistema de Cursos" <cursos@exemplo.com>',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments,
  })

  // If using test account, log the URL where the email can be previewed
  if (testAccount) {
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  }

  return info
}

