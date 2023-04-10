import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface DayPickerProps {
  day: Date;
  onDayChanged: (d: Date) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({ day, onDayChanged }) => {
  const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    _ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        {...props}
        className="m-0 w-40 border-b-2 border-blue-400 p-0 text-3xl text-blue-400 focus:border-blue-400 focus:outline-none"
      />
    );
  };

  return (
    <DatePicker
      selected={day}
      onChange={onDayChanged}
      minDate={new Date()}
      dateFormat="dd.MM.yyyy"
      className="m-0 p-0"
      customInput={React.createElement(React.forwardRef(CustomInput))}
    />
  );
};

export default DayPicker;
