'use client'
import MyCountdownTimer from "@/components/circle-countdown-timer"
import { RamadanTimesTable } from "@/components/ramadan-times-table";
import { Badge } from "@/components/ui/badge"
import { BadgeRamadanDay, BadgeYear } from "@/components/ui/badges";
import { ModeToggle } from "@/components/ui/mode-toggle"
import { TypographyH2, TypographyH3, TypographyH4, } from "@/components/ui/typography/typography"
import { useRamadanStore } from "@/store/store";
import { getIftarAndSuhoorTime } from "@/utils/ramadanTimer";
import { MapPin } from "lucide-react"
import { useEffect, useState } from "react";

const LOCATION = "Korea, Seoul"




export default function Page() {
  const { iftar, suhoor } = useRamadanStore((state) => state);
  const [title, setTitle] = useState("iftar")
  useEffect(() => {
    console.log("IFTAR: ", iftar)
    console.log("SUHOOR: ", suhoor)
    iftar != 0 && suhoor === 0 ? setTitle("iftar") : setTitle("suhoor")
  }, [iftar, suhoor])


  console.log("TITLE: ", title)
  const { iftarTime, suhoorTime, day, month, year, ramadanDay } = getIftarAndSuhoorTime();

  return (
    <div>
      <div>
        <header className="flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center justify-between w-full px-4">
            <TypographyH4 text="Iftar Time" />
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-muted/50 min-h-[60vh] flex flex-col items-center justify-center rounded-xl" >
            {title === 'iftar' ? <TypographyH2 text={"Time until Iftar"} /> : <TypographyH2 text={"Time left for Suhoor"} />}


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
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min h-auto" >
            <RamadanTimesTable currentDay={ramadanDay} />
          </div>
        </div>
      </div>
    </div>
  )
}
