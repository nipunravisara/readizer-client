import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <main className="container mx-auto px-8 md:px-14 lg:px-64 h-full">
      {children}
    </main>
  );
};

export default LandingLayout;
