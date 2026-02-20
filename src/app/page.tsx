import { AppLayout } from "@/components/ui/app-layout";
import { Header } from "@/components/ui/header";

import { TableWidget } from "@/components/widgets/table-widget";
import { TimeWidget } from "@/components/widgets/time-widget";
import { TodayWidget } from "@/components/widgets/today-widget";

export default function Page() {

  return (
    <AppLayout header={<Header />}>
      <TimeWidget />
      <TodayWidget />
      <TableWidget />
    </AppLayout>
  )
}
