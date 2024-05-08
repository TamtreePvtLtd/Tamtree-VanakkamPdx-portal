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
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}