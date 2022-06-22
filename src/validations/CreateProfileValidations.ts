import * as Yup from "yup";

const CreateProfileValidation = Yup.object().shape({
  username: Yup.string().required("required*"),
  contact: Yup.string().required("required*"),
  occupation: Yup.string().required("required*"),
  hobby: Yup.string().required("required*"),
  favoriteGroups: Yup.array().required("required*").min(1),
  images: Yup.array().required("required*").min(4),
});
export default CreateProfileValidation;
