import { MONTH_NAMES } from "@/data/ramadan-times";
import { Badge } from "./badge"

const getOrdinalSuffix = (n: number) => {
    if (n % 100 >= 11 && n % 100 <= 13) return 'th'; // для 11,12,13
    switch (n % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};


const BadgeYear = ({ day, month, year, }: { year: number, month: string, day: number }) => {
    return (
        <Badge>{`${day} ${month} ${year}`}</Badge>
    )
}

const BadgeRamadanDay = ({ ramadanDay }: { ramadanDay: number | undefined }) => {
    if (ramadanDay === undefined) return null
    const suffix = getOrdinalSuffix(ramadanDay)

    return (
        <Badge>{`${ramadanDay}${suffix} day of Ramadan`}</Badge>
    )

}


export { BadgeYear, BadgeRamadanDay }

