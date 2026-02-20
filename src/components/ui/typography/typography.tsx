interface Props {
    text: string
}


export function TypographyH1({ text }: Props) {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {text}
        </h1>
    )
}

export function TypographyH2({ text }: Props) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {text}
        </h2>
    )
}


export function TypographyH3({ text }: Props) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-mono">
            {text}
        </h3>
    )
}


export function TypographyH4({ text }: Props) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {text}
        </h4>
    )
}

export function TypographyP({ text }: Props) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {text}
        </p>
    )
}



