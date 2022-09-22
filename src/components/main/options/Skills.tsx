import * as React from "react";
import classes from "./Options.module.scss";
import { AppContext } from "../../../context/AppContext";
import { SkillsContext } from "../../../context/SkillsContext";
import Skill from "./Skill";

const Skills = () => {
  const { parameters } = React.useContext(AppContext);

  const { skills, setSkills } = React.useContext(SkillsContext);

  return (
    <div className={classes.options}>
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[0]}
        skillName="Атака"
        skillValue={skills.attack}
        parameterValue={parameters.power}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[1]}
        skillName="Стелс"
        skillValue={skills.stealth}
        parameterValue={parameters.agility}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[2]}
        skillName="Стрельба из лука"
        skillValue={skills.archery}
        parameterValue={parameters.agility}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[3]}
        skillName="Обучаемость"
        skillValue={skills.learnability}
        parameterValue={parameters.intellect}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[4]}
        skillName="Выживание"
        skillValue={skills.survival}
        parameterValue={parameters.intellect}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[5]}
        skillName="Медицина"
        skillValue={skills.medicine}
        parameterValue={parameters.intellect}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[6]}
        skillName="Запугивание"
        skillValue={skills.intimidation}
        parameterValue={parameters.charisma}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[7]}
        skillName="Проницательность"
        skillValue={skills.insight}
        parameterValue={parameters.charisma}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[8]}
        skillName="Внешний вид"
        skillValue={skills.appearance}
        parameterValue={parameters.charisma}
        setSkills={setSkills}
      />
      <Skill
        skills={skills}
        skillKey={Object.keys(skills)[9]}
        skillName="Манипулирование"
        skillValue={skills.manipulation}
        parameterValue={parameters.charisma}
        setSkills={setSkills}
      />
    </div>
  );
};

export default Skills;
