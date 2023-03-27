import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovoProfessorController } from "../factories/novo-professor-controller-factory";
import { makeResgataProfessoresController } from "../factories/resgata-professores-controller-factory";

export default (router: Router) => {
  router.post("/professor", adaptRoute(makeNovoProfessorController()));
  router.get("/professor", adaptRoute(makeResgataProfessoresController()));
};
