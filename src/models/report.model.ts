import mongoose, { Schema, Document } from "mongoose";

export interface IReport extends Document {
  type: "Feature";
  properties: {
    description: string;
    status: "Ativo" | "Inativo";
    reportedAt?: Date;
    inactiveAt?: Date | null;
    user: mongoose.Types.ObjectId;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ReportSchema: Schema<IReport> = new Schema(
  {
    type: {
      type: String,
      enum: ["Feature"],
      required: true,
    },
    properties: {
        description: { type: String, required: true },
        status: {
          type: String,
          enum: ["Ativo", "Inativo"],
          default: "Ativo",
        },
        user: { 
          type: Schema.Types.ObjectId, 
          ref: "User", 
          required: true 
        },
        reportedAt: { type: Date, default: Date.now },
        inactiveAt: { type: Date, default: null },
    },
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

ReportSchema.index({ geometry: "2dsphere" });

const Report = mongoose.model<IReport>("Report", ReportSchema);
export default Report;
