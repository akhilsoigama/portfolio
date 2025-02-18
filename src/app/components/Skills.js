import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/next.png" },
  { name: "Redux", icon: "/redux.png" },

  { name: "Tailwind CSS", icon: "/tailwind.png" },
  
];

const Skills = () => {
  return (
    <div className="bg-black/40 w-full h-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6  "
    >
      <Typography variant="h4" className="  text-center">
        Frontend Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="p-4 mt-5 flex items-center gap-2 shadow-lg">
                <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                <CardContent className="p-0">{skill.name}</CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
    </div>
  );
};

export default Skills;