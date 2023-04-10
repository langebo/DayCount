import React from "react";
import { FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface DayRange {
  startDay?: Date;
  endDay?: Date;
}

export interface DayRangePickerProps extends DayRange {
  onRangeChange: (r: DayRange) => void;
}

const DayRangePicker: FC<DayRangePickerProps> = ({
  startDay,
  endDay,
  onRangeChange,
}) => {
  const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    _ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        {...props}
        className="m-0 border-b-2 border-blue-400 p-0 text-3xl text-blue-400 focus:border-blue-400 focus:outline-none"
        style={{ width: "21rem" }}
      />
    );
  };

  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    console.log("start", start);
    console.log("end", end);
    const updatedRange = {
      startDay: start ?? undefined,
      endDay: end ?? undefined,
    };
    onRangeChange(updatedRange);
  };

  return (
    <DatePicker
      startDate={startDay}
      endDate={endDay}
      onChange={handleRangeChange}
      selectsRange
      dateFormat="dd.MM.yyyy"
      className="m-0 p-0"
      customInput={React.createElement(React.forwardRef(CustomInput))}
    />
  );
};

export default DayRangePicker;
