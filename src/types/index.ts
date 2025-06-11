type Course = {
  id: number;
  name: string;
};
type Student = {
  id: number;
  nome: string;
  email?: string;
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

export type ParamsToken = Promise<{ token: string }>;

export type GradeItem = {
    id: number;
    itemname: string;
    itemtype: string;
    itemmodule: string;
    iteminstance: number;
    itemnumber: number;
    idnumber: string;
    categoryid: number;
    outcomeid: null | number; // ou o tipo apropriado se não for sempre null
    scaleid: null | number; // ou o tipo apropriado se não for sempre null
    locked: boolean;
    cmid: number;
    graderaw: null | number; // ou o tipo apropriado se não for sempre null
    gradedatesubmitted: null | number; // ou o tipo apropriado se não for sempre null (timestamp)
    gradedategraded: null | number; // ou o tipo apropriado se não for sempre null (timestamp)
    gradehiddenbydate: boolean;
    gradeneedsupdate: boolean;
    gradeishidden: boolean;
    gradeislocked: boolean;
    gradeisoverridden: boolean;
    gradeformatted: string;
    grademin: number;
    grademax: number;
    rangeformatted: string;
    percentageformatted: string;
    feedback: string;
    feedbackformat: number;
};

export type UserGrade = {
    courseid: number;
    courseidnumber: string;
    userid: number;
    userfullname: string;
    useridnumber: string;
    maxdepth: number;
    gradeitems: GradeItem[];
};

export type Gradereport_user_get_grade_items = {
    usergrades: UserGrade[];
};