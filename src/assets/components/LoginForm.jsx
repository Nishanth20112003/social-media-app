import { useRef, useState, useEffect } from "react";
import SingUpForm from "./SignUpForm";
import HomePage from "./HomePage";

function LoginForm({ setApp}) {
  let [toggleSignUpForm, setToggleSignUpForm] = useState(true);
  let [toggleHomePage, setToggleHomePage] = useState(false);
  let [alert, setAlert] = useState(false);
  let [invalidAlert, setInvalidAlert] = useState(false);
  let usernameInput = useRef();
  let passwordInput = useRef();
  function handleEnterKey(e){
    if(e.key === 'Enter'){
      console.log("enter key pressed");
      loginHandler();
    }
    return;
  }
  function loginHandler() {
    if (
      usernameInput.current.value == "" ||
      passwordInput.current.value == ""
    ) {
      handleAlert();
      return;
    }

    let name = usernameInput.current.value.toLowerCase();
    let password = passwordInput.current.value.toLowerCase();

    if(name == "nishanth" && password == "1234"){
      setApp(true);
    }else{
      handleInvalidAlert()
    }
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  }
  function handleInvalidAlert() {
    setInvalidAlert(true);
    setTimeout(() => {
      setInvalidAlert(false);
    }, 2000);
  }
  function handleAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }
  function handleSignUp() {
    setToggleSignUpForm(false);
  }
  useEffect(() => {});
  return (
    <>
      {toggleSignUpForm ? (
        <div className="container w-[fit-content] m-auto">
          <h1 className="hidden mt-[30px] font-bold text-3xl bg-gray-800 w-[fit-content] py-1 px-8 text-white m-auto font-sans shadow-xl rounded-md">
            Connectify...
          </h1>
          <div className="form-container w-[400px] text-center mt-[50px] m-auto p-2 rounded-lg">
            <h1 className="font-semibold text-2xl mt-5 mb-2 text-white">
              Welcome to Connectify !!
            </h1>
            <input
              ref={usernameInput}
              type="text"
              placeholder="Username"
              className="name-input text-white px-2 py-2 w-[80%] mt-3 rounded-sm outline-none focus:border border-blue-500"
            />
            <input
            onKeyUp={(e)=>handleEnterKey(e)}
              ref={passwordInput}
              type="password"
              placeholder="Password"
              className="password-input px-2 py-2 w-[80%] mt-3 rounded-sm outline-none text-white focus:border border-blue-500"
            />
            <button
              onClick={loginHandler}
              className="block w-[80%] rounded-full m-auto mt-3 mb-3 bg-blue-700 text-white font-semibold py-2 hover:bg-blue-800"
            >
              Log in
            </button>
            <h1 className="text-[12px] text-gray-400">
              Don't have an account?
            </h1>
            <button
              onClick={handleSignUp}
              className="block w-[80%] rounded-full m-auto mt-3 mb-3 bg-black text-white font-semibold py-2 "
            >
              Sign Up
            </button>
          </div>
          <div
            className={
              alert
                ? "alert-box w-[fit-content] py-1 px-3 font-semibold bg-red-400 text-white absolute top-[10px] left-[50%] translate-x-[-50%] shadow-2xl"
                : "hidden"
            }
          >
            <h1>All fields must be filled!</h1>
          </div>
          <div
            className={
              invalidAlert
                ? "w-[fit-content] py-2 px-3 font-semibold text-black bg-red-400 absolute top-2 left-[50%] translate-x-[-50%]"
                : "hidden"
            }
          >
            <h1>Invalid Name or Password</h1>
          </div>
        </div>
      ) : (
        <SingUpForm />
      )}{toggleHomePage ? <HomePage /> : ""}
    </>
  );
}

export default LoginForm;
