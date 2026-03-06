import React from "react";
import { useOutlet } from "react-router";

const LandingPageLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">{outlet}</div>
    </div>
  );
};

export default LandingPageLayout;
