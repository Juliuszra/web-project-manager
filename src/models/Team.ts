import { Schema, model, models } from "mongoose";

const TeamSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    members: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        role: { type: String, enum: ["OWNER", "MEMBER"], default: "MEMBER" },
      },
    ],
  },
  { timestamps: true }
);

export const Team = models.Team || model("Team", TeamSchema);