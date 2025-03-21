'use client';

import * as React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameDay } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Triangle from '../../../../public/icons/triangle.svg';
import { customUk } from '../../shared/utils/customUk'

interface CalendarEvent {
  date: Date;
  title: string;
  color: 'green' | 'orange' | 'purple';
}

interface CustomDayProps {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isOutside: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  events?: CalendarEvent[];
}

function CustomDay(props: CustomDayProps) {
  const { date, isSelected, isToday, isOutside, events, onClick } = props;
  const dayEvents = events?.filter((ev) => isSameDay(ev.date, date)) || [];

  const dayClasses = [
    'relative font-base pt-[10px] px-[7px] pb-[7px] m-[5px] inline-flex items-center justify-center h-[94px] w-[94px] rounded-md text-sm font-normal bg-[#F9F9F9]',
    isSelected && 'ring-2 ring-cSun',
    isToday && 'ring-2 ring-cLime',
    isOutside && 'opacity-0'
  ]
    .filter(Boolean)
    .join(' ');

  const eventsToShow = dayEvents.length > 2 ? dayEvents.slice(0, 2) : dayEvents;
  const extraEventsCount = dayEvents.length > 2 ? dayEvents.length - 2 : 0;

  return (
    <div className={dayClasses}>
      <button
        type="button"
        onClick={onClick}
        className={`absolute top-[10px] left-[7px] ${isSelected || isToday ? 'font-bold' : ''}`}
      >
        {date.getDate()}
      </button>
      {!isOutside && dayEvents.length > 0 && (
        <div className="flex flex-col justify-end gap-1.5 w-full h-full">
          {eventsToShow.map((event, i) => (
            <span
              key={i}
              className={[
                'text-tiny font-light rounded px-[3px] h-[15px] w-full text-cBlack flex items-center',
                event.color === 'green' && 'bg-green-600',
                event.color === 'orange' && 'bg-orange-500',
                event.color === 'purple' && 'bg-purple-500'
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {event.title}
            </span>
          ))}
          {extraEventsCount > 0 && (
            <span
              className="text-tiny font-light rounded px-[3px] h-[15px] w-full text-cBlack flex items-center bg-white border border-gray-300"
            >
              <span className="text-gray-500 mr-1">•</span>
              {extraEventsCount === 1 ? 'Подія' : `Ще ${extraEventsCount} події...`}
            </span>
          )}
        </div>
      )}
    </div>
  );
}


function formatWeekday(date: Date, options: { locale: Locale }) {
  const shortName = new Intl.DateTimeFormat(
    (options.locale as any).code || 'uk',
    { weekday: 'short' }
  ).format(date);

  return shortName.charAt(0).toUpperCase() + shortName.slice(1);
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const eventsData: CalendarEvent[] = [
  { date: new Date(currentYear, 2, 1), title: 'Новая падзея', color: 'orange' },
  { date: new Date(currentYear, 2, 1), title: 'Яшчэ 2 падзеі', color: 'purple' },
  { date: new Date(currentYear, 2, 3), title: 'Новая падзея', color: 'green' },
  { date: new Date(currentYear, 2, 19), title: 'Новая падзея', color: 'orange' }
];

const monthsList = [
  { label: 'Січ', index: 0 },
  { label: 'Лют', index: 1 },
  { label: 'Бер', index: 2 },
  { label: 'Кві', index: 3 },
  { label: 'Тра', index: 4 },
  { label: 'Чер', index: 5 },
  { label: 'Лип', index: 6 },
  { label: 'Сер', index: 7 },
  { label: 'Вер', index: 8 },
  { label: 'Жов', index: 9 },
  { label: 'Лис', index: 10 },
  { label: 'Гру', index: 11 }
];

export default function CalendarPage() {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const currentDate = new Date(selectedYear, selectedMonth, 1);
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  return (
    <div className="flex">
      <aside className="w-[77px] font-base">
        <h2 className="text-large text-cBlack/50 font-bold mb-[27px]">{selectedYear}</h2>
        <div className="relative flex flex-col space-y-[27px] font-bold">
          {monthsList.map((m) => (
            <button
              key={m.index}
              onClick={() => setSelectedMonth(m.index)}
              className={`flex items-center text-left ${
                m.index === selectedMonth
                  ? 'font-bold text-cBlack text-large'
                  : 'text-cBlack/50 text-regular'
              }`}
            >
              {m.index === selectedMonth && (
                <Triangle className="absolute -translate-x-[17px] object-contain" />
              )}
              {m.label}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          month={currentDate}
          onMonthChange={(newMonth) => {
            setSelectedYear(newMonth.getFullYear());
            setSelectedMonth(newMonth.getMonth());
          }}
          locale={customUk}
          showOutsideDays
          // @ts-ignore:
          formatWeekday={formatWeekday}
          components={{
            DayContent: (dayProps) => {
              const { date } = dayProps;
              const isSelected = selected ? isSameDay(date, selected) : false;
              const isToday = isSameDay(date, new Date());
              const isOutside = date.getMonth() !== selectedMonth;
              return (
                <CustomDay
                  date={date}
                  isSelected={isSelected}
                  isToday={isToday}
                  isOutside={isOutside}
                  events={eventsData}
                  onClick={() => setSelected(date)}
                />
              );
            },
            Caption: () => null
          }}
          classNames={{
            root: '!p-0 !m-0',
            table: '!table-fixed',
            head: '',
            head_row: '',
            head_cell:
              '!text-regular !font-bold pb-[30px] text-top font-semibold !text-cBlack/30 text-sm !h-[30px]',
            day: 'transition-colors',
            cell: '',
            button: ''
          }}
        />
      </main>
    </div>
  );
}
