"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CalendarGrid from "../Components/CalendarGrid";
import { format, addMonths } from "date-fns";
import { fetchDataEvents } from "../Services/fetchDataEvents";
import styles from "../page.module.css";
import { dataEvents } from "../Types/dataEvents";

const Calendar: React.FC = () => {
  const [dataEvents, setDataEvents] = useState<dataEvents[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0));

  useEffect(() => {
    const fetchNewData = async () => {
      const newData = await fetchDataEvents();
      setDataEvents(newData);
      setIsLoading(false);
    };
    fetchNewData();
  }, [currentDate]);
  const handlePrevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <Image
          src="/playstation.png"
          alt="Loading"
          width={100}
          height={100}
          className={styles.loadingImage}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.monthHeader}>
        <div className={styles.navButtonContainer}>
          <button onClick={handlePrevMonth} className={styles.navButton}>
            {"<"}
          </button>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{format(currentDate, "MMMM yyyy")}</h1>
        </div>
        <div className={styles.navButtonContainer}>
          <button onClick={handleNextMonth} className={styles.navButton}>
            {">"}
          </button>
        </div>
      </div>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div key={day} className={styles.dayOfWeek}>
              {day}
            </div>
          ))}
        </div>
        <CalendarGrid
          year={currentDate.getFullYear()}
          month={currentDate.getMonth()}
          dataEvents={dataEvents}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Calendar;
