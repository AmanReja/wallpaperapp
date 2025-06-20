import { React, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [fullname, setFullname] = useState("");
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-[100%] flex flex-col items-center">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Sign Up
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={(e) => {
              handelregister(e);
            }}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <Link to="/">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            already rgistered?
            <Link
              to="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {""}login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
