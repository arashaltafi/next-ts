"use client"

import React, { useState } from "react";
import { Calendar, CalendarProvider, DatePicker, TimePicker } from "zaman";
import './style.css'

// npm i zaman
const Calendar2 = () => {
    const [view, setView] = useState<string>("cal");
    const [calendarValue, setCalendarValue] = useState(new Date());

    return (
        <div dir="rtl" className="w-full min-h-screen flex flex-col items-center justify-start gap-16">
            <h1>Calendar Zaman</h1>
            <section className="wrapper">
                <div className="tab">
                    <div
                        className={`tabItem tabItem${view === "cal" ? "--selected" : ""}`}
                        onClick={() => setView("cal")}
                    >
                        Calendar
                    </div>
                    <div
                        className={`tabItem tabItem${view === "day" ? "--selected" : ""}`}
                        onClick={() => setView("day")}
                    >
                        Date picker
                    </div>
                    <div
                        className={`tabItem tabItem${view === "time" ? "--selected" : ""}`}
                        onClick={() => setView("time")}
                    >
                        Time picker
                    </div>
                </div>
                {view === "cal" ? (
                    <div className="libWrapper">
                        <CalendarProvider locale="fa" round="x2">
                            <Calendar
                                defaultValue={calendarValue}
                                onChange={({ value }) => setCalendarValue(value)}
                                weekends={[6]}
                            />
                        </CalendarProvider>
                        <CalendarProvider locale="fa" round="x4" accentColor="#6374ae">
                            <Calendar
                                defaultValue={new Date()}
                                onChange={(e) => console.log(e)}
                                weekends={[6]}
                                from={new Date()}
                                to={new Date().setDate(new Date().getDate() + 3)}
                                range
                            />
                        </CalendarProvider>
                    </div>
                ) : null}
                {view === "day" ? (
                    <div className="libWrapper">
                        <DatePicker
                            round="x4"
                            position="center"
                            onChange={(e) => console.log(e)}
                        />
                        <DatePicker
                            round="x2"
                            accentColor="#6374ae"
                            range
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                ) : null}
                {view === "time" ? (
                    <div className="libWrapper">
                        <TimePicker
                            accentColor="#6374ae"
                            onChange={(py) => console.log(py)}
                        />
                    </div>
                ) : null}
            </section>
        </div>
    )
}


export default Calendar2