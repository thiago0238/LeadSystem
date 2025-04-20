"use client"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Props {
  searchResults: {
    id: number
    courseId: number
    nome: string
    nota: number | null
    situacao: string | null
  }[]
    certificate: {
        courseId: number
        leadId: number
    }[]
  voidSelect?: (id: number) => void
}

export function AlunosTable({ searchResults, certificate, voidSelect }: Props) {
  if (!searchResults || searchResults.length === 0) return null

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Resultados da Busca</h3>
      <div className="border rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Nota</TableHead>
              <TableHead>Situação</TableHead>
                <TableHead className="w-[100px]">Certificado Enviado</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchResults.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.id}</TableCell>
                <TableCell>{student.nome}</TableCell>
                <TableCell>{student.nota !== null ? student.nota : "-"}</TableCell>
                <TableCell>
                  <span
                    className={
                      student.situacao === "Aprovado"
                        ? "text-green-600 font-semibold"
                        : student.situacao === "Reprovado"
                          ? "text-red-600 font-semibold"
                          : "text-gray-600"
                    }
                  >
                    {student.situacao || "-"}
                  </span>
                </TableCell>
                <TableCell>
                  {certificate.some(cert => cert.courseId === student.courseId && cert.leadId === student.id) ? (
                    <span className="text-green-600 font-semibold">Sim</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Não</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => voidSelect?.(student.id)} >
                    Enviar Certificado
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
