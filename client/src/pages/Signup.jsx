import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({});
  const [errMessage, seterrMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleformdata = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
    seterrMessage(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await axios.post("api/auth/signup", formdata);
    console.log(response);
    if (response.data.statuscode == 500) {
      seterrMessage(response.data.message);
    }
    setLoading(false);
    if (response.data["_id"]) {
      navigate("/signin");
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
            This is my Blog Project.To access you can register using form or
            Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Enter your name"
                id="username"
                onChange={handleformdata}
              ></TextInput>
            </div>
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
              "SignUp"
            )}
          </Button>
          <div className="mt-4">
            <span className="text-sm">Already have an account? </span>
            <Link className=" text-teal-500  text-md" to="/signin">
              Signin
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
