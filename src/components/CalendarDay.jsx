import React from 'react';

const CalendarDay = ({ day, onClick = () => {} }) => {
  const date = day?.date || new Date();
  const isToday = date.toDateString() === new Date().toDateString();
  const hasTours = day?.tours?.length > 0;

  const dayClassName = `day${isToday ? ' today' : ''}${hasTours ? ' available' : ''}`;

  return (
    <div className={dayClassName} onClick={() => onClick(day)}>
      {date.getDate()}
    </div>
  );
};

export default CalendarDay;
