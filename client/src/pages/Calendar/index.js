import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

function CalendarPage() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'timeGridDay,dayGridMonth,timeGridWeek,',
            }}
            eventContent={renderEventContent}
            events={[
                {
                    title: 'event',
                    date: '2020-10-29',
                    end: '2020-10-30',
                    timeText: '11-12 AM URGENT MEETING',
                },
            ]}
        />
    );
}

export default CalendarPage;
