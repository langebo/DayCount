import { NextPage } from "next";
import { useState } from "react";

import DayRangePicker, { DayRange } from "~/components/dayrangepicker";

const Between: NextPage = () => {
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    startDay: new Date(),
  });
  return (
    <>
      <DayRangePicker
        {...{
          ...selectedDayRange,
          onRangeChange: (r) => setSelectedDayRange(r),
        }}
      />
    </>
  );
};

export default Between;
