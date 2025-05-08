import { Request, Response } from "express";
import Report from "../models/report.model";

export const getAllReports = async (_req: Request, res: Response) => {
    try {
        const reports = await Report.find({});
        res.status(200).json(reports);
    } catch (error) {
        console.error("Error fetching reports:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getReportById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const report = await Report.findById(id);
        if (!report) {
            res.status(404).json({ message: "Report not found" });
            return;
        }
        res.status(200).json(report);
    } catch (error) {
        console.error("Error fetching report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const newReport = async (req: Request, res: Response) => {
    try {
        const report = await Report.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        console.error("Error creating report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reportToUpdate = await Report.findByIdAndUpdate(id, req.body, { new: true });

        if (!reportToUpdate) {
            res.status(404).json({ message: "Report not found" });
            return;
        }

        res.status(200).json(reportToUpdate);
    } catch (error) {
        console.error("Error updating report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteReportById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reportToDelete = await Report.findByIdAndDelete(id);
        if (!reportToDelete) {
            res.status(404).json({ message: "Report not found" });
            return;
        }
        res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
        console.error("Error deleting report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

