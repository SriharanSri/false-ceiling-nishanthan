import React from "react";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-gray-600 mb-8">
      {/* <Home size={16} />
      <span>Home</span>
      <ChevronRight size={16} />
      <span>Design Ideas</span>
      <ChevronRight size={16} /> */}
      <span className="text-blue-600">False Ceiling Designs</span>
    </div>
  );
};

export default Breadcrumb;
