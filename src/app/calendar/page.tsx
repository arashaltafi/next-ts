"use client"

import { useRef, useState } from 'react'
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const page = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [value1, setValue1] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value2, setValue2] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value3, setValue3] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value4, setValue4] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value5, setValue5] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [date, setDate] = useState(new DateObject({ calendar: persian, locale: persian_fa }));

  const datePickerRef = useRef(null);
  const calendarRef = useRef(null);

  const handleChange = (value: DateObject) => {
    console.log(value.calendar)
    setValue(value.toDate())
  }

  const update = (key: any, value: any) => {
    const date = calendarRef.current.date;

    calendarRef.current.set(key, date[key] + value);

    setDate(new DateObject(date));
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-12'>
      <DatePicker
        ref={datePickerRef}
        placeholder="تاریخ را انتخاب کنید"
        style={{
          backgroundColor: "red",
          padding: '24px 32px',
          textAlign: 'center'
        }}
        arrow={true}
        scrollSensitive
        hideOnScroll
        editable
        onlyShowInRangeDates
        value={value}
        onChange={handleChange}
        locale={persian_fa}
        calendar={persian}
      />

      <h2 className='mt-64'>Calendar Sample Basic</h2>
      <p>Date Selected: {value1.toString()}</p>
      <Calendar
        value={value1}
        calendar={persian}
        locale={persian_fa}
        onChange={(value: DateObject) => setValue1(value)}
      />

      <span className='w-[90%] h-px bg-white mt-12' />

      <h2 className='mt-32'>Calendar Sample Range</h2>
      <p>Date Selected: {value2.toString()}</p>
      <Calendar
        value={value2}
        calendar={persian}
        locale={persian_fa}
        range
        rangeHover
        buttons={true}
        formatMonth={(month) => {
          return "ماه " + month;
        }}
        formatYear={(year) => {
          return "سال " + year;
        }}
        monthYearSeparator="|"
        onChange={(value: DateObject) => setValue2(value)}
      />

      <span className='w-[90%] h-px bg-white mt-12' />


      <h2 className='mt-32'>Calendar Sample ReadOnly</h2>
      <p>Date Selected: {value3.toString()}</p>
      <Calendar
        className='select-none'
        value={value3}
        calendar={persian}
        locale={persian_fa}
        readOnly
        onChange={(value: DateObject) => setValue3(value)}
      />


      <span className='w-[90%] h-px bg-white mt-12' />


      <h2 className='mt-32'>Calendar Sample Full</h2>
      <p>Date Selected: {value4.toString()}</p>
      <Calendar
        value={value4}
        range={false}
        readOnly={false}
        fullYear
        showOtherDays
        calendar={persian}
        locale={persian_fa}
        onChange={(value: DateObject) => setValue4(value)}
      />


      <span className='w-[90%] h-px bg-white mt-12' />


      <h2 className='mt-32'>Calendar Sample Both</h2>
      <p>Date Selected: {value5.toString()}</p>
      <Calendar
        numberOfMonths={2}
        showOtherDays
        multiple
        ref={calendarRef}
        buttons={true}
        formatMonth={(month, year) => {
          return "ماه " + month;
        }}
        formatYear={(year, month) => {
          return "سال " + year;
        }}
        monthYearSeparator="|"
        value={[
          new DateObject({ calendar: persian }).toFirstOfWeek(),
          new DateObject({ calendar: persian }).toLastOfWeek(),
        ]}
        hideWeekDays={false}
        hideMonth={false}
        hideYear={false}
        disableMonthPicker={false}
        disableYearPicker={false}
        calendar={persian}
        locale={persian_fa}
        onChange={(value: DateObject) => setValue5(value)}
      />

      <span className='w-[90%] h-px bg-white mt-12' />

      <DatePicker
        className="rmdp-mobile"
        mobileLabels={{
          OK: "تایید",
          CANCEL: "لغو",
        }}

        mobileButtons={[
          {
            label: "ریست",
            className: "rmdp-button rmdp-action-button",
            onClick: () => setValue(new Date()),
          },
        ]}
        calendar={persian}
        locale={persian_fa}
        value={value}
        calendarPosition="bottom-right"
      />

      <div className='w-full flex flex-row items-center justify-center gap-8'>
        <button
          className='bg-green-500 px-4 py-2 rounded-md'
          onClick={() => datePickerRef.current && datePickerRef.current.openCalendar()}
        >
          باز کردن
        </button>

        <button
          className='bg-red-500 px-4 py-2 rounded-md'
          onClick={() => datePickerRef?.current.closeCalendar()}
        >
          بستن
        </button>
      </div>

      <div className='w-full flex flex-row-reverse items-center justify-center gap-8'>
        <button className='bg-green-500 px-4 py-2 rounded-md' onClick={() => update("month", 1)}>+</button>
        <span className='min-w-36 text-center'>{date.month.name}</span>
        <button className='bg-red-500 px-4 py-2 rounded-md' onClick={() => update("month", -1)}>-</button>
      </div>

      <div className='w-full flex flex-row-reverse items-center justify-center gap-8'>
        <button className='bg-green-500 px-4 py-2 rounded-md' onClick={() => update("year", 1)}>+</button>
        <span className='min-w-36 text-center'>{date.year}</span>
        <button className='bg-red-500 px-4 py-2 rounded-md' onClick={() => update("year", -1)}>-</button>
      </div>
    </div>
  )
}

export default page 