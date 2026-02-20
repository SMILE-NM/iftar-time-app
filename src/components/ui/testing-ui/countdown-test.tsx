// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import Countdown from "react-countdown";

// export default function CountdownTimer() {

//     const renderer = ({ hours, minutes, seconds, completed }: any) => {
//         if (completed) {
//             return <div className="text-green-500">Finished</div>;
//         }

//         return (
//             <>
//                 <TimeStyleItem number={hours} label="Hours" />
//                 <TimeStyleItem number={minutes} label="Minutes" />
//                 <TimeStyleItem number={seconds} label="Seconds" />
//             </>
//         );
//     };

//     return (
//         <div className="flex justify-center items-center">
//             <Countdown
//                 date={Date.now() + 100000 * 60 * 5}
//                 renderer={renderer}
//             />
//         </div>
//     );
// }


// interface TimeStyleItemProps {
//     number: number
//     label: string
// }

// const TimeStyleItem = ({ number, label }: TimeStyleItemProps) => {

//     return (
//         <div className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-6 md:gap-2 md:py-8">

//             <div className="relative w-full overflow-hidden text-center">

//                 <AnimatePresence mode="wait">
//                     <motion.span
//                         key={number}
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -50, opacity: 0 }}
//                         transition={{ duration: 0.25, ease: "easeOut" }}
//                         className="block text-3xl font-mono font-semibold dark:text-white text-black md:text-5xl lg:text-7xl transition-colors duration-500"
//                     >
//                         {number}
//                     </motion.span>
//                 </AnimatePresence>

//             </div>

//             <span className="text-sm font-light dark:text-gray-400 text-gray-500 md:text-base lg:text-lg transition-colors duration-500">
//                 {label}
//             </span>

//             <div className="h-px w-full bg-border mt-4"></div>
//         </div>
//     );
// };


// // const TimeStyleItem = ({ number, label }: TimeStyleItemProps) => (
// //     <div className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-6 md:gap-2 md:py-8">
// //         <div className="relative w-full overflow-hidden text-center">
// //             <span

// //                 className="block text-3xl font-mono font-semibold dark:text-white text-black md:text-5xl lg:text-7xl transition-colors duration-500"
// //             >
// //                 {number}
// //             </span>
// //         </div>
// //         <span className="text-sm font-light dark:text-gray-400 text-gray-500 md:text-base lg:text-lg transition-colors duration-500">
// //             {label}
// //         </span>
// //         <div className="h-px w-full dark:bg-gray-700 bg-gray-300 mt-4 transition-colors duration-500"></div>
// //     </div>
// // )