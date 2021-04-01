import { ResponseModel } from "../responseModel";
import { CarImage } from "./carimage";

export interface CarImageResponseModel extends ResponseModel{
    data: CarImage[]
  }