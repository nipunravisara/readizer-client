import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "react-modal";

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <div className="absolute w-full flex flex-row justify-between items-center py-6 px-10 font-body text-lg font-bold">
        <div className="text-2xl font-extrabold tracking-tighter">Readizer</div>
        <div className="flex flex-row justify-between items-center">
          <Button
            title="Log In"
            type="primary"
            onClick={() => setIsModelOpen(!isModelOpen)}
          />
          <Button title="Register" />
        </div>
      </div>
      <Modal
        isOpen={isModelOpen}
        onRequestClose={() => setIsModelOpen(!isModelOpen)}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <Button
          title="close"
          type="primary"
          onClick={() => setIsModelOpen(!isModelOpen)}
        />
      </Modal>
    </>
  );
};

export default Header;
