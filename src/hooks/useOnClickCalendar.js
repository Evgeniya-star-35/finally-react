import { useEffect } from 'react';

export default function useOnClickCalendar(ref, handler) {
    useEffect(() => {
        const clicker = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', clicker);
        document.addEventListener('touchstart', clicker);
        return () => {
            document.removeEventListener('mousedown', clicker);
            document.removeEventListener('touchstart', clicker);
        };
    }, [ref, handler]);
}
