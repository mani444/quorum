import { IProfile } from "../interfaces/interfaces";

export const createProfileInitialValues = () => {
  const initialValues: IProfile = {
    id: "",
    username: "",
    contact: "",
    occupation: "",
    hobby: "",
    gender: "male",
    favoriteGroups: [],
    images: [],
  };
  return { ...initialValues };
};
