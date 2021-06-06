import React from "react";
import Button from "../components/Button";

const Header = () => {
  return (
    <div className="absolute w-full flex flex-row justify-between items-center py-6 px-10 font-body text-lg font-bold">
      <div className="text-2xl font-extrabold tracking-tighter">Readizer</div>
      {/* <div className="flex flex-row justify-between items-center">
        <Button title="Log In" type="primary" />
        <Button title="Register" />
      </div> */}
    </div>
  );
};

export default Header;
