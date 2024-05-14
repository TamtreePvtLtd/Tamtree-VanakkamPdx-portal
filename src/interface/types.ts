import { CurrencyType } from "../pages/discount page/DiscountPage";

export interface ICateringEnquiry {
  fullName: string;
  email: string;
  typeOfEvent?: string;
  guestCount?: number;
  mobileNumber: string;
  message?: string;
  eventDate: string; 
}
export interface IDiscountPage {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  percentageValue?: number; 
  dollarsValue?: number;
  currency: CurrencyType | string;
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}