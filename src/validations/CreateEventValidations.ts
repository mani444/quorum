import * as Yup from "yup";

const CreateEventValidation = Yup.object().shape({
  title: Yup.string().required("required*"),
  location: Yup.string().required("required*"),
  date: Yup.string().required("required*"),
  message: Yup.string().required("required*"),
  host: Yup.string().required("required*"),
  phone: Yup.string().required("required*"),
  email: Yup.string().email().required("required*"),
  facebook: Yup.string().required("required*"),
});
export default CreateEventValidation;
