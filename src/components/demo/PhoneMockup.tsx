import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  floating?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, floating = true }) => (
  <div className={`phone-frame mx-auto ${floating ? "animate-float" : ""}`}>
    <div className="phone-notch" />
    <div className="px-3 pb-2 min-h-[320px]">
      {children}
    </div>
    <div className="phone-home-bar" />
  </div>
);

export default PhoneMockup;
