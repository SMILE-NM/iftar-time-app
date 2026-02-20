'use client'

import { MapPin } from "lucide-react"
import { Badge } from "../ui/badge"
import MyCountdownTimer from "../ui/circle-countdown-timer"
import { MainTitle } from "../ui/main-title"
import { BadgeRamadanDay } from "../ui/badges"
import { useRamadanStore } from "@/store/store"


const LOCATION = "Korea, Seoul"

export const TimeWidget = () => {
    const ramadanDay = useRamadanStore((state) => state.ramadanDay);

    return (
        <div className="bg-muted/50 min-h-[60vh] flex flex-col items-center justify-center rounded-xl" >
            <MainTitle />
            <div className="mt-8">
                <MyCountdownTimer />
            </div>
            <div className="mt-8">
                <Badge variant="outline">
                    <MapPin className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                    {LOCATION}
                </Badge>
            </div>
            <div className="mt-8">
                <BadgeRamadanDay ramadanDay={ramadanDay} />
            </div>
        </div>

    )
}