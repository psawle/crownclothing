import { Login } from "../login";
import { SignUpForm } from "../signup";
import "./signin.styles.scss";

export const Signin = () => {
  return (
    <>
      <div className="signin-conatiner">
        <div className="login1-container">
          <Login />
        </div>
        <div className="signup1-container">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};
