'use client'

import { getIftarAndSuhoorTime } from "@/utils/ramadanTimer";
import { TypographyH2, TypographyH3 } from "../ui/typography/typography"
import { BadgeYear } from "../ui/badges";

export const TodayWidget = () => {
    const { iftarTime, suhoorTime, day, month, year } = getIftarAndSuhoorTime();

    return (
        <div className="grid auto-rows-min gap-4 ">
            <div className="bg-muted/50 min-h-[40vh] flex flex-col items-center justify-center rounded-xl gap-8" >
                <TypographyH2 text={"Today"} />
                <div className="flex justify-between items-center gap-8">
                    <div className="flex-1 text-center p-6 border-2 rounded-md">
                        <TypographyH3 text={"Suhoor"} />
                        <span className="mt-6 block text-3xl font-mono font-semibold dark:text-white text-black md:text-5xl lg:text-7xl transition-colors duration-500">{suhoorTime}</span>
                    </div>
                    <div className="flex-1 text-center p-6 border-2 rounded-md">
                        <TypographyH3 text={"Iftar"} />
                        <span className="mt-6 block text-3xl font-mono font-semibold dark:text-white text-black md:text-5xl lg:text-7xl transition-colors duration-500">{iftarTime}</span>
                    </div>
                </div>
                <BadgeYear day={day} month={month} year={year} />
            </div>

        </div>
    )

}