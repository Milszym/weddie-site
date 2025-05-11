
import * as i18next from 'i18next';

export const MainConfig = {
    marriageDate: new Date(2025, 6, 12, 16, 30, 0, 0),
    title: {
        hour: '16:30',
        exactStartDate: '2025-07-12T16:30:00',
        exactEndDate: '2025-07-13T03:00:00',
        calendarEventTitle: i18next.t('title.calendarEventTitle'),
        calendarEventDescription: i18next.t('title.calendarEventDescription'),
        calendarEventLocation: 'Zielona Brama, Przywidz',
    },
    location: {
        address: 'Zielona Brama, Przywidz',
        url: 'https://zielonabrama.com.pl/',
        mapUrl: 'https://maps.app.goo.gl/TCPSt38Gr9c77hmf9',
    },
    rsvp: {
        firstPhoneNumber: '880 491 301',
        secondPhoneNumber: '665 123 549'
    }
}