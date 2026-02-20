import { ModeToggle } from "./theme/theme-mode-toggle"
import { TypographyH4 } from "./typography/typography"

export const Header = () => {
    return (
        <header className="flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
            <div className="flex items-center justify-between w-full px-4">
                <TypographyH4 text="Iftar Time" />
                <ModeToggle />
            </div>
        </header>
    )
}