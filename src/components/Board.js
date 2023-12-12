import MediaCard from './Card';
import Grid from '@mui/material/Grid';

import user from '../assets/images/user.svg';
import calendar from '../assets/images/calendar.svg';
import admin from '../assets/images/admin.svg';

import userIcon from '../assets/icons/user-icon.svg';
import calendarIcon from '../assets/icons/calendar-icon.svg';
import adminIcon from '../assets/icons/admin-icon.svg';

export default function Board({ locale }) {

    const cards = [
        {
            id: 1,
            image: user,
            icon: userIcon,
        },
        {
            id: 2,
            image: admin,
            icon: adminIcon,
        },
        {
            id: 3,
            image: calendar,
            icon: calendarIcon,
        },
    ];

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                    <MediaCard {...card} key={locale} />
                </Grid>
            ))}

        </Grid>
    );
};

