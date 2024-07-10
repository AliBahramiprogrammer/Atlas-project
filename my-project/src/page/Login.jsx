import React from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../redux";
import { useDispatch } from "react-redux";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = {
    email: "test@gmail.com",
    password: "123456"
  }

    const onSubmit = (event) => {
      event.preventDefault();
      if (event.target[0].value === user.email && event.target[1].value === user.password) {
        dispatch(authActions.login())
        navigate("/product")
      }
    };

    return (
        <div
            className="px-16 flex h-screen w-screen justify-center items-center"
            id="loginPage"
        >
            <form className=" flex w-full text-white flex-col gap-5 max-w-2xl" onSubmit={onSubmit}>
                <h2 className="font-serif text-3xl font-bold">Sign In</h2>
                <label className="text-white text-sm font-bold">
                    Email
                    <input
                        type="email"
                        className="w-full px-2 py-1 border rounded font-normal mt-2 text-black"
                    />
                </label>
                <label className="text-white text-sm font-bold">
                    Password
                    <input
                        type="password"
                        className="w-full px-2 py-1 border rounded font-normal mt-2 text-black"
                    />
                </label>
                <span className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="bg-blue-600 py-1 px-10 text-white text-xl font-bold hover:bg-blue-500 rounded-md"
                    >
                        Login
                    </button>
                </span>
            </form>
        </div>
    );
};

export default Login;
