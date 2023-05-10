import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Calendar2 = ({ onDayPress }) => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
      }}
      theme={{
        backgroundColor: "#615e5e8b",
        calendarBackground: "#615e5e8b",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#1af025",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e",
      }}
      onDayPress={onDayPress}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
};

export default Calendar2;
