//react
import { useEffect } from "react";

//custom hook
import useLoginSignupContext from "../../hooks/useLoginSignupContext";

//components
import InputBox from "../inputBox/InputBox";
import SubmitButton from "../submitButton/SubmitButton";
import CloseIcon from "../closeIcon/CloseIcon";
import BackdropBlur from "../backdropBlur/BackdropBlur";
import Loading from "../loading/Loading";
import SuccessMessage from "../successMessage/SuccessMessage";

//styles
import styles from "./LoginSignup.module.css";

//image source
//import mailIcon from "../../assets/email.svg";
//import loginIcon from "../../assets/login.svg";

export default function LoginSignup({
  onlyLogin = false,
  loadingImage = undefined,
}) {
  const {
    loginSignupFinalState,
    backdropOpen,
    setBackdropOpen,
    closeForm,
    collectData,
    changeFormType,
    checkData,
    checkDatabaseData,
    dispatch,
  } = useLoginSignupContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "resetErrorData" });
    checkData(loginSignupFinalState.formType);
  };

  // this useEffect function is replicating an asynchronus fetch call to the database by using the timer
  useEffect(() => {
    let timer;

    if (!loginSignupFinalState.isPending && !loginSignupFinalState.isSuccess) {
      dispatch({ type: "changeToPendingWhenNoError" });
    }

    if (loginSignupFinalState.isPending && !loginSignupFinalState.isSuccess) {
      timer = setTimeout(() => {
        dispatch({ type: "resetErrorData" });
        checkDatabaseData(loginSignupFinalState.formType);
        dispatch({ type: "changeToSuccessWhenNoFinalError" });
        dispatch({ type: "changeIsPending", payload: false });
      }, 1200);
    }

    if (loginSignupFinalState.isSuccess) {
      if (loginSignupFinalState.formType === "login") {
        timer = setTimeout(() => {
          closeForm();
          setBackdropOpen(false);
          clearTimeout(timer);
        }, 1200);
      }
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [
    loginSignupFinalState.emailError,
    loginSignupFinalState.passwordError,
    loginSignupFinalState.confirmedPasswordError,
    loginSignupFinalState.usernameError,
    loginSignupFinalState.employeeIdError,
    loginSignupFinalState.isPending,
    loginSignupFinalState.isSuccess,
    dispatch,
    closeForm,
    setBackdropOpen,
    checkDatabaseData,
    loginSignupFinalState.formType,
  ]);

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
        {/* close icon here */}
        {!loginSignupFinalState.isPending &&
          !loginSignupFinalState.isSuccess && (
            <div className={styles["login-signup-main__close-icon-container"]}>
              <CloseIcon
                handleClick={() => {
                  setBackdropOpen(false);
                  closeForm();
                }}
              />
            </div>
          )}

        {/* heading here */}
        {/* headings will not show when the state has gone to success or failure */}
        {!loginSignupFinalState.isSuccess && (
          <>
            {loginSignupFinalState.formType === "login" && (
              <h2 className={styles["login-signup-main__form-heading"]}>
                {loginSignupFinalState.isPending ? "Logging in..." : "Login"}
              </h2>
            )}
            {loginSignupFinalState.formType === "signup" && (
              <h2 className={styles["login-signup-main__form-heading"]}>
                {loginSignupFinalState.isPending ? "Signing up..." : "Signup"}
              </h2>
            )}
            {loginSignupFinalState.formType === "recoverAccount" && (
              <h2 className={styles["login-signup-main__form-heading"]}>
                {loginSignupFinalState.isPending
                  ? "Finding Account..."
                  : "Recover Account"}
              </h2>
            )}
          </>
        )}

        {/* the actual form starts here */}
        {/* if the process is PENDING then the form should disappear */}
        {!(
          loginSignupFinalState.isPending || loginSignupFinalState.isSuccess
        ) && (
          <form
            onSubmit={handleSubmit}
            noValidate
            className={styles["login-signup-main__form"]}
          >
            <div
              className={styles["login-signup-main__form__inputs-container"]}
            >
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

            {/* switch different form types */}
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

            {loginSignupFinalState.formType === "login" && (
              <SubmitButton
                extraClass={[styles["login-signup-main__form__submit-button"]]}
                buttonText={"Login"}
              />
            )}

            {loginSignupFinalState.formType === "signup" && (
              <SubmitButton
                extraClass={[styles["login-signup-main__form__submit-button"]]}
                buttonText={"Sign Up"}
              />
            )}

            {loginSignupFinalState.formType === "recoverAccount" && (
              <SubmitButton
                extraClass={[styles["login-signup-main__form__submit-button"]]}
                buttonText={"Recover Account"}
              />
            )}
          </form>
        )}

        {/* loading spinner */}
        {loginSignupFinalState.isPending && (
          <Loading loadingImage={loadingImage} />
        )}

        {/* success messages are all here */}
        {loginSignupFinalState.isSuccess && (
          <div className={styles["login-signup-main__success"]}>
            {/* success message for login form */}
            {loginSignupFinalState.formType === "login" && (
              <div
                className={
                  styles[
                    "login-signup-main__success__success-message-and-button"
                  ]
                }
              >
                <SuccessMessage
                  //imageSource={loginIcon}
                  message={"Login successful."}
                />
              </div>
            )}

            {/* success message for recover account form */}
            {loginSignupFinalState.formType === "signup" && (
              <div
                className={
                  styles[
                    "login-signup-main__success__success-message-and-button"
                  ]
                }
              >
                <SuccessMessage
                  message={
                    <>
                      {" "}
                      Signup successful. Please confirm your account using the
                      confirmation link we have sent to{" "}
                      <span className="highlighted-secondary">
                        {loginSignupFinalState.email}
                      </span>
                      .
                    </>
                  }
                />

                <SubmitButton
                  onClick={() => {
                    setBackdropOpen(false);
                    closeForm();
                  }}
                  buttonText={"Close"}
                />
              </div>
            )}

            {/* success message for recover account form */}
            {loginSignupFinalState.formType === "recoverAccount" && (
              <div
                className={
                  styles[
                    "login-signup-main__success__success-message-and-button"
                  ]
                }
              >
                <SuccessMessage
                  //imageSource={mailIcon}
                  message={
                    <>
                      Please check the email address{" "}
                      <span className="highlighted-secondary">
                        {loginSignupFinalState.email}
                      </span>{" "}
                      for instructions to reset your password.
                    </>
                  }
                />
                <SubmitButton
                  onClick={() => {
                    setBackdropOpen(false);
                    closeForm();
                  }}
                  buttonText={"Close"}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
