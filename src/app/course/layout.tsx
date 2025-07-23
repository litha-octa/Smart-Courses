import React from "react";
import { Navbar } from "@/components/ui";

interface LayoutProps {
  children: React.ReactNode;
}

const SmartCourseLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F7F3]">{children}</div>
    </div>
  );
};

export default SmartCourseLayout;
