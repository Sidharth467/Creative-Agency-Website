// "use client"

// import { motion } from "framer-motion"

// export default function PageHeader({ title }: { title: string }) {
//   const words = title.split(" ")

//   return (
//     <div className="px-10 pt-32 pb-20">
//       <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tight leading-none">
//         {words.map((word, i) => (
//           <span
//             key={i}
//             className="inline-block overflow-hidden mr-4"
//             style={{ verticalAlign: "bottom" }}
//           >
//             <motion.span
//               initial={{ y: "120%" }}
//               animate={{ y: "0%" }}
//               transition={{
//                 delay: i * 0.12,
//                 duration: 0.9,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="inline-block"
//             >
//               {word}
//             </motion.span>
//           </span>
//         ))}
//       </h1>
//     </div>
//   )
// }



"use client"

import { motion } from "framer-motion"

export default function PageHeader({ title }: { title: string }) {
  const letters = title.split("")

  return (
    <div className="px-10 pt-32 pb-20">
      <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tight leading-none">
        {letters.map((char, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ whiteSpace: "pre" }}
          >
            <motion.span
              initial={{ y: "120%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: i * 0.03,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  )
}
