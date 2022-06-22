import { E_GROUP_Type } from "../enums/Enums";
import { IEvent } from "../interfaces/interfaces";

export const createEventInitialValues = () => {
  const initialValues: IEvent = {
    id: "",
    image: "",
    title: "",
    location: "",
    date: "",
    message: "",
    host: "",
    phone: "",
    email: "",
    facebook: "",
    eventType: E_GROUP_Type.PUBLIC,
  };
  return { ...initialValues };
};
