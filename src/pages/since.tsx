import { NextPage } from "next";
import { useState } from "react";
import DayPicker from "~/components/daypicker";

const Since: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <>
      <DayPicker day={selectedDay} onDayChanged={setSelectedDay} />
    </>
  );
};

export default Since;
