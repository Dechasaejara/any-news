import { useState, useRef, useEffect } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const timerRef = useRef<NodeJS.Timeout
        | null>(null);

    useEffect(() => {
        clearTimeout(timerRef.current as NodeJS.Timeout);
        timerRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    }, [value, delay]);

    return debouncedValue;
};