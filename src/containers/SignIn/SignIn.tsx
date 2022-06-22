import classes from "./SignIn.module.scss";
import SignInForm from "./SignInComponents/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <div className={classes["loginContainer"]}>
      <div className={classes["profileText"]}>Profile</div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
