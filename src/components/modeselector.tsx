import { useRouter } from "next/router";
import { FC } from "react";
import Select from "react-select";

export enum Mode {
  Until = "until",
  Since = "since",
  Between = "between",
}

export interface ModeSelectorProps {
  onModeChange: (mode: Mode) => void;
}

const ModeSelector: FC<ModeSelectorProps> = ({ onModeChange }) => {
  const router = useRouter();

  const modeOptions = [
    { value: Mode.Until, label: Mode.Until },
    { value: Mode.Since, label: Mode.Since },
    { value: Mode.Between, label: Mode.Between },
  ];

  const getCurrentMode = () => {
    var routeValue = router.route.replace(/^\/+/, "");
    return modeOptions.find((m) => m.value === routeValue) ?? modeOptions[0];
  };

  return (
    <Select
      instanceId="mode-selector"
      options={modeOptions}
      defaultValue={getCurrentMode()}
      onChange={(x, _) => onModeChange(x!.value!)}
      unstyled
      classNames={{
        control: () => "border-b-2 border-purple-400 text-gray-400",
        singleValue: () => "text-purple-400",
        indicatorsContainer: () => "text-purple-400",
        menuList: () => "w-36 py-2 m-0",
      }}
      className="w-auto text-3xl text-gray-400"
      classNamePrefix="select"
    />
  );
};

export default ModeSelector;
