

import { Models } from "node-appwrite";
import { Evaluation, Position, Status } from ".";

//TODO change to player/visit/scout interfaces
export interface Player extends Models.Document {
  Name: string;
  Age: string;
  Weight?: number;
  School?: string;
  Evaluation: Evaluation;
  Position: Position;
  Class: string;
}

export interface Visit extends Models.Document {
  player: Player;
  schedule: Date;
  status: Status;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
