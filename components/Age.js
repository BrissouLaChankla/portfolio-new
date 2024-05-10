"use client"
import { useState, useEffect } from 'react';

const Age = () => {
    const birthdate = new Date('1998-05-04T08:24:25');

    const calculateAge = (birthdate) => {
        const now = new Date();
        const ageDiff = now - birthdate;
        let age = new Date(ageDiff);

        const years = Math.abs(age.getUTCFullYear() - 1970);
        const months = age.getUTCMonth();
        const days = age.getUTCDate() - 1;
        const hours = age.getUTCHours();
        const minutes = age.getUTCMinutes();
        const seconds = age.getUTCSeconds();

        return { years, months, days, hours, minutes, seconds };
    };

    const [age, setAge] = useState(calculateAge(birthdate));

    useEffect(() => {
        const timerId = setInterval(() => {
            setAge(calculateAge(birthdate));
        }, 1000);

        return () => clearInterval(timerId);
    }, []);


    return (
        <>
            <span>
                <span className="countdown">
                    <span style={{ "--value": age.years }}></span>
                </span>
                &nbsp;ans&nbsp;
            </span>
            <span>
                <span className="countdown">
                    <span style={{ "--value": age.months }}></span>
                </span>
                &nbsp;mois&nbsp;
            </span>
            <span>
                <span className="countdown">
                    <span style={{ "--value": age.days }}></span>
                </span>
                &nbsp;jours&nbsp;
            </span>
            <span>
                <span className="countdown">
                    <span style={{ "--value": age.hours }}></span>
                </span>heures&nbsp;
            </span>
            <span>
                <span className="countdown">
                    <span style={{ "--value": age.minutes }}></span>
                </span>
                &nbsp;min&nbsp;
            </span>
            <span>et&nbsp;
                <span className="countdown">
                    <span style={{ "--value": age.seconds }}></span>
                </span>
                s
            </span>
        </>
    );
};

export default Age;
