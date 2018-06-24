import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Summary from './summary.component';
import Location from './location.component';
import Calendar from './calendar.component';

class Chatbot extends Component {
    render() {
        return ( <
            ChatBot steps = {
                [{
                        id: '1',
                        message: 'Welcome to my hotel!',
                        trigger: 'minor-property'
                    }, {
                        id: 'minor-property',
                        user: true,
                        trigger: '3',
                    }, {
                        id: '3',
                        message: 'Please choose from these brands: ',
                        trigger: 'brand',
                    },
                    {
                        id: 'brand',
                        options: [{
                                value: 'anantara',
                                label: 'Anantara',
                                trigger: '5'
                            },
                            {
                                value: 'avani',
                                label: 'Avani',
                                trigger: '5'
                            },
                            {
                                value: 'tivoli',
                                label: 'Tivoli',
                                trigger: '5'
                            },
                            {
                                value: 'elewana',
                                label: 'Elewana',
                                trigger: '5'
                            },
                            {
                                value: 'other',
                                label: 'Other',
                                trigger: '5'
                            },
                        ],
                    },
                    {
                        id: '5',
                        message: 'You chose {previousValue}.',
                        trigger: '6'
                    },
                    {
                        id: '6',
                        message: 'Please choose a location!',
                        trigger: 'location',
                    },
                    {
                        id: 'location',
                        options: [{
                                value: 'dubai',
                                label: 'Dubai',
                                trigger: '8'
                            },
                            {
                                value: 'qatar',
                                label: 'Qatar',
                                trigger: '8'
                            },
                            {
                                value: 'maldieves',
                                label: 'Maldieves',
                                trigger: '8'
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                trigger: '8'
                            }
                        ],
                    },
                    {
                        id: '8',
                        component: <Location />,
                        trigger: 'calendar',
                    },
                    {
                        id: 'calendar',
                        component: <Calendar />,
                    }, {
                        id: 'date',
                        message: ({ previousValue }) => {
                            const dates = JSON.parse(previousValue);

                            const firstDate = new Date(dates[0]);
                            const secondDate = new Date(dates[1]);
                            const monthNames = [
                                "January", "February", "March",
                                "April", "May", "June", "July",
                                "August", "September", "October",
                                "November", "December"
                              ];
                            
                              const firstDateDay = firstDate.getDate();
                              const firstMonthIndex = firstDate.getMonth();
                              const firstYear = firstDate.getFullYear();
                            
                              const secondDateDay = secondDate.getDate();
                              const secondMonthIndex = secondDate.getMonth();
                              const secondYear = secondDate.getFullYear();

                             const firstFinalDate = firstDateDay + ' ' + monthNames[firstMonthIndex] + ' ' + firstYear;
                             const secondFinalDate = secondDateDay + ' ' + monthNames[secondMonthIndex] + ' ' + secondYear;
                            return `You chose ${firstFinalDate} until ${secondFinalDate}`;
                        },
                        trigger: '10'
                    },
                    {
                        id: '10',
                        message: 'Please select your room type: ',
                        trigger: 'room',
                    },
                    {
                        id: 'room',
                        options: [{
                                value: 'standard',
                                label: 'Standard',
                                trigger: '11'
                            },
                            {
                                value: 'honeymoon',
                                label: 'Honeymoon',
                                trigger: '11'
                            },
                            {
                                value: 'executive',
                                label: 'Executive',
                                trigger: '11'
                            }
                        ],
                    },
                    {
                        id: '11',
                        component: <Summary />,
                        end: true
                    },
                ]
            }
            />
        );
    }
}

export default Chatbot;