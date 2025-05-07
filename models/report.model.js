const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Feature"],
        required: true
    },
    properties: {
        description: {
            type: String,
            required: true
        },
        status: { type: String, enum: ["Ativo", "Inativo"], required: true, default: "Ativo" },
        reportedAt: { type: Date, default: Date.now },
        inactiveAt: { type: Date, default: null },
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
},
{
    timestamps: true,
});
ReportSchema.index({ geometry: "2dsphere" });
const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;