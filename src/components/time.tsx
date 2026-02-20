import { useRamadanStore } from "@/store/store";

export default function RamadanCountdown() {
    // useRamadanTimer()
    const { iftar, suhoor } = useRamadanStore((state) => state);

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
            <h2>Оставшееся время до сухура: {suhoor}</h2>
            <h2>Оставшееся время до ифтара: {iftar}</h2>
        </div>
    );
}
