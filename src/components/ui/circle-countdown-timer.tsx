"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRamadanStore } from "@/store/store";
import { calculateRamadanTime, getIftarAndSuhoorTime } from "@/utils/ramadanTimer";
import { useRamadanCountdown } from "../hooks/useRamadanCountdown";
import { useResponsiveSize } from "../hooks/useResponsiveSize";

export default function MyCountdownTimer() {
    const setRamadanTime = useRamadanStore((state) => state.setRamadanTime);
    const setRamadanDay = useRamadanStore((state) => state.setRamadanDay);

    const duration = useRamadanCountdown()
    const size = useResponsiveSize()

    useEffect(() => {
        const { ramadanDay } = getIftarAndSuhoorTime()
        setRamadanDay({ ramadanDay })
        setRamadanTime(calculateRamadanTime())
    }, [setRamadanDay, setRamadanTime])


    if (duration === 0) return null

    return (
        <CountdownCircleTimer
            isPlaying
            duration={duration}
            colors={["#22c55e", "#22c55e", "#22c55e"]}
            colorsTime={[duration, duration]}
            onComplete={() => {
                setRamadanTime(calculateRamadanTime());
            }}
            size={size}
            strokeWidth={8}
        >
            {({ remainingTime }) => {
                const minuteProgress = remainingTime % 60 || 60;
                return (
                    <CountdownCircleTimer
                        key={Math.floor(remainingTime / 60)} // ⭐ reset каждые 60 сек
                        isPlaying
                        duration={60}
                        initialRemainingTime={minuteProgress}
                        colors={["#22c55e", "#22c55e", "#22c55e"]}
                        colorsTime={[duration, duration]}
                        size={size}
                        strokeWidth={8}
                    >
                        {() => (
                            <TimeRenderer remainingTime={remainingTime} />
                        )}
                    </CountdownCircleTimer>
                );
            }}
        </CountdownCircleTimer>
    );

}

function TimeRenderer({ remainingTime }: { remainingTime: number }) {

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
        <div className="flex justify-between items-center">
            <TimeStyleItem number={hours} label="Hours" />
            <TimeStyleItem number={minutes} label="Minutes" />
            <TimeStyleItem number={seconds} label="Seconds" />
        </div >
    );
}


interface TimeStyleItemProps {
    number: number
    label: string
}
const TimeStyleItem = ({ number, label }: TimeStyleItemProps) => (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 px-3 py-6 md:gap-2 md:py-8">
        <div className="h-px w-full  mt-2"></div>
        <div className="relative w-full overflow-hidden text-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={number}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="block text-3xl font-mono font-semibold dark:text-white text-black md:text-5xl lg:text-7xl transition-colors duration-500"
                >
                    {number < 10 ? `0${number}` : number}
                </motion.span>
            </AnimatePresence>
        </div>
        <span className="text-sm font-light dark:text-gray-400 text-gray-500 md:text-base lg:text-lg transition-colors duration-500">
            {label}
        </span>
        <div className="h-px w-full bg-border mt-2"></div>
    </div>
)



