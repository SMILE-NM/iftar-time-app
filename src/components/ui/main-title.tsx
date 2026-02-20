"use client"

// import { TypographyH } from "./ui/typography/typography"
import { useRamadanStore } from "@/store/store";
import { TypographyH2 } from "./typography/typography";

export const MainTitle = () => {
    const iftar = useRamadanStore((state) => state.iftar)
    const suhoor = useRamadanStore((state) => state.suhoor)

    const isIftar = iftar !== 0 && suhoor === 0

    return (
        <TypographyH2
            text={isIftar ? "Time until Iftar" : "Time left for Suhoor"}
        />
    )
}


