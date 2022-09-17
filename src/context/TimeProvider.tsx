import { TimeContext } from './TimeContext'
import { useState } from 'react';

type Props = {
    children: JSX.Element
}

export const TimeProvider = ({ children }: Props) => {

    console.log('TimeProvider Callled')
    const [timeSelected, setTimeSelected] = useState<number>(900);
    const [hasInitiatedTimer, setHasInitiatedTimer] = useState<boolean>(false)
    const [timeSpent, setTimeSpent] = useState<number>(0)
    
    return (
        <TimeContext.Provider value={{
            timeSelected,
            setTimeSelected,
            hasInitiatedTimer,
            setHasInitiatedTimer,
            timeSpent,
            setTimeSpent
        }}>
            {children}
        </TimeContext.Provider>
    )
}
