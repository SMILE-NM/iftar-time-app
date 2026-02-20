"use client"

import { RamadanTimesTable } from "../ui/ramadan-times-table"
import { useRamadanStore } from "@/store/store";

export const TableWidget = () => {
    const ramadanDay = useRamadanStore((state) => state.ramadanDay);
    return (
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min h-auto" >
            <RamadanTimesTable currentDay={ramadanDay} />
        </div>
    )

}