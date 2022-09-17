import  { useEffect } from 'react';

type Props  = {
    timeInSeconds: number,
    displayHours?:boolean,
}

export const HoursComponent = ({timeInSeconds, displayHours= false}:Props) => {
    let hours = timeInSeconds / 3600;
    let minutes = timeInSeconds / 60;
    let seconds =  timeInSeconds % 60;

    // console.table({
    //     hours,
    //     minutes,
    //     seconds
    // })
    console.log('timeInSeconds : ', timeInSeconds)
    return (
        <>
            {
            
            //hours
            `${Math.floor(timeInSeconds / 3600) < 10 
            ? `0${Math.floor(timeInSeconds / 3600)}` 
            : `${Math.floor(timeInSeconds / 3600)}`} :` 
            

            
            }
            {
            //Minutes
            `${Math.floor(timeInSeconds / 60) < 10
            ? `0${Math.floor((timeInSeconds / 60))}`
            : `${Math.floor(timeInSeconds /60)}`
        }
            :
            ${
            //seconds    
            timeInSeconds % 60 < 10 
            ? `0${timeInSeconds % 60}` 
            : timeInSeconds % 60}`}
        </>
    )
}
