import { useEffect, useState } from "react";
import useInterval from './useInterval'

export function useCounter(delay) {
    const [value, setValue] = useState(0)
    // First way
    // useEffect(() => {
    //     const id = setInterval(() => {
    //       setValue(val => val + 1);
    //     }, delay);
    //     return () => clearInterval(id);
    // }, [delay]);

    // Second way
    useInterval(() => setValue(c => c + 1), delay)

    return value
}