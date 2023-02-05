//styles
import styles from "./LoginSignup.module.css";

//components
import InputBox from "../inputBox/InputBox";
import SubmitButton from "../submitButton/SubmitButton";

//custom hook
import useLoginSignupContext from "../../hooks/useLoginSignupContext";

export default function LoginSignup({ onlyLogin = false }) {
  const { formType, setFormType } = useLoginSignupContext();
  return (
    <div className={styles["login-signup-main"]}>
      {formType === "login" && (
        <h2 className={styles["login-signup-main__form-heading"]}>Login</h2>
      )}
      {formType === "signup" && (
        <h2 className={styles["login-signup-main__form-heading"]}>Sign Up</h2>
      )}
      {formType === "recover account" && (
        <h2 className={styles["login-signup-main__form-heading"]}>
          Recover Account
        </h2>
      )}

      <form noValidate className={styles["login-signup-main__form"]}>
        <div className={styles["login-signup-main__form__inputs-container"]}>
          {formType === "login" && (
            <InputBox
              type={"number"}
              labelText={"Employee ID"}
              placeholder={"Enter Employee ID"}
            />
          )}

          {formType !== "login" && (
            <InputBox
              type={"email"}
              labelText={"Email"}
              placeholder={"i.g. vanessa.smith@gmail.com"}
            />
          )}

          {formType === "signup" && (
            <InputBox
              type={"text"}
              labelText={"Username"}
              placeholder={"Enter a username"}
            />
          )}

          {formType !== "recover account" && (
            <InputBox
              type={"password"}
              labelText={"Password"}
              placeholder={"Enter Password"}
            />
          )}

          {formType === "signup" && (
            <InputBox
              type={"password"}
              labelText={"Confirm Password"}
              placeholder={"Enter Password Again"}
            />
          )}
        </div>

        <div
          className={styles["login-signup-main__form__switch-button-container"]}
        >
          {onlyLogin && formType === "login" && (
            <button onClick={() => setFormType("recover account")}>
              Forgot password?
            </button>
          )}

          {!onlyLogin && formType === "login" && (
            <div>
              <button onClick={() => setFormType("recover account")}>
                Forgot password?
              </button>

              <button onClick={() => setFormType("signup")}>
                Not a user? Sign up
              </button>
            </div>
          )}

          {formType === "signup" && (
            <button onClick={() => setFormType("login")}>
              Already a user? Login
            </button>
          )}

          {formType === "recover account" && (
            <button onClick={() => setFormType("login")}>
              I have a password
            </button>
          )}
        </div>

        {formType === "recover account" && (
          <SubmitButton buttonText={"Recover Account"} />
        )}
        {formType === "login" && <SubmitButton buttonText={"Login"} />}
        {formType === "signup" && <SubmitButton buttonText={"Sign Up"} />}
      </form>
    </div>
  );
}
