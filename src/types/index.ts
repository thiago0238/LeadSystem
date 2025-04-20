type Course = {
  id: number;
  name: string;
};
type Student = {
  id: number;
  nome: string;
  email: string;
  courseId: number;
  curso: string;
  nota: number;
  situacao: string;
};
type NotasCursos = {
  id: number;
  aptos: number;
  reprovados: number;
};
type Certificate = {
  courseId: number;
  leadId: number;
}

export type DashboardStatsProps = {
  totalLeads: number;
  course: Course[];
  students: Student[];
  notasCursos: NotasCursos[];
  cetificate?: Certificate[]
};