import React from "react";
import { Navbar } from "@/components/ui";

interface LayoutProps {
  children: React.ReactNode;
}

const SmartCourseLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">{children}</div>
    </div>
  );
};

export default SmartCourseLayout;
