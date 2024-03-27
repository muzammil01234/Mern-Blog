import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      let username = resultsFromGoogle.user.displayName;
      let email = resultsFromGoogle.user.email;
      let photoURL = resultsFromGoogle.user.photoURL;

      let response = await axios.post("/api/auth/google", {
        username,
        email,
        photoURL,
      });
      if (response.data["_id"]) {
        dispatch(signInSuccess(response.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="w-full mt-5"
      gradientDuoTone="greenToBlue"
      outline
      onClick={handleClick}
    >
      <div className="flex items-center justify-center ">
        <AiFillGoogleCircle className="w-6 h-6 mr-2" />
        <p className="text-sm"> Continue with Google</p>
      </div>
    </Button>
  );
}
