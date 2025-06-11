import { CertificateFormLoading } from "@/components/loading/certificate-form-loading"

export default function Loading() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
      </div>

      <CertificateFormLoading />
    </div>
  )
}
