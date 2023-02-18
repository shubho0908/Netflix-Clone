import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);

const Browsepage = () => {
  return (
    <>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        SignOut
      </button>
    </>
  );
};

export default Browsepage;
