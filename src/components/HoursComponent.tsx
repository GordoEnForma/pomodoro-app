import { useEffect, useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

type Props  = {
    timeInSeconds: number;
}

export const HoursComponent = ({timeInSeconds}:Props) => {
   
  
   
    console.log('timeInSeconds : ', timeInSeconds)
    return (
        <>
            {
            
            //hours
            `${Math.floor(timeInSeconds / 3600) < 10 
            ? `0${Math.floor(timeInSeconds / 3600)}` 
            : `${Math.floor(timeInSeconds / 3600)}`} : ` 
            }
            {
            //Minutes
            `${Math.floor((timeInSeconds % 3600)/60) < 10
                ? `0${Math.floor((timeInSeconds % 3600)/60)}`
                : `${Math.floor((timeInSeconds % 3600)/60)}`
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
