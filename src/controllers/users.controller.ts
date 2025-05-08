import { Request, Response } from "express";
import User from "../models/user.model";


export const newUser = async (req: Request, res: Response) => {
    try {
        const report = await User.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        console.error("Error creating report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};