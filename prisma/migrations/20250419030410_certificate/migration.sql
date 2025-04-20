-- CreateTable
CREATE TABLE "certificates" (
    "id" SERIAL NOT NULL,
    "leadId" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pdf_url" TEXT,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id")
);
