import { Paintbrush2Icon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Paintbrush2Icon className="h-8 w-8 text-blue-600" />
      <span className="text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
        Mithran False Ceiling
      </span>
    </div>
  );
};

export default Logo;
