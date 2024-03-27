import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import {
  signInStart,
  siginFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({});
  const { loading, error: errMessage } = useSelector((state) => state.user);
  const handleformdata = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    let response = await axios.post("api/auth/signin", formdata);
    console.log(response);
    if (response.data.statuscode != 200) {
      dispatch(siginFailure(response.data.message));
    }

    if (response.data["_id"]) {
      dispatch(signInSuccess(response.data));
      navigate("/");
    }
  };
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col mt-20 p-3 md:flex-row  md:items-center max-w-3xl mx-auto gap-3 ">
        <div className="flex-1">
          <Link
            to="/"
            className="whitespace-nowrap text-3xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Muzzu's
            </span>
            Blog
          </Link>
          <p className=" text-sm mt-3">
            This is my Blog Project.Please sign in to access the home page
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={handleformdata}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={handleformdata}
              ></TextInput>
            </div>
          </form>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            gradientDuoTone="purpleToPink"
            className="mt-4 w-full"
          >
            {loading ? (
              <>
                <Spinner />
                <span>Loading...</span>
              </>
            ) : (
              "SignIn"
            )}
          </Button>
          <OAuth />
          <div className="mt-4">
            <span className="text-sm">Donot have an account? </span>
            <Link className=" text-teal-500  text-md" to="/signup">
              SignUp
            </Link>
            {errMessage && (
              <Alert className="mt-5 " color="red">
                {errMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
