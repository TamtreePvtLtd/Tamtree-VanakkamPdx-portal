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
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}