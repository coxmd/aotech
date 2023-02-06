//styles
import styles from "./LoginSignup.module.css";

//components
import InputBox from "../inputBox/InputBox";
import SubmitButton from "../submitButton/SubmitButton";
import CloseIcon from "../closeIcon/CloseIcon";
import BackdropBlur from "../backdropBlur/BackdropBlur";

//custom hook
import useLoginSignupContext from "../../hooks/useLoginSignupContext";
import useCapitalize from "../../hooks/useCapitalizeStr";

export default function LoginSignup({ onlyLogin = false }) {
  const {
    loginSignupFinalState,
    backdropOpen,
    setBackdropOpen,
    closeForm,
    collectData,
    changeFormType,
    checkData,
  } = useLoginSignupContext();

  const { capitalizeStr } = useCapitalize();

  return (
    <>
      <BackdropBlur
        open={backdropOpen}
        onClick={() => {
          setBackdropOpen(false);
          closeForm();
        }}
      />
      <div
        className={`${styles["login-signup-main"]} ${
          loginSignupFinalState.formOpen
            ? styles["login-signup-main__open"]
            : "form closed"
        }`}
      >
        <div className={styles["login-signup-main__close-icon-container"]}>
          <CloseIcon
            handleClick={() => {
              setBackdropOpen(false);
              closeForm();
            }}
          />
        </div>

        {loginSignupFinalState.formType === "login" && (
          <h2 className={styles["login-signup-main__form-heading"]}>Login</h2>
        )}
        {loginSignupFinalState.formType === "signup" && (
          <h2 className={styles["login-signup-main__form-heading"]}>Sign Up</h2>
        )}
        {loginSignupFinalState.formType === "recoverAccount" && (
          <h2 className={styles["login-signup-main__form-heading"]}>
            Recover Account
          </h2>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formTypeCapitalized = capitalizeStr(
              loginSignupFinalState.formType,
              " ",
              ""
            );

            checkData(`check${formTypeCapitalized}FormInfo`);
          }}
          noValidate
          className={styles["login-signup-main__form"]}
        >
          <div className={styles["login-signup-main__form__inputs-container"]}>
            {loginSignupFinalState.formType === "login" && (
              <InputBox
                value={loginSignupFinalState.employeeId}
                errorText={loginSignupFinalState.employeeIdError}
                onChange={(e) => collectData(e, "changeEmployeeId")}
                type={"number"}
                labelText={"Employee ID"}
                placeholder={"Enter Employee ID"}
              />
            )}

            {loginSignupFinalState.formType !== "login" && (
              <InputBox
                value={loginSignupFinalState.email}
                errorText={loginSignupFinalState.emailError}
                onChange={(e) => collectData(e, "changeEmail")}
                type={"email"}
                labelText={"Email"}
                placeholder={"i.g. vanessa.smith@gmail.com"}
              />
            )}

            {loginSignupFinalState.formType === "signup" && (
              <InputBox
                value={loginSignupFinalState.username}
                errorText={loginSignupFinalState.usernameError}
                onChange={(e) => collectData(e, "changeUsername")}
                type={"text"}
                labelText={"Username"}
                placeholder={"Enter a username"}
              />
            )}

            {loginSignupFinalState.formType !== "recoverAccount" && (
              <InputBox
                value={loginSignupFinalState.password}
                errorText={loginSignupFinalState.passwordError}
                onChange={(e) => collectData(e, "changePassword")}
                type={"password"}
                labelText={"Password"}
                placeholder={"Enter Password"}
              />
            )}

            {loginSignupFinalState.formType === "signup" && (
              <InputBox
                value={loginSignupFinalState.confirmedPassword}
                errorText={loginSignupFinalState.confirmedPasswordError}
                onChange={(e) => collectData(e, "changeConfirmedPassword")}
                type={"password"}
                labelText={"Confirm Password"}
                placeholder={"Enter Password Again"}
              />
            )}
          </div>

          {/* switch to different form types */}
          <div
            className={
              styles["login-signup-main__form__switch-button-container"]
            }
          >
            {loginSignupFinalState.formType === "login" && (
              <>
                <button onClick={() => changeFormType("recoverAccount")}>
                  Forgot password?
                </button>

                {!onlyLogin && (
                  <button onClick={() => changeFormType("signup")}>
                    Not a user? Sign up
                  </button>
                )}
              </>
            )}

            {loginSignupFinalState.formType === "signup" && (
              <>
                <button onClick={() => changeFormType("login")}>
                  Already a user? Login
                </button>

                <button onClick={() => changeFormType("recoverAccount")}>
                  Forgot password?
                </button>
              </>
            )}

            {loginSignupFinalState.formType === "recoverAccount" && (
              <>
                <button onClick={() => changeFormType("login")}>
                  I have a password
                </button>

                {!onlyLogin && (
                  <button onClick={() => changeFormType("signup")}>
                    Not a user? Sign up
                  </button>
                )}
              </>
            )}
          </div>

          {/* submit buttons */}
          {loginSignupFinalState.formType === "recoverAccount" && (
            <SubmitButton buttonText={"Recover Account"} />
          )}
          {loginSignupFinalState.formType === "login" && (
            <SubmitButton buttonText={"Login"} />
          )}
          {loginSignupFinalState.formType === "signup" && (
            <SubmitButton buttonText={"Sign Up"} />
          )}
        </form>
      </div>
    </>
  );
}
