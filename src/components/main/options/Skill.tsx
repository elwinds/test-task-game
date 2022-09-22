import * as React from "react";
import { Skills } from "../../../context/SkillsContext";
import PlusBtn from "../../UI/plusBtn/PlusBtn";
import classes from "./Options.module.scss";

type Props = {
  skills: Skills,
  skillName: string;
  skillValue: number;
  parameterValue: number;
  skillKey: string;
  setSkills: React.Dispatch<React.SetStateAction<Skills>> | null;
};

const Skill: React.FC<Props> = (props) => {
  const { skills, skillKey, skillName, skillValue, parameterValue, setSkills } = props;
  
  const trainSkill = (
    skillValue: number,
    charParameterValue: number,
  ) => {
    if (skillValue < charParameterValue && skillValue < 5 && setSkills) {
      setSkills({...skills, [skillKey]: skillValue + 1});
    }
  };

  const levelDescription = (skillValue: number) => {
    switch (skillValue) {
      case 1:
        return "(Новичок)";
      case 2:
        return "(Ученик)";
      case 3:
        return "(Адепт)";
      case 4:
        return "(Эксперт)";
      case 5:
        return "(Мастер)";
      default:
        return "(Нетренированный)";
    }
  };

  return (
    <>
      <div className={classes.options__item}>
        <div className={classes.options__skill}>{skillName}</div>
        <div className={classes.options__skill}>
          <div>Уровень: {skillValue + " " + levelDescription(skillValue)}</div>
          <PlusBtn
            handler={() => trainSkill(skillValue, parameterValue)}
          />
        </div>
      </div>
      {skillValue === 5 ||
      (skillValue === parameterValue && parameterValue > 0) ? (
        <div className={classes.options__warning}>
          Достигнут максимальный уровень навыка
        </div>
      ) : null}
    </>
  );
};

export default Skill;
