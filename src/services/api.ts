import { ICateringEnquiry } from "../interface/types";
import { httpWithoutCredentials } from "./http";

const createCateringEnquiry = async (data: ICateringEnquiry) => {
  try {
    const response = await httpWithoutCredentials.post(
      "enquiry/createEnquiry",
      data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createCateringEnquiry}
