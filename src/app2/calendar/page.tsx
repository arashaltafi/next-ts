"use client"

import { useRef, useState } from 'react'
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import TimePicker from 'react-multi-date-picker/plugins/time_picker'

//https://shahabyazdi.github.io/react-multi-date-picker/
const page = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [value1, setValue1] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value2, setValue2] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value3, setValue3] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value4, setValue4] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value5, setValue5] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value6, setValue6] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value7, setValue7] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value8, setValue8] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value9, setValue9] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
  const [value10, setValue10] = useState(new DateObject({ calendar: persian, locale: persian_fa }));
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

  const handleReset = () => {
    setDate(new DateObject({ calendar: persian, locale: persian_fa }))
    setValue6(new DateObject({ calendar: persian, locale: persian_fa }))
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-12'>
      <DatePicker
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
        minDate="1403/1/1"
        maxDate="1403/3/1"
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
        buttons={true}
        monthYearSeparator="|"
        // value={[
        //   new DateObject({ calendar: persian }).toFirstOfWeek(),
        //   new DateObject({ calendar: persian }).toLastOfWeek(),
        // ]}
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


      <h2 className='mt-32'>Calendar Sample Limitation</h2>
      <p>Date Selected: {value7.toString()}</p>
      <Calendar
        buttons={true}
        monthYearSeparator="|"
        minDate={"1403/1/1"}
        maxDate={"1403/1/20"}
        calendar={persian}
        locale={persian_fa}
        onChange={(value: DateObject) => setValue7(value)}
      />


      <span className='w-[90%] h-px bg-white mt-12' />


      <h2 className='mt-32'>DatePicker Sample Time</h2>
      <p>Month Selected: {value10.toString()}</p>
      <DatePicker
        disableDayPicker
        format="hh:mm:ss A"
        // format="hh:mm:ss"
        // format="HH:mm"
        plugins={[
          <TimePicker />
        ]}
        style={{
          color: 'black'
        }}
        calendar={persian}
        locale={persian_fa}
        className='text-black'
        value={value10}
        onChange={(value: DateObject) => setValue10(value)}
      />




      <span className='w-[90%] h-px bg-white mt-12' />



      <h2 className='mt-32'>DatePicker Sample Date And Time</h2>
      <p>Month Selected: {value9.toString()}</p>

      <DatePicker
        format="MM/DD/YYYY HH:mm:ss"
        plugins={[
          <TimePicker position="bottom" />
        ]}
        calendar={persian}
        locale={persian_fa}
        className='text-black'
        value={value9}
        onChange={(value: DateObject) => setValue9(value)}
      />




      <span className='w-[90%] h-px bg-white mt-12' />



      <h2 className='mt-32'>DatePicker Sample Month</h2>
      <p>Month Selected: {value8.toString()}</p>

      <DatePicker
        format="MMMM YYYY"
        onlyMonthPicker
        calendar={persian}
        locale={persian_fa}
        value={value8}
        onChange={(value: DateObject) => setValue8(value)}
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


      <span className='w-[90%] h-px bg-white mt-12' />



      <h2 className='mt-32'>Calendar Sample Controller</h2>
      <p>Date Selected: {value6.toString()}</p>
      <Calendar
        value={value6}
        ref={calendarRef}
        calendar={persian}
        locale={persian_fa}
        onChange={(value: DateObject) => setValue6(value)}
      />

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

      <button
        className='bg-red-500 px-4 py-2 rounded-md'
        onClick={handleReset}>
        ریست
      </button>


      <span className='w-[90%] h-px bg-white mt-12' />



      <div className='w-full flex flex-row items-center justify-between gap-8'>
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

      <DatePicker
        ref={datePickerRef}
        placeholder="تاریخ را انتخاب کنید"
        style={{
          backgroundColor: "red",
          padding: '24px 32px',
          textAlign: 'center',
          margin: '24px'
        }}
        arrow={true}
        scrollSensitive
        value={value}
        onChange={handleChange}
        locale={persian_fa}
        calendar={persian}
      />

    </div >
  )
}

export default page 