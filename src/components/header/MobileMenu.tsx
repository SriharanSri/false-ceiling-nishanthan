import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
      <Menu className="h-6 w-6 text-gray-600" />
    </button>
  );
};

export default MobileMenu;
