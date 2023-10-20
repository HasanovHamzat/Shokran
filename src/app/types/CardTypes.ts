export type IStatus = "Success" | "Fail" | "Loading";
import { ReactNode } from "react";

export interface ICardResponse {
  data: ICard[];
  status: IStatus;
}

export interface ICard {
  id: number;
  firstname: string;
  lastname: string;
  mobile: string;
  ssn: number;
  offer: boolean;
}

export interface ICardCreate {
  firstName: string;
  lastName: string;
  securityNumber: string;
  mobile: string;
  checked: boolean;
}

export interface IAddCreditCard {
  cardNumber: string;
  expirationDate: string;
  cvc: string;
}

export interface IVerifyyPayment {
  code: string;
}

export interface IBankCard {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}