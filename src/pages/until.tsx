import { NextPage } from "next";
import { useState } from "react";
import DayPicker from "~/components/daypicker";

const Until: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <>
      <DayPicker day={selectedDay} onDayChanged={setSelectedDay} />
    </>
  );
};

export default Until;
