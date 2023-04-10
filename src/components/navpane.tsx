import { FC } from "react";
import { useRouter } from "next/router";
import ModeSelector, { Mode } from "./modeselector";

const NavPane: FC = () => {
  const router = useRouter();

  const handleModeChange = (mode: Mode) => {
    router.push(`/${mode}`);
  };

  return (
    <>
      <span className="whitespace-nowrap pr-2 text-3xl text-gray-400">
        days
      </span>
      <ModeSelector onModeChange={handleModeChange} />
    </>
  );
};

export default NavPane;
