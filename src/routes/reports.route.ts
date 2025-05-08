import express from "express";
import { deleteReportById, getAllReports, getReportById, newReport, updateReport } from "../controllers/reports.controller";
  const reportsRouter = express.Router();

reportsRouter.get("/", getAllReports);
reportsRouter.get("/:id",getReportById);
reportsRouter.post("/",newReport);
reportsRouter.put("/:id",updateReport);
reportsRouter.delete("/:id",deleteReportById);

export default reportsRouter;
