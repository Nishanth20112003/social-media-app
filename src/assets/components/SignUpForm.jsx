import { useRef, useState, useEffect } from "react";
import LoginForm from "./LoginForm";
function SingUpForm() {
  let [toggleLoginForm, setToggleLoginForm] = useState(false);
  let [toggleAlert, setToggleAlert] = useState(false);
  let [successsMessage, setSuccessMessage] = useState(false);    
     let [mydata, setMyData] = useState([]);
  let firstNameInput = useRef();
  let passwordInput = useRef();
  let age = useRef();
  let gender = useRef();
  let phone = useRef();
  let lastName = useRef();

  function handleSignUp() {
    if (
      firstNameInput.current.value == "" ||
      passwordInput.current.value == "" 
    ) {
      alert();
      return;
    }
    let newData= {
      firstName: firstNameInput.current.value,
      password: passwordInput.current.value,
    };
       setMyData((prevData) => [...prevData, newData]);
       
    firstNameInput.current.value = "";
    lastName.current.value = "";
    passwordInput.current.value = "";
    age.current.value = "";
    gender.current.value = "";
    phone.current.value = "";
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 2000);
  }
  function handleLogin() {
    setToggleLoginForm(true);
  }
  function alert() {
    setToggleAlert(true);
    setTimeout(() => {
      setToggleAlert(false);
    }, 3000);
  }
//   useEffect(()=>{
//          console.log("data : ", mydata) 
//   },[mydata])
  return (
    <>
      {toggleLoginForm ? (
        <LoginForm signUpData={mydata}/>
      ) : (
        <div className="sign-up-form-container w-[500px] p-5 m-auto mt-[30px] rounded-lg transition-all duration-300">
          <h1 className="text-white text-2xl font-semibold">Sign Up</h1>
          <div className="form mt-5">
            <div className="sign-up-header sm:flex gap-2">
              <input
                ref={firstNameInput}
                type="text"
                placeholder="First Name"
                className="input first-name text-white w-[50%] px-2 py-2 outline-none"
              />
              <input
                ref={lastName}
                type="text"
                placeholder="Last Name"
                className="input last-name  sm:w-[50%] text-white   px-2 py-2  outline-none"
              />
            </div>
            <input
              ref={passwordInput}
              type="password"
              placeholder="Password"
              className="input text-white w-[100%] mt-3  px-2 py-2  outline-none"
            />
            <input
              ref={age}
              type="number"
              placeholder="Age"
              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
              className="input age-input text-white mt-3 w-[100%] px-2 py-2 outline-none"
            />
            <input
              ref={gender}
              type="text"
              placeholder="Gender"
              className="input mt-3 w-[100%] text-white  px-2 py-2  outline-none"
            />
            <input
              ref={phone}
              type="number"
              placeholder="Phone"
              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
              className=" input mt-3 w-[100%] px-2 py-2 text-white outline-none"
            />
            <button
              onClick={handleSignUp}
              className="sign-up-btn bg-blue-600 hover:bg-blue-700 font-semibold w-[100%] mt-3 text-white py-2 rounded-sm"
            >
              Sign Up
            </button>
            <h1 className="w-[fit-content] m-auto mt-2 text-gray-500 text-sm">
              Already have a account?
            </h1>
            <button
              onClick={handleLogin}
              className="sign-up-login-btn bg-black  font-semibold w-[100%] mt-2 text-white py-2 rounded-sm"
            >
              Login Now
            </button>
          </div>
          <div
            className={
              toggleAlert
                ? "alert bg-yellow-400 w-[fit-content] text-black absolute top-[5px] left-[50%] translate-x-[-50%] transition-all duration-1000"
                : "hidden"
            }
          >
            <h1 className="font-semibold px-2 py-1">
              All fields must be filled!
            </h1>
          </div>
          <div
            className={
              successsMessage
                ? "success-message bg-blue-600 w-[fit-content] text-white absolute top-[5px] left-[50%] translate-x-[-50%] transition-all duration-1000"
                : "hidden"
            }
          >
            <h1 className="font-semibold px-2 py-1 text-white">
              Registered Successfully !!{" "}
              <span className="font-semibold text-black">Login now</span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
export default SingUpForm;
