export type IStatus = "Success" | "Fail" | "Loading";
import { ReactNode } from "react";

export interface ICardResponse {
  data: ICard[];
  status: IStatus;
}

export interface ICard {
  content: ReactNode;
  id: number;
  name: string;
  type: string;
  popupType: string;
  position: string;
  publisherId: number;
  skinId: number;
  userRole: number;
  windowHeight: string;
  windowWidth: string;
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