import * as React from "react";

export type Skills = {
  attack: number;
  stealth: number;
  archery: number;
  learnability: number;
  survival: number;
  medicine: number;
  intimidation: number;
  insight: number;
  appearance: number;
  manipulation: number;
};

interface SkillsContext {
  skills: Skills;
  setSkills: React.Dispatch<React.SetStateAction<Skills>> | null;
}

const defaultValueSkills = {
  setSkills: null,
  skills: {
    attack: 0,
    stealth: 0,
    archery: 0,
    learnability: 0,
    survival: 0,
    medicine: 0,
    intimidation: 0,
    insight: 0,
    appearance: 0,
    manipulation: 0,
  },
};

export const SkillsContext =
  React.createContext<SkillsContext>(defaultValueSkills);
  
