'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { RAMADAN_TIMES_SEOUL } from "@/data/ramadan-times";

export function RamadanTimesTable({ currentDay }: { currentDay: number }) {
    return (
        <Table>
            <TableCaption>Ramadan Schedule in Seoul 2026</TableCaption>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-[80px]">Day</TableHead>
                    <TableHead className="w-[120px]">Date</TableHead>
                    <TableHead className="w-[120px]">Suhoor</TableHead>
                    <TableHead className="w-[120px]">Iftar</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {RAMADAN_TIMES_SEOUL.map((day) => {
                    // Преобразуем дату в формат "25 February"
                    const dateObj = new Date(day.date);
                    const formattedDate = dateObj.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                    });
                    return (
                        <TableRow
                            key={day.day}
                            className={day.day === currentDay ? "bg-green-100 dark:bg-[#22c55e] dark:text-white font-bold" : ""}
                        >
                            <TableCell className="font-medium">{day.day}</TableCell>
                            <TableCell>{formattedDate}</TableCell>
                            <TableCell>{day.suhoor}</TableCell>
                            <TableCell>{day.iftar}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>

            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4} className="text-center font-medium p-2">
                        Total Days: {RAMADAN_TIMES_SEOUL.length}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
