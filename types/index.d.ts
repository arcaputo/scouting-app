/* eslint-disable no-unused-vars */


import { Visit } from "./appwrite.types";

declare type SearchParamProps = {
    params: { [key: string]: string};
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Status = "pending" | "scheduled" | "cancelled";
  declare type Evaluation = "Offered" | "Shortlist" | "Camp" | "Watchlist" | "Uninterested";
  declare type Position = "QB" | "RB" | "OT" | "OG" | "C" | "WR" | "TE" | "DL" | "DT" | "DE" | "LB" | "DB" | "K"
  
  declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    birthDate: Date;
    address: string;
    privacyConsent: boolean;
  }
  
  declare type CreateAppointmentParams = {
    userId: string;
    player: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateAppointmentParams = {
    visitId: string;
    userId: string;
    visit: Visit;
    type: string;
  };

