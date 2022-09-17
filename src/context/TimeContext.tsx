import { createContext } from "react";

type Props = {
    timeSelected: number;
    setTimeSelected: (value: number) => void;
    hasInitiatedTimer: boolean;
    setHasInitiatedTimer: (value: boolean) => void;
    timeSpent: number;
    setTimeSpent: (value: number) => void;
}
export const TimeContext = createContext<Props>({
    timeSelected: 900,
    setTimeSelected: () => { },
    hasInitiatedTimer: false,
    setHasInitiatedTimer: () => { },
    timeSpent: 0,
    setTimeSpent: () => {},
});
