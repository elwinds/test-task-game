import * as React from "react";
import classes from "./Options.module.scss";
import { AppContext } from "../../../context/AppContext";

const Parameters: React.FC = () => {
  const { parameters } = React.useContext(AppContext);

  return (
    <div className={classes.options}>
      <div className={classes.options__item}>Сила: {parameters.power}</div>
      <div className={classes.options__item}>
        Ловкость: {parameters.agility}
      </div>
      <div className={classes.options__item}>
        Интеллект: {parameters.intellect}
      </div>
      <div className={classes.options__item}>
        Харизма: {parameters.charisma}
      </div>
      <br />
      <div className={classes.options__item}>
        Жизненная сила: {parameters.vitality}
      </div>
      <div className={classes.options__item}>
        Уклонение: {parameters.agility + 10}
      </div>
      <div className={classes.options__item}>
        Энергичность: {parameters.agility + parameters.intellect}
      </div>
    </div>
  );
};

export default Parameters;
