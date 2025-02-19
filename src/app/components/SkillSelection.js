// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const SkillLogo = ({ src, alt, delay = 0 }) => {
//   return (
//     <motion.div
//       className="w-24 h-24 flex justify-center items-center"
//       initial={{ rotate: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         ease: "linear",
//         delay: delay,
//       }}
//     >
//       <img
//         src={src}
//         alt={alt}
//         width={80}
//         height={80}
//         className="w-full h-full object-contain"
//       />
//     </motion.div>
//   );
// };

// const SkillsSection = () => {
//   const skills = [
//     { src: "/react.png", alt: "React" },
//     { src: "/next.png", alt: "Next.js" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
//     { src: "/js.png", alt: "JavaScript" },
//     { src: "/css.png", alt: "TypeScript" },
//     { src: "/redux.png", alt: "Node.js" },
//   ];

//   return (
//     <div className="py-12 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
//           My Skills
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {skills.map((skill, index) => (
//             <SkillLogo
//               key={index}
//               src={skill.src}
//               alt={skill.alt}
//               delay={index * 0.2} // Staggered delay for each logo
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;