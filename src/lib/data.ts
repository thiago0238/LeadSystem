// Tipos de dados baseados na estrutura do parquet Python
export interface QuizQuestionStat {
  quizid: number
  quiz_name: string
  questionid: number
  question_num: number
  categoria_questoes: string
  status: "ACERTO TOTAL" | "ERRO TOTAL" | "ACERTO PARCIAL"
  student_count: number
}

// Dados mockados baseados na estrutura do código Python
export const quizData: QuizQuestionStat[] = [
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":92,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":92,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":16,
        "question_num":15
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":92,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":11,
        "question_num":15
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":30,
        "question_num":16
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":16
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":18,
        "question_num":16
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":16
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":12
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":12,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":24,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":11
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":27
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":8,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":8,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":25
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":5
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":11,
        "question_num":5
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":14,
        "question_num":5
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":21,
        "question_num":10
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":10
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":2
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":7,
        "question_num":2
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":15,
        "question_num":2
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":2
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":13,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":13,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":18,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":16,
        "question_num":1
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":4
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":24,
        "question_num":4
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":8
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":8
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":18,
        "question_num":9
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":9
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":26,
        "question_num":9
    },
    {
        "quizid":1,
        "quiz_name":"Primeiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":21
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":13,
        "question_num":21
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":21
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":11
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":13
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":12
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":11
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":13
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":328,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":328,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":330,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":330,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":348,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":348,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":350,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":16
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2107,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2107,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":36
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2107,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2110,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2110,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":9,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2112,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2112,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2114,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2114,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":35
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":27
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":39
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":5
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":10
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":2
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":11,
        "question_num":4
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":8
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":8
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":2,
        "quiz_name":"Segundo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":9
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":14,
        "question_num":17
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":17
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":23
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":23
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":22
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":16,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":12,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":7,
        "question_num":37
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":15
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":11,
        "question_num":15
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2223,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":40
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2223,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2236,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2236,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2237,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2237,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2241,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2241,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":30
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":29
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":5
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":7,
        "question_num":5
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":11,
        "question_num":5
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":10
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":2
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":2
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":1
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":12,
        "question_num":4
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":8
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":8
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":9
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":3,
        "quiz_name":"Terceiro Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":11,
        "question_num":9
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":14
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":11
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":14
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2223,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":26
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":33
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":33
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":32
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":33
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":5
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":10
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":10,
        "question_num":4
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":8
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":9
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":4,
        "quiz_name":"Quarto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":18
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":17
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":22
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":37
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":8,
        "question_num":37
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2236,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":21
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2236,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2237,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2237,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2241,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":21
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":31
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2361,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":31
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":5
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":5
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":5
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":10
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":10
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":2
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":13,
        "question_num":1
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":1
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":4
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":8
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":5,
        "quiz_name":"Quinto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":9
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":18
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":18
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":19
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":34
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":35
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":35
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2357,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2359,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2360,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2362,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2363,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2367,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2372,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2373,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":5
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":4
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":10
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":10
    },
    {
        "quizid":6,
        "quiz_name":"Sexto Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":10
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":15
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":35
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1451,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1474,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":22
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1527,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":30
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1531,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1531,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1532,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1532,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":5
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":10
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":2
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":4
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":9
    },
    {
        "quizid":7,
        "quiz_name":"S\u00e9timo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1451,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1566,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1687,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":37
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1688,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":37
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1688,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":37
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1717,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":8,
        "quiz_name":"Oitavo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":34
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1451,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1566,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1566,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1671,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1717,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":10
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":4
    },
    {
        "quizid":10,
        "quiz_name":"Nono Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1527,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1566,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1658,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1659,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1671,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1671,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1698,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1803,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":11,
        "quiz_name":"D\u00e9cimo Per\u00edodo Matutino - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":92,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":11,
        "question_num":13
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":92,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":13
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":16
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":16
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":16
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":20
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":328,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":330,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":330,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":348,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":350,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":19
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":29
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":29
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":6,
        "question_num":5
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":5
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":10
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":2
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":2
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":4
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":8
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":8
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":9
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":9
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":9
    },
    {
        "quizid":12,
        "quiz_name":"Primeiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":11
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":118,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":11
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":11
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":119,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":12
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":14
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":12
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":12
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":327,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":9,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":329,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":330,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":348,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":349,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":350,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":17
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":25
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":5
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":10
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":2
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":2
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":4
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":8
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":9
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":13,
        "quiz_name":"Segundo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":11
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":166,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":11
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":167,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":11
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":353,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":356,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":365,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":366,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":403,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":404,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":19
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":23
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":5,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":22
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2132,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2148,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2150,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":8,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2154,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2156,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":34
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":10
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":4
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":8
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":8
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":9
    },
    {
        "quizid":14,
        "quiz_name":"Terceiro Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":39
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":39
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"OUTRAS QUEST\u00d5ES",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":40
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":23
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":20
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":19
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":5
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":10
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":2
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":4,
        "question_num":1
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":1
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":5,
        "question_num":4
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":9
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":15,
        "quiz_name":"Quarto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":27
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":502,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":27
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":507,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":512,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":25
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":26
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":18
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":12
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":12
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":12
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":12
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO PARCIAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1001,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":21
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1005,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1008,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1009,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":21
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1009,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":21
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":22
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":37
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":39
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":5
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":4
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":8
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":6,
        "question_num":9
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2528,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":16,
        "quiz_name":"Quinto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":29
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":506,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":28
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":750,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":19
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":18
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1008,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":20
    },
    {
        "quizid":17,
        "quiz_name":"Sexto Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":498,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":500,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":501,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":503,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":504,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":505,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":513,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":24
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":739,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":741,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":742,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":744,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":755,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":758,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":765,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1001,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1001,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1005,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1008,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1008,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1009,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1009,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":2,
        "question_num":16
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1079,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":17
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1148,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":35
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1451,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1474,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":22
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1527,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":31
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1527,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":32
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1531,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":30
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1531,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1532,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":30
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2202,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":36
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":5
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2464,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":4,
        "question_num":5
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2468,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":5
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2472,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":10
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2478,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":2
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2483,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":2
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":2,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2488,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2490,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":7,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2493,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2495,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":1
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":4
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":8
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":3,
        "question_num":9
    },
    {
        "quizid":18,
        "quiz_name":"S\u00e9timo Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2530,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":9
    },
    {
        "quizid":20,
        "quiz_name":"Nono Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":651,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":15
    },
    {
        "quizid":20,
        "quiz_name":"Nono Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1005,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":16
    },
    {
        "quizid":20,
        "quiz_name":"Nono Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":1688,
        "categoria_questoes":"QUEST\u00d5ES 11-39",
        "status":"ERRO TOTAL",
        "student_count":1,
        "question_num":38
    },
    {
        "quizid":20,
        "quiz_name":"Nono Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2500,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":4
    },
    {
        "quizid":20,
        "quiz_name":"Nono Per\u00edodo Noturno - Ci\u00eancia da Computa\u00e7\u00e3o 2025\/1",
        "questionid":2511,
        "categoria_questoes":"QUEST\u00d5ES 1-10",
        "status":"ACERTO TOTAL",
        "student_count":1,
        "question_num":8
    }
]
// Funções utilitárias para processar dados
export function getUniqueQuizzes(data: QuizQuestionStat[]) {
  return [...new Set(data.map((d) => d.quiz_name))]
}

export function getUniqueCategories(data: QuizQuestionStat[]) {
  return [...new Set(data.map((d) => d.categoria_questoes))]
}

export function getUniqueStatuses(data: QuizQuestionStat[]) {
  return [...new Set(data.map((d) => d.status))]
}

export function calculateMetrics(data: QuizQuestionStat[]) {
  const totalAlunos = data.reduce((acc, curr) => acc + curr.student_count, 0)
  const questoesUnicas = new Set(data.map((d) => `${d.quizid}-${d.questionid}`)).size
  const errosTotais = data.filter((d) => d.status === "ERRO TOTAL").reduce((acc, curr) => acc + curr.student_count, 0)
  const acertosTotais = data
    .filter((d) => d.status === "ACERTO TOTAL")
    .reduce((acc, curr) => acc + curr.student_count, 0)

  return { totalAlunos, questoesUnicas, errosTotais, acertosTotais }
}

export function getBlockData(data: QuizQuestionStat[]) {
  const bloco1a10 = data.filter((d) => d.question_num <= 10)
  const bloco11mais = data.filter((d) => d.question_num > 10)

  const bloco1Acertos = bloco1a10
    .filter((d) => d.status === "ACERTO TOTAL")
    .reduce((acc, curr) => acc + curr.student_count, 0)
  const bloco1Erros = bloco1a10
    .filter((d) => d.status === "ERRO TOTAL")
    .reduce((acc, curr) => acc + curr.student_count, 0)

  const bloco2Acertos = bloco11mais
    .filter((d) => d.status === "ACERTO TOTAL")
    .reduce((acc, curr) => acc + curr.student_count, 0)
  const bloco2Erros = bloco11mais
    .filter((d) => d.status === "ERRO TOTAL")
    .reduce((acc, curr) => acc + curr.student_count, 0)

  return [
    { bloco: "Questões 1–10", acertos: bloco1Acertos, erros: bloco1Erros },
    { bloco: "Questões 11+", acertos: bloco2Acertos, erros: bloco2Erros },
  ]
}

export function getQuizSummary(data: QuizQuestionStat[]) {
  const quizzes = getUniqueQuizzes(data)

  return quizzes.map((quiz) => {
    const quizData = data.filter((d) => d.quiz_name === quiz)
    const acertos = quizData
      .filter((d) => d.status === "ACERTO TOTAL")
      .reduce((acc, curr) => acc + curr.student_count, 0)
    const erros = quizData.filter((d) => d.status === "ERRO TOTAL").reduce((acc, curr) => acc + curr.student_count, 0)

    return { quiz, acertos, erros }
  })
}

export function getTopQuestions(data: QuizQuestionStat[], type: "erros" | "acertos", limit = 10) {
  const questionMap = new Map<string, { acertos: number; erros: number; total: number }>()

  data.forEach((d) => {
    const key = `Q${d.questionid} (${d.quiz_name.substring(0, 10)}...)`
    if (!questionMap.has(key)) {
      questionMap.set(key, { acertos: 0, erros: 0, total: 0 })
    }
    const current = questionMap.get(key)!
    if (d.status === "ACERTO TOTAL") {
      current.acertos += d.student_count
    } else if (d.status === "ERRO TOTAL") {
      current.erros += d.student_count
    }
    current.total += d.student_count
  })

  const questions = Array.from(questionMap.entries()).map(([questionId, stats]) => ({
    questionId,
    taxaAcerto: (stats.acertos / stats.total) * 100,
    taxaErro: (stats.erros / stats.total) * 100,
    totalRespostas: stats.total,
  }))

  if (type === "erros") {
    return questions.sort((a, b) => b.taxaErro - a.taxaErro).slice(0, limit)
  }
  return questions.sort((a, b) => b.taxaAcerto - a.taxaAcerto).slice(0, limit)
}

export function getCategoryPerformance(data: QuizQuestionStat[]) {
  const categories = getUniqueCategories(data)

  return categories
    .map((categoria) => {
      const catData = data.filter((d) => d.categoria_questoes === categoria)
      const acertos = catData
        .filter((d) => d.status === "ACERTO TOTAL")
        .reduce((acc, curr) => acc + curr.student_count, 0)
      const erros = catData.filter((d) => d.status === "ERRO TOTAL").reduce((acc, curr) => acc + curr.student_count, 0)
      const total = acertos + erros

      return {
        categoria,
        acertos,
        erros,
        taxaAcerto: total > 0 ? Math.round((acertos / total) * 100) : 0,
      }
    })
    .sort((a, b) => b.taxaAcerto - a.taxaAcerto)
}
