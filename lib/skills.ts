export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Research & Strategy",
    skills: ["User Research", "Usability Testing", "Journey Mapping", "Information Architecture"],
  },
  {
    title: "Design & Prototyping",
    skills: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Notion", "Maze"],
  },
];
