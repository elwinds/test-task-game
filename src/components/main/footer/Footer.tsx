import * as React from "react";
import Button from "../../UI/btn/Button";
import classes from "./Footer.module.scss";
import { AppContext } from "../../../context/AppContext";
import { SkillsContext } from "../../../context/SkillsContext";

const Footer = () => {
  const { name, setName, parameters, setParameters } =
    React.useContext(AppContext);

  const { skills, setSkills } = React.useContext(SkillsContext);

  const dataCharacter = {
    name,
    parameters,
    skills,
  };
  const fileData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(dataCharacter, null, 2));

  const uploadCharacter = (event: any) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.addEventListener("load", () => {
      const uploadedCharacter = JSON.parse(
        String(reader.result)
      ) as typeof dataCharacter;
      setName?.(uploadedCharacter.name);
      setParameters?.({
        power: uploadedCharacter.parameters.power,
        agility: uploadedCharacter.parameters.agility,
        intellect: uploadedCharacter.parameters.intellect,
        charisma: uploadedCharacter.parameters.charisma,
        vitality: uploadedCharacter.parameters.vitality,
      });
      setSkills?.({
        attack: uploadedCharacter.skills.attack,
        stealth: uploadedCharacter.skills.stealth,
        archery: uploadedCharacter.skills.archery,
        learnability: uploadedCharacter.skills.learnability,
        survival: uploadedCharacter.skills.survival,
        medicine: uploadedCharacter.skills.medicine,
        intimidation: uploadedCharacter.skills.intimidation,
        insight: uploadedCharacter.skills.insight,
        appearance: uploadedCharacter.skills.appearance,
        manipulation: uploadedCharacter.skills.manipulation,
      });
    });
  };

  return (
    <div className={classes.container}>
      <label className={classes.inputfile}>
        <input
          className={classes.inputfile__input}
          type="file"
          accept="application/json"
          onChange={uploadCharacter}
        />
        <span className={classes.inputfile__text}>Загрузить персонажа</span>
      </label>
      <a href={fileData} download={"Character.json"}>
        <Button text="Сохранить персонажа" handler={() => {}} />
      </a>
    </div>
  );
};

export default Footer;
