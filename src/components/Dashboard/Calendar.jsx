import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from "date-fns/locale";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: "Team Meeting",
      start: new Date(2025, 10, 6, 10, 0),
      end: new Date(2025, 10, 6, 11, 0),
    },
    {
      title: "Client Call",
      start: new Date(2025, 10, 8, 14, 0),
      end: new Date(2025, 10, 8, 15, 0),
    },
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Meet Calendar</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
          + Add Event
        </button>
      </div>

      <div className="h-[600px] rounded-lg overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          className="rbc-calendar"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
