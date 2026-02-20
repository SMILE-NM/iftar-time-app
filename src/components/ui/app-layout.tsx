interface AppLayoutProps {
    header: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
}

export const AppLayout = ({ header, footer, children }: AppLayoutProps) => {
    return (
        <div>
            {header}
            <div className="flex flex-1 flex-col gap-4 p-4">
                {children}
            </div>
            {footer}

        </div>
    )
}